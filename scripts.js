/* ============================================================
   DIKSHANT ATHAWALE – Portfolio Scripts
   WebGL Shader | Scroll Spy | Dock Navigation | Animations
   ============================================================ */

(function () {
  'use strict';

  /* ---- Constants ---- */
  const LOADING_DURATION = 2200;
  const SCROLL_THRESHOLD = 60;
  const COUNTER_DURATION = 1800;
  const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'github', 'contact'];
  const KEYBOARD_MAP = {
    '1': 'hero',
    '2': 'about',
    '3': 'skills',
    '4': 'projects',
    '5': 'education',
    '6': 'certifications',
    '7': 'github',
    '8': 'contact'
  };

  /* ---- State ---- */
  let lastScrollY = 0;
  let dockHidden = false;
  let ticking = false;
  let prefersReducedMotion = false;

  /* ---- Initialize ---- */
  function init() {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    initLoadingScreen();
    initShaderBackground();
    initScrollProgress();
    initDockNavigation();
    initScrollReveal();
    initCounterAnimations();
    initSkillBars();
    initSkillTabs();
    initMagneticEffect();
    initKeyboardShortcuts();
    initContactForm();


  }

  /* ---- Loading Screen ---- */
  function initLoadingScreen() {
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;

    const delay = prefersReducedMotion ? 300 : LOADING_DURATION;

    window.addEventListener('load', () => {
      setTimeout(() => {
        overlay.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(() => {
          overlay.remove();
        }, 900);
      }, delay);
    });
  }

  /* ---- WebGL Aurora Shader Background ---- */
  function initShaderBackground() {
    const container = document.getElementById('shader-bg');
    if (!container) return;

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    function syncSize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      // Fallback: show CSS aurora
      container.remove();
      const fallback = document.querySelector('.aurora-fallback');
      if (fallback) fallback.style.display = 'block';
      return;
    }

    const vertexShaderSrc = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSrc = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.15;

        // Aurora-like organic movement
        float c1 = sin(p.x * 2.0 + t) * 0.5 + 0.5;
        float c2 = cos(p.y * 1.5 - t * 0.7) * 0.5 + 0.5;
        float c3 = sin(p.x * 1.2 + p.y * 1.8 + t * 0.5) * 0.5 + 0.5;

        // Mouse interaction - subtle light attraction
        vec2 mouse = u_mouse / u_resolution;
        vec2 mp = mouse * 2.0 - 1.0;
        mp.x *= u_resolution.x / u_resolution.y;
        float mouseDist = length(p - mp);
        float mouseInfluence = smoothstep(1.5, 0.0, mouseDist) * 0.08;

        // Color palette
        vec3 baseColor = vec3(0.02, 0.03, 0.09);
        vec3 cyanColor = vec3(0.0, 0.65, 0.85);
        vec3 purpleColor = vec3(0.43, 0.0, 0.74);
        vec3 blueColor = vec3(0.3, 0.4, 0.9);

        // Blending
        float mask1 = smoothstep(0.6, 0.0, length(p + vec2(sin(t) * 0.6, cos(t * 0.8) * 0.4)));
        float mask2 = smoothstep(0.5, 0.0, length(p - vec2(cos(t * 0.6) * 0.5, sin(t * 0.9) * 0.3)));

        vec3 col = baseColor;
        col = mix(col, cyanColor, c1 * 0.12 + mask1 * 0.08);
        col = mix(col, purpleColor, c2 * 0.08 + mask2 * 0.06);
        col = mix(col, blueColor, c3 * 0.05);
        col += cyanColor * mouseInfluence;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSrc);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
        mouse.y = (1.0 - (e.clientY - rect.top) / rect.height) * canvas.height;
      }
    });

    function render(time) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }

    render(0);
  }

  /* ---- Scroll Progress Bar ---- */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ---- Dock Navigation ---- */
  function initDockNavigation() {
    const dock = document.getElementById('dock');
    if (!dock) return;

    const dockItems = dock.querySelectorAll('.dock-item[data-section]');
    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);

    // Scroll spy via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveDockItem(id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Click handlers
    dockItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.dataset.section;

        // Special handling for chatbot dock item
        if (targetId === 'chatbot') {
          if (window.DevBotChatbot) {
            window.DevBotChatbot.toggle();
          }
          return;
        }

        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      });
    });

    // Auto-hide on scroll direction
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isHero = currentScrollY < window.innerHeight * 0.5;

          if (isHero) {
            // Always show dock in hero area
            showDock();
          } else if (currentScrollY > lastScrollY + SCROLL_THRESHOLD) {
            hideDock();
          } else if (currentScrollY < lastScrollY - 10) {
            showDock();
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    function setActiveDockItem(sectionId) {
      dockItems.forEach(item => {
        const isActive = item.dataset.section === sectionId;
        item.classList.toggle('active', isActive);
        const icon = item.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.style.fontVariationSettings = isActive ? "'FILL' 1" : "'FILL' 0";
        }

        // Auto-scroll active item into view within the scrollable dock
        if (isActive && dock.scrollWidth > dock.clientWidth) {
          item.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      });
    }

    function hideDock() {
      if (!dockHidden) {
        dock.classList.add('dock-hidden');
        dockHidden = true;
      }
    }

    function showDock() {
      if (dockHidden) {
        dock.classList.remove('dock-hidden');
        dockHidden = false;
      }
    }
  }

  /* ---- Scroll Reveal Animations ---- */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* ---- Counter Animations ---- */
  function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';

    if (prefersReducedMotion || isNaN(target)) {
      el.textContent = target + suffix;
      return;
    }

    const duration = COUNTER_DURATION;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* ---- Skill Progress Bars ---- */
  function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    if (!skillBars.length) return;

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.dataset.width;
          if (width) {
            setTimeout(() => {
              fill.style.width = width;
            }, 200);
          }
          barObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => barObserver.observe(bar));
  }

  /* ---- Skill Category Tabs ---- */
  function initSkillTabs() {
    const tabContainer = document.querySelector('.skills-tabs');
    if (!tabContainer) return;

    const tabs = tabContainer.querySelectorAll('.skill-tab');
    const cards = document.querySelectorAll('.skill-category-card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Filter cards
        cards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  /* ---- Magnetic Hover Effect (Dock) ---- */
  function initMagneticEffect() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.dock-item').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.2)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ---- Keyboard Shortcuts ---- */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ignore if typing in input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      // Ignore if modifier keys
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const sectionId = KEYBOARD_MAP[e.key];
      if (sectionId) {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }
    });
  }

  /* ---- Contact Form ---- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('.form-submit');
    const formFields = form.querySelector('.form-fields');
    const formSuccess = form.querySelector('.form-success');

    if (!submitBtn || !formFields || !formSuccess) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitBtn.disabled) return;

      // Basic validation
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      let isValid = true;
      [name, email, message].forEach(field => {
        let fieldValid = true;
        
        if (!field.value.trim()) {
          fieldValid = false;
        } else if (field.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            fieldValid = false;
          }
        }

        if (!fieldValid) {
          isValid = false;
          field.style.borderBottomColor = '#ffb4ab';
          field.style.animation = 'shake 0.4s ease';
          setTimeout(() => {
            field.style.borderBottomColor = '';
            field.style.animation = '';
          }, 1000);
        }
      });

      if (!isValid) return;

      // Disable button and show loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined" style="font-size:18px; animation: spin 1s linear infinite;">autorenew</span>';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';

      // Simulate network request
      setTimeout(() => {
        formFields.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Reset form
        form.reset();
        
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.opacity = '';
        submitBtn.style.cursor = '';
        
        // Optional: you can hide success message and show form again after some time
        setTimeout(() => {
          formSuccess.classList.remove('show');
          formFields.style.display = 'block';
        }, 5000);
      }, 1500);
    });
  }



  /* ---- Start ---- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
