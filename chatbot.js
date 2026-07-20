/* ============================================================
   DIKSHANT ATHAWALE – Portfolio Chatbot (DevBot)
   Knowledge-based AI assistant with typewriter animation
   ============================================================ */

(function () {
  'use strict';

  /* ================================================================
     KNOWLEDGE BASE
     Converted from chatbot/chatbotKnowledge.ts
     ================================================================ */

  const chatbotKnowledge = [
    // ---- PERSONAL INTRODUCTION ----
    {
      id: 'intro-1', category: 'personal',
      question: 'Tell me about yourself',
      aliases: ['introduce yourself', 'who are you', 'describe yourself', 'about you', 'what should i know about you', 'give me an introduction', 'self introduction', 'walk me through your background', 'brief introduction', 'about dikshant', 'who is dikshant'],
      keywords: ['tell', 'about', 'yourself', 'introduce', 'who', 'background', 'introduction'],
      answer: "I'm Dikshant Ramesh Athawale — a Full Stack Developer and Computer Science Engineering graduate from HVPM College, Amravati (affiliated to SGBAU, class of 2026). I build end-to-end web applications using React, Node.js, Express.js, and MySQL. My flagship project is a College ERP system — a role-based academic management platform featuring real-time sync with Socket.IO, JWT authentication, and a polished React + TypeScript frontend. I'm passionate about clean architecture, scalable APIs, and writing maintainable code across the entire stack."
    },
    {
      id: 'intro-2', category: 'personal',
      question: 'What is your full name?',
      aliases: ['your name', "what's your name", 'name please', 'what do people call you'],
      keywords: ['name', 'full name', 'called'],
      answer: 'My full name is Dikshant Ramesh Athawale.'
    },
    {
      id: 'intro-3', category: 'personal',
      question: 'What is your current role?',
      aliases: ['what do you do', 'your designation', 'your title', 'job title', 'your role', 'what is your profession', 'what are you working as'],
      keywords: ['role', 'designation', 'title', 'profession', 'do you do', 'working as'],
      answer: "I'm a Full Stack Developer. I specialize in building complete web applications — from responsive React interfaces on the frontend to RESTful APIs and relational databases on the backend — using technologies like Node.js, Express.js, and MySQL."
    },
    {
      id: 'intro-4', category: 'personal',
      question: 'What is your email address?',
      aliases: ['email', 'mail id', 'email id', 'how can i email you', 'contact email'],
      keywords: ['email', 'mail'],
      answer: 'You can reach me at dikshant.r.athawale@gmail.com.'
    },
    {
      id: 'intro-5', category: 'personal',
      question: 'What is your phone number?',
      aliases: ['phone', 'mobile number', 'contact number', 'call you', 'phone number'],
      keywords: ['phone', 'mobile', 'number', 'call'],
      answer: 'I prefer to be contacted via email. You can reach me at dikshant.r.athawale@gmail.com.'
    },
    {
      id: 'intro-6', category: 'personal',
      question: 'Which city are you from?',
      aliases: ['where are you from', 'your location', 'where do you live', 'hometown', 'city', 'based in', 'where are you based', 'your address'],
      keywords: ['city', 'location', 'where', 'from', 'live', 'hometown', 'based', 'address'],
      answer: "I'm from Amravati, India."
    },
    {
      id: 'intro-7', category: 'personal',
      question: 'How can I contact you?',
      aliases: ['contact info', 'contact details', 'how to reach you', 'get in touch', 'reach you', 'connect with you'],
      keywords: ['contact', 'reach', 'touch', 'connect'],
      answer: 'You can reach me via email at dikshant.r.athawale@gmail.com. I\'m also on LinkedIn (linkedin.com/in/dikshant-athawale-374763213) and GitHub (github.com/DIkshant-Athawale). Feel free to connect!'
    },
    {
      id: 'intro-8', category: 'personal',
      question: 'What is your LinkedIn profile?',
      aliases: ['linkedin', 'linkedin url', 'linkedin link'],
      keywords: ['linkedin'],
      answer: 'You can find me on LinkedIn at linkedin.com/in/dikshant-athawale-374763213 — feel free to connect!'
    },
    {
      id: 'intro-9', category: 'personal',
      question: 'What is your GitHub profile?',
      aliases: ['github', 'github url', 'github link', 'github account'],
      keywords: ['github'],
      answer: 'My GitHub is github.com/DIkshant-Athawale — you can check out my projects and contributions there!'
    },

    // ---- EDUCATION ----
    {
      id: 'edu-1', category: 'education',
      question: 'What is your educational background?',
      aliases: ['tell me about your education', 'education details', 'academic background', 'qualifications', 'your studies', 'where did you study', 'educational qualifications'],
      keywords: ['education', 'study', 'academic', 'qualification', 'school', 'college', 'degree', 'studied'],
      answer: "I graduated with a B.E. in Computer Science Engineering (CSE) from HVPM College of Engineering and Technology, affiliated to Sant Gadge Baba Amravati University (SGBAU), in 2026. Before that, I completed my Higher Secondary Certificate (HSC) in Science from Vidyabharti Mahavidyalaya, Amravati in 2022, and my Secondary School Certificate (SSC) from Golden Kids High School, Amravati in 2020."
    },
    {
      id: 'edu-2', category: 'education',
      question: 'What is your degree?',
      aliases: ['what degree are you pursuing', 'your degree', 'engineering degree', 'bachelor degree'],
      keywords: ['degree', 'bachelor', 'engineering', 'be', 'btech'],
      answer: "I hold a Bachelor of Engineering (B.E.) in Computer Science Engineering (CSE) from HVPM College of Engineering and Technology, affiliated to Sant Gadge Baba Amravati University (SGBAU). Graduated in 2026."
    },
    {
      id: 'edu-3', category: 'education',
      question: 'Which college did you attend?',
      aliases: ['your college', 'college name', 'which college', 'where are you studying', 'engineering college'],
      keywords: ['college', 'institute', 'institution'],
      answer: "I studied at HVPM College of Engineering and Technology, Amravati — it's affiliated to Sant Gadge Baba Amravati University (SGBAU)."
    },
    {
      id: 'edu-4', category: 'education',
      question: 'Which university is your college affiliated with?',
      aliases: ['your university', 'university name', 'affiliated university'],
      keywords: ['university', 'affiliated', 'sgbau'],
      answer: 'My college is affiliated to Sant Gadge Baba Amravati University (SGBAU).'
    },
    {
      id: 'edu-5', category: 'education',
      question: 'When did your degree start and end?',
      aliases: ['graduation year', 'when do you graduate', 'year of graduation', 'batch', 'passing year', 'when will you graduate'],
      keywords: ['graduate', 'graduation', 'batch', 'passing', 'year', 'start', 'end'],
      answer: "My B.E. program ran from 2022 to 2026. I graduated in 2026."
    },
    {
      id: 'edu-6', category: 'education',
      question: 'Which school did you complete HSC from?',
      aliases: ['hsc school', '12th school', 'higher secondary', '12th grade', 'hsc details'],
      keywords: ['hsc', '12th', 'higher secondary', 'twelfth'],
      answer: 'I completed my Higher Secondary Certificate (HSC) in Science from Vidyabharti Mahavidyalaya, Amravati in 2022.'
    },
    {
      id: 'edu-7', category: 'education',
      question: 'Which school did you complete SSC from?',
      aliases: ['ssc school', '10th school', 'secondary school', '10th grade', 'ssc details'],
      keywords: ['ssc', '10th', 'secondary school', 'tenth'],
      answer: 'I completed my Secondary School Certificate (SSC) from Golden Kids High School, Amravati in 2020.'
    },

    // ---- TECHNICAL SKILLS ----
    {
      id: 'skill-1', category: 'skills',
      question: 'What are your technical skills?',
      aliases: ['your skills', 'what skills do you have', 'technical expertise', 'tech stack', 'what technologies do you know', 'what can you do technically', 'skill set', 'your abilities'],
      keywords: ['skills', 'technical', 'expertise', 'technologies', 'tech stack', 'abilities', 'skillset'],
      answer: "I have a well-rounded full stack skill set:\n\n• **Programming Languages**: Java, JavaScript, Python, C\n• **Frontend Technologies**: HTML5, CSS3, JavaScript (ES6+), React\n• **Backend Technologies**: Node.js, Express.js, RESTful API Design\n• **Database & SQL**: SQL, MySQL, Database Design & Query Optimization\n• **Core CS Concepts**: Data Structures & Algorithms, OOP, Computer Networks, Operating Systems\n• **Version Control**: Git, GitHub\n• **Tools & DevOps**: VS Code, Microsoft Excel, Antigravity, Docker\n• **Soft Skills**: Problem Solving, Team Collaboration, Communication Skills"
    },
    {
      id: 'skill-2', category: 'skills',
      question: 'What programming languages do you know?',
      aliases: ['languages you know', 'coding languages', 'programming languages', 'which languages'],
      keywords: ['programming', 'languages', 'coding', 'language'],
      answer: "I'm proficient in Java, JavaScript (ES6+), Python, and C. JavaScript is my primary language for full stack development, while Java is my go-to for DSA and OOP concepts."
    },
    {
      id: 'skill-3', category: 'skills',
      question: 'What frontend technologies do you know?',
      aliases: ['frontend skills', 'front end', 'client side', 'ui technologies', 'what do you use for frontend'],
      keywords: ['frontend', 'front-end', 'front end', 'client', 'ui', 'react', 'html', 'css'],
      answer: "On the frontend, I work with HTML5, CSS3, JavaScript (ES6+), and React. I focus on building responsive, mobile-first interfaces with smooth UX and cross-browser compatibility."
    },
    {
      id: 'skill-4', category: 'skills',
      question: 'What backend technologies do you know?',
      aliases: ['backend skills', 'back end', 'server side', 'api skills', 'what do you use for backend'],
      keywords: ['backend', 'back-end', 'back end', 'server', 'api', 'node', 'express'],
      answer: "On the backend, I work with Node.js, Express.js, RESTful API design, MySQL schema design, query optimization, JWT authentication with httpOnly refresh-token cookies and bcrypt hashing, and Socket.IO for real-time features. I build scalable, secure server-side applications with clean architecture."
    },
    {
      id: 'skill-5', category: 'skills',
      question: 'Which databases do you know?',
      aliases: ['database skills', 'db knowledge', 'sql skills', 'database experience', 'which database'],
      keywords: ['database', 'db', 'sql', 'mysql', 'jdbc'],
      answer: "I work primarily with MySQL and SQL for relational database management. I'm skilled in database design, schema optimization, and query optimization using techniques like indexing and connection pooling."
    },
    {
      id: 'skill-6', category: 'skills',
      question: 'What DevOps tools do you know?',
      aliases: ['devops skills', 'tools you use', 'development tools', 'docker experience', 'git experience'],
      keywords: ['devops', 'docker', 'git', 'tools', 'version control'],
      answer: "I use Git and GitHub for version control and collaboration. I have fundamental knowledge of Docker for containerized environments. My primary IDE is VS Code, and I also use tools like Antigravity for AI-assisted development and Microsoft Excel for data analysis."
    },
    {
      id: 'skill-7', category: 'skills',
      question: 'What soft skills do you have?',
      aliases: ['interpersonal skills', 'non-technical skills', 'communication skills', 'teamwork'],
      keywords: ['soft skills', 'interpersonal', 'communication', 'teamwork', 'collaboration'],
      answer: "My key soft skills include Problem Solving (I enjoy breaking down complex problems into manageable components), Team Collaboration (I thrive in code-review-driven engineering teams), and Communication Skills (I can clearly articulate technical concepts to both technical and non-technical audiences)."
    },
    {
      id: 'skill-8', category: 'skills',
      question: 'Do you know TypeScript?',
      aliases: ['typescript experience', 'ts', 'typescript skills'],
      keywords: ['typescript', 'ts'],
      answer: "Yes! I use TypeScript extensively, especially in my React projects. My College ERP system was built with React and TypeScript — I appreciate the type safety, better developer experience, and maintainability that TypeScript brings to large codebases."
    },
    {
      id: 'skill-9', category: 'skills',
      question: 'Do you know React?',
      aliases: ['react experience', 'react skills', 'react developer'],
      keywords: ['react'],
      answer: "Absolutely! React is one of my core technologies. I've used it to build complex interfaces like my College ERP system's frontend — with React + TypeScript, Vite, TailwindCSS, shadcn/ui, Framer Motion animations, and Recharts data visualizations. I'm comfortable with hooks, context, state management, and component architecture."
    },
    {
      id: 'skill-10', category: 'skills',
      question: 'What CS fundamentals do you know?',
      aliases: ['computer science fundamentals', 'core cs concepts', 'dsa', 'data structures', 'algorithms', 'oop'],
      keywords: ['fundamentals', 'dsa', 'data structures', 'algorithms', 'oop', 'cs concepts', 'computer science'],
      answer: "I have strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, and Operating Systems. These fundamentals help me write efficient, well-structured code and make informed architectural decisions in my full-stack projects."
    },

    // ---- PROJECTS ----
    {
      id: 'proj-1', category: 'projects',
      question: 'What projects have you built?',
      aliases: ['your projects', 'tell me about your projects', 'project experience', 'what have you built', 'show me your work', 'project portfolio', 'list your projects'],
      keywords: ['projects', 'built', 'work', 'portfolio', 'developed', 'created'],
      answer: "I've built four notable projects:\n\n1. **College ERP — Academic Management System**: A full-stack, role-based academic management platform built with React (TypeScript), Node.js, Express.js, MySQL, and Socket.IO. Features real-time data sync and JWT authentication.\n\n2. **NullChat — Real-Time Chat Application**: A real-time chat app with React (TypeScript/Vite) frontend and Node.js/Express backend, using WebSockets for live bidirectional messaging. Monorepo architecture.\n\n3. **Finance Tracker — Personal Finance Management App**: A full-stack personal finance tracker with real-time animated dashboard, Socket.IO synchronization, and JWT auth.\n\n4. **Personal Portfolio Website**: A responsive portfolio built with HTML5, CSS3, and JavaScript, achieving a 95+ Google Lighthouse performance score."
    },
    {
      id: 'proj-2', category: 'projects',
      question: 'What is your major project?',
      aliases: ['main project', 'biggest project', 'flagship project', 'most important project', 'college erp', 'erp project', 'tell me about college erp'],
      keywords: ['major project', 'main project', 'biggest', 'flagship', 'erp', 'college erp', 'academic'],
      answer: "My flagship project is the **College ERP — Academic Management System**. It's a full-stack, role-based platform I built from scratch for students, faculty, and administrators.\n\n**Tech Stack**: React (TypeScript), Node.js, Express.js, MySQL, Socket.IO, JWT, TailwindCSS.\n\n**Key Highlights**:\n• Built both the React (TypeScript) with Vite frontend and the Node.js/Express backend, backed by a MySQL database with connection pooling\n• Engineered real-time data synchronization across all connected clients using Socket.IO, automatically broadcasting database-change events on every mutating request to keep dashboards updated without page reloads"
    },
    {
      id: 'proj-3', category: 'projects',
      question: 'What technologies were used in College ERP?',
      aliases: ['erp tech stack', 'college erp technologies', 'technologies in your main project'],
      keywords: ['erp technologies', 'erp tech', 'erp stack'],
      answer: 'The College ERP was built with: React (TypeScript) with Vite for the frontend, Node.js and Express.js for the backend, MySQL with connection pooling for the database, Socket.IO for real-time data sync, JWT for authentication, and TailwindCSS for styling.'
    },
    {
      id: 'proj-4', category: 'projects',
      question: 'What features did College ERP include?',
      aliases: ['erp features', 'college erp functionality', 'what does the erp do', 'erp capabilities'],
      keywords: ['erp features', 'attendance', 'fee management', 'timetable', 'marks calculator'],
      answer: "The College ERP includes a comprehensive set of features:\n• Full-stack, role-based academic management for students, faculty & administrators\n• React (TypeScript) with Vite frontend and Node.js/Express backend\n• MySQL database with connection pooling\n• Real-time data synchronization via Socket.IO across all connected clients\n• Automatic broadcasting of database-change events on every mutating request\n• Dashboards that stay updated without page reloads"
    },
    {
      id: 'proj-5', category: 'projects',
      question: 'Did you implement authentication in your projects?',
      aliases: ['authentication', 'login system', 'jwt', 'security', 'how did you handle auth', 'user authentication'],
      keywords: ['authentication', 'auth', 'jwt', 'login', 'security', 'token', 'bcrypt'],
      answer: "Yes! In my College ERP and Finance Tracker projects, I implemented JWT-based authentication for secure user sessions. The system ensures both security and a seamless user experience across all roles."
    },
    {
      id: 'proj-6', category: 'projects',
      question: 'Did you build any personal projects?',
      aliases: ['personal project', 'portfolio website', 'side projects', 'personal website'],
      keywords: ['personal project', 'portfolio website', 'side project', 'personal website'],
      answer: "Yes! I built a Personal Portfolio Website using HTML5, CSS3, and JavaScript. It showcases my projects, skills, and contact information with cross-browser compatibility. I implemented mobile-first responsive design, achieving a 95+ Google Lighthouse performance score."
    },
    {
      id: 'proj-7', category: 'projects',
      question: 'What performance score did your portfolio achieve?',
      aliases: ['lighthouse score', 'performance score', 'portfolio performance'],
      keywords: ['lighthouse', 'performance score', '95'],
      answer: "My portfolio website achieved a 95+ Google Lighthouse performance score. I achieved this through mobile-first responsive design, optimized assets, semantic HTML structure, and efficient CSS — ensuring fast load times and excellent user experience across all devices."
    },
    {
      id: 'proj-8', category: 'projects',
      question: 'How did you handle real-time features?',
      aliases: ['real-time', 'socket.io', 'websockets', 'real time sync', 'live updates'],
      keywords: ['real-time', 'realtime', 'socket', 'websocket', 'live', 'sync'],
      answer: "In my College ERP and Finance Tracker projects, I engineered real-time data synchronization using Socket.IO. The system automatically broadcasts database-change events on every mutating request, keeping all connected dashboards updated without page reloads. In NullChat, I used WebSockets for live bidirectional messaging."
    },
    {
      id: 'proj-9', category: 'projects',
      question: 'Tell me about NullChat',
      aliases: ['nullchat', 'null chat', 'chat application', 'chat app', 'chat project'],
      keywords: ['nullchat', 'null chat', 'chat app', 'chat application', 'messaging'],
      answer: "**NullChat** is a real-time chat application I built with a React (TypeScript/Vite) frontend and a Node.js/Express backend, using WebSockets for live bidirectional messaging. I structured the codebase as a monorepo with separate client, server, and shared modules for clean separation of concerns."
    },
    {
      id: 'proj-10', category: 'projects',
      question: 'Tell me about Finance Tracker',
      aliases: ['finance tracker', 'finance app', 'finance project', 'budget app', 'expense tracker'],
      keywords: ['finance', 'tracker', 'budget', 'expense', 'income', 'money'],
      answer: "**Finance Tracker** is a full-stack personal finance management app I built with React (TypeScript), Vite, Node.js, Express.js, MySQL, Socket.IO, JWT, and TailwindCSS. It enables users to manage income, expenses, and budgets through a real-time, animated dashboard. I implemented Socket.IO-based real-time synchronization so transactions and budgets update instantly across all open sessions."
    },

    // ---- CERTIFICATIONS ----
    {
      id: 'cert-1', category: 'certifications',
      question: 'What certifications do you have?',
      aliases: ['your certifications', 'certificates', 'certified in', 'any certifications', 'professional certifications', 'courses completed'],
      keywords: ['certification', 'certificate', 'certified', 'courses', 'aws', 'nxtwave', 'forage'],
      answer: "I hold three certifications:\n\n1. **AI Agents: Cognitive Upgrade and Business Efficiency** — AWS Training & Certification (2026)\n2. **Investment Banking Job Simulation** — Forage (2026)\n3. **AI for Students: Build Your Own Generative AI Model** — NxtWave (2025)\n\nThese cover AI/ML concepts and professional simulation experience."
    },
    {
      id: 'cert-2', category: 'certifications',
      question: 'Do you have any AWS certification?',
      aliases: ['aws certificate', 'aws training', 'amazon certification'],
      keywords: ['aws', 'amazon'],
      answer: "Yes! I completed 'AI Agents: Cognitive Upgrade and Business Efficiency' from AWS Training & Certification in 2026. It covered concepts around AI agents, cognitive architectures, and their business applications."
    },
    {
      id: 'cert-3', category: 'certifications',
      question: 'Do you have any AI/ML certifications?',
      aliases: ['ai certification', 'machine learning', 'generative ai', 'ai certificate'],
      keywords: ['ai', 'ml', 'machine learning', 'generative', 'artificial intelligence'],
      answer: "Yes, I have two AI-related certifications:\n• **AI Agents: Cognitive Upgrade and Business Efficiency** from AWS Training & Certification (2026)\n• **AI for Students: Build Your Own Generative AI Model** from NxtWave (2025)\n\nThese gave me foundational knowledge of AI agents, generative AI models, and their practical applications."
    },
    {
      id: 'cert-4', category: 'certifications',
      question: 'Do you have a Forage certification?',
      aliases: ['forage', 'investment banking', 'forage certification', 'job simulation'],
      keywords: ['forage', 'investment banking', 'job simulation'],
      answer: "Yes! I completed the 'Investment Banking Job Simulation' from Forage in 2026. It provided hands-on experience with real-world investment banking tasks and professional workflows."
    },

    // ---- EXPERIENCE & INTERNSHIPS ----
    {
      id: 'exp-1', category: 'experience',
      question: 'Do you have any work experience?',
      aliases: ['work experience', 'professional experience', 'internship', 'job experience', 'have you worked anywhere', 'industry experience', 'internship experience'],
      keywords: ['experience', 'work', 'internship', 'job', 'industry', 'professional', 'worked'],
      answer: "I'm a CSE graduate (class of 2026) from HVPM College, Amravati. While I don't have formal industry internship experience yet, I've gained significant hands-on experience through building production-quality projects like my College ERP system, NullChat, and Finance Tracker — all full-stack applications built with React, Node.js, MySQL, and Socket.IO. I've also been actively involved in my college technical club, participating in hackathons and mentoring junior students."
    },
    {
      id: 'exp-2', category: 'experience',
      question: 'What extracurricular activities have you done?',
      aliases: ['extracurricular', 'activities', 'clubs', 'hackathons', 'college activities', 'co-curricular'],
      keywords: ['extracurricular', 'activities', 'club', 'hackathon', 'volunteer', 'code-a-thon'],
      answer: "I've been actively involved in campus tech activities:\n• **College Technical Club Member** — participated in hackathons, tech talks, and brainstorming sessions on emerging technologies\n• **Code-a-thon Volunteer** — assisted junior students with web development and version control concepts\n\nThese experiences helped me sharpen my communication, teamwork, and mentoring abilities."
    },

    // ---- STRENGTHS & WEAKNESSES ----
    {
      id: 'str-1', category: 'strengths',
      question: 'What are your strengths?',
      aliases: ['your strengths', 'strong points', 'what are you good at', 'best qualities', 'key strengths', 'positive traits'],
      keywords: ['strengths', 'strong', 'good at', 'qualities', 'best', 'positive'],
      answer: "My key strengths include:\n• **Full Stack Proficiency** — I can architect complete applications from frontend to backend\n• **Problem Solving** — I enjoy breaking complex problems into manageable components\n• **Quick Learner** — I pick up new technologies rapidly and apply them effectively\n• **Clean Code Advocate** — I'm committed to writing efficient, maintainable, well-documented code\n• **Team Collaboration** — I thrive in code-review-driven engineering teams\n• **Strong CS Fundamentals** — solid foundations in DSA, OOP, and database design help me make better architectural decisions"
    },
    {
      id: 'str-2', category: 'strengths',
      question: 'What are your weaknesses?',
      aliases: ['your weaknesses', 'weak points', 'areas of improvement', 'what do you struggle with', 'shortcomings'],
      keywords: ['weaknesses', 'weak', 'improvement', 'struggle', 'shortcoming'],
      answer: "I'd say my main area for improvement is that I sometimes dive too deep into perfecting code quality and architecture, which can slow down initial delivery. I'm actively working on finding the right balance between craftsmanship and pragmatic shipping. I'm also still building up my DevOps knowledge — I have Docker fundamentals down but want to deepen my experience with CI/CD pipelines and cloud deployment."
    },

    // ---- CAREER GOALS ----
    {
      id: 'career-1', category: 'career',
      question: 'What are your career goals?',
      aliases: ['career plan', 'future plans', 'where do you see yourself', 'career aspirations', '5 year plan', 'long term goals', 'what do you want to achieve', 'professional goals'],
      keywords: ['career', 'goal', 'future', 'plan', 'aspiration', 'see yourself', 'achieve', 'ambition'],
      answer: "My short-term goal is to secure a full stack developer role where I can contribute to building scalable, real-world products while learning from experienced engineers. In the medium term, I want to deepen my expertise in system design, cloud architecture (AWS/GCP), and DevOps practices. Long-term, I aspire to become a senior/lead engineer who can architect end-to-end solutions, mentor junior developers, and contribute to open-source projects that make a real impact."
    },
    {
      id: 'career-2', category: 'career',
      question: 'Why did you choose computer science?',
      aliases: ['why cs', 'why engineering', 'why software development', 'why did you become a developer', 'motivation'],
      keywords: ['why cs', 'why computer', 'chose', 'choose', 'motivation', 'passion'],
      answer: "I've always been fascinated by how software can solve real-world problems at scale. Building my College ERP — which streamlined academic workflows for students, faculty, and admins — showed me the direct impact clean, well-engineered software can have. I love the creative problem-solving aspect of development and the endless opportunity to keep learning new technologies and patterns."
    },
    {
      id: 'career-3', category: 'career',
      question: 'Are you open to opportunities?',
      aliases: ['are you looking for a job', 'available for hire', 'seeking opportunities', 'open to work', 'job search', 'available'],
      keywords: ['opportunity', 'hire', 'available', 'job', 'open to work', 'seeking'],
      answer: "Absolutely! I'm actively seeking full stack developer opportunities where I can apply my skills in React, Node.js, Express.js, and MySQL to build impactful products. I'm open to full-time roles, and I'm ready to hit the ground running. Feel free to reach out at dikshant.r.athawale@gmail.com!"
    },

    // ---- HOBBIES & PERSONAL INTERESTS ----
    {
      id: 'hobby-1', category: 'hobbies',
      question: 'What are your hobbies?',
      aliases: ['your hobbies', 'what do you do for fun', 'interests', 'personal interests', 'free time', 'leisure activities', 'what do you enjoy', 'passions'],
      keywords: ['hobbies', 'hobby', 'fun', 'interests', 'free time', 'leisure', 'enjoy', 'passion'],
      answer: "Outside of coding, I'm passionate about exploring emerging technologies like AI and cloud computing. I enjoy participating in hackathons and tech talks through my college technical club. I also like mentoring junior students in web development — teaching others helps me solidify my own understanding. I'm always tinkering with side projects to experiment with new tools and frameworks."
    },
    {
      id: 'hobby-2', category: 'hobbies',
      question: 'What are you passionate about in tech?',
      aliases: ['tech interests', 'technology interests', 'what excites you in tech'],
      keywords: ['passionate', 'tech interests', 'excited', 'fascinated'],
      answer: "I'm particularly passionate about building scalable APIs, clean architecture patterns, and real-time systems. I love the challenge of designing systems that are both performant and maintainable. I'm also excited about AI and its potential to transform developer workflows — I've earned certifications in AI from both AWS and NxtWave."
    },

    // ---- PROFESSIONAL SUMMARY ----
    {
      id: 'sum-1', category: 'summary',
      question: 'Give me your professional summary',
      aliases: ['professional summary', 'resume summary', 'profile summary', 'career summary', 'brief summary', 'overview', 'elevator pitch'],
      keywords: ['summary', 'overview', 'profile', 'brief', 'elevator pitch'],
      answer: "Full stack developer with hands-on experience building end-to-end web applications — from responsive React interfaces to RESTful APIs and relational databases — using React, Node.js, Express.js, and MySQL. Backed by strong fundamentals in data structures, OOP, and database design, with working familiarity with Docker for containerized environments. A quick learner who thrives in collaborative, code-review-driven engineering teams and is committed to writing clean, efficient, and maintainable code across the entire stack."
    },
    {
      id: 'sum-2', category: 'summary',
      question: 'Why should we hire you?',
      aliases: ['why hire you', 'what makes you different', 'why are you the right fit', 'what value do you bring', 'why you', 'what sets you apart'],
      keywords: ['hire', 'why you', 'different', 'right fit', 'value', 'sets apart', 'stand out'],
      answer: "Three reasons:\n\n1. **Full Stack Capability** — I can independently build and ship complete features, from UI to API to database. My College ERP project proves I can architect production-quality systems with real-time sync, secure auth, and polished interfaces.\n\n2. **Strong Foundations** — My deep understanding of DSA, OOP, and database design means I write code that's not just functional, but efficient and scalable.\n\n3. **Growth Mindset** — I'm a quick learner committed to clean code and continuous improvement. I actively pursue certifications (AWS, AI), mentor peers, and stay current with industry best practices.\n\nI'm ready to contribute from day one and grow with the team."
    }
  ];

  // Category-specific chips/tags to display with responses
  const categoryChips = {
    skills: [
      { icon: 'bolt', label: 'Performance First' },
      { icon: 'grid_view', label: 'Atomic Design' }
    ],
    projects: [
      { icon: 'architecture', label: 'Full Stack' },
      { icon: 'sync', label: 'Real-Time' }
    ],
    education: [
      { icon: 'school', label: 'CSE 2026' },
      { icon: 'menu_book', label: 'SGBAU' }
    ],
    certifications: [
      { icon: 'verified', label: 'Certified' },
      { icon: 'trending_up', label: 'Continuous Learning' }
    ],
    career: [
      { icon: 'rocket_launch', label: 'Growth Mindset' },
      { icon: 'target', label: 'Goal Oriented' }
    ],
    personal: [
      { icon: 'person', label: 'Full Stack Dev' },
      { icon: 'location_on', label: 'Amravati, IN' }
    ],
    experience: [
      { icon: 'code', label: 'Hands-On' },
      { icon: 'groups', label: 'Team Player' }
    ],
    strengths: [
      { icon: 'psychology', label: 'Problem Solver' },
      { icon: 'speed', label: 'Quick Learner' }
    ],
    hobbies: [
      { icon: 'explore', label: 'Tech Explorer' },
      { icon: 'lightbulb', label: 'Innovator' }
    ],
    summary: [
      { icon: 'star', label: 'Top Candidate' },
      { icon: 'handshake', label: 'Team First' }
    ]
  };

  /* ================================================================
     MATCHING ENGINE
     ================================================================ */

  function normalizeText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').trim();
  }

  function tokenize(text) {
    return normalizeText(text).split(/\s+/).filter(Boolean);
  }

  function findBestMatch(userInput) {
    const normalized = normalizeText(userInput);
    const tokens = tokenize(userInput);

    if (!normalized || tokens.length === 0) return null;

    let bestMatch = null;
    let bestScore = 0;

    for (const qa of chatbotKnowledge) {
      let score = 0;

      // Check exact alias match
      for (const alias of qa.aliases) {
        if (normalized === normalizeText(alias)) {
          return qa; // Perfect match
        }
        // Partial alias containment
        if (normalized.includes(normalizeText(alias))) {
          score += 10;
        }
      }

      // Check question match
      if (normalized === normalizeText(qa.question)) {
        return qa; // Perfect match
      }
      if (normalized.includes(normalizeText(qa.question))) {
        score += 8;
      }

      // Keyword matching
      for (const keyword of qa.keywords) {
        const kwNorm = normalizeText(keyword);
        if (normalized.includes(kwNorm)) {
          score += 3;
        }
        // Token-level match
        for (const token of tokens) {
          if (token === kwNorm) {
            score += 2;
          } else if (token.includes(kwNorm) || kwNorm.includes(token)) {
            score += 1;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = qa;
      }
    }

    // Require a minimum score threshold
    return bestScore >= 3 ? bestMatch : null;
  }

  /* ================================================================
     MARKDOWN RENDERER (lightweight)
     ================================================================ */

  function renderMarkdown(text) {
    // Escape HTML
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Line breaks
    html = html.replace(/\n/g, '<br>');

    // Bullet points: • text
    html = html.replace(/(<br>)?•\s/g, '<br>• ');

    return html;
  }

  /* ================================================================
     TIME FORMATTING
     ================================================================ */

  function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ':' + minutes + ' ' + ampm;
  }

  /* ================================================================
     CHATBOT UI
     ================================================================ */

  // State
  let isOpen = false;
  let isTyping = false;
  let messageHistory = [];
  let currentTypewriterTimeout = null;

  // Quick suggestions for new users
  const quickSuggestions = [
    'Tell me about yourself',
    'What are your skills?',
    'Show me your projects',
    'Are you open to work?'
  ];

  // DOM references (set after build)
  let panelEl = null;
  let messagesEl = null;
  let inputEl = null;
  let sendBtnEl = null;
  let typingIndicatorEl = null;
  let suggestionsEl = null;

  /**
   * Build the chatbot panel DOM
   */
  function buildChatbotPanel() {
    // Main panel
    panelEl = document.createElement('div');
    panelEl.id = 'chatbot-panel';
    panelEl.className = 'chatbot-panel';
    panelEl.setAttribute('role', 'dialog');
    panelEl.setAttribute('aria-label', 'DevBot AI Assistant');
    panelEl.setAttribute('aria-hidden', 'true');

    panelEl.innerHTML = `
      <!-- Header -->
      <header class="chatbot-header">
        <div class="chatbot-header-left">
          <div class="chatbot-avatar">
            <span class="material-symbols-outlined" style="font-size: 22px; font-variation-settings: 'FILL' 1;">smart_toy</span>
          </div>
          <span class="chatbot-header-title font-headline">DevPortfolio</span>
        </div>
        <button class="chatbot-close-btn" aria-label="Close chatbot">
          <span class="material-symbols-outlined">close</span>
        </button>
      </header>

      <!-- Bot Identity -->
      <div class="chatbot-identity">
        <h2 class="chatbot-bot-name font-display">DevBot <span class="chatbot-online-dot"></span></h2>
        <p class="chatbot-bot-subtitle text-body-md text-muted">Ask me about my projects, tech stack, or availability.</p>
      </div>

      <!-- Messages Area -->
      <div class="chatbot-messages" id="chatbot-messages" role="log" aria-live="polite" aria-label="Chat messages">
      </div>

      <!-- Typing Indicator -->
      <div class="chatbot-typing" id="chatbot-typing" aria-hidden="true">
        <div class="chatbot-typing-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="chatbot-typing-label text-label-sm text-muted">DevBot is typing...</span>
      </div>

      <!-- Quick Suggestions -->
      <div class="chatbot-suggestions" id="chatbot-suggestions">
      </div>

      <!-- Input Area -->
      <div class="chatbot-input-area">
        <input
          type="text"
          class="chatbot-input"
          id="chatbot-input"
          placeholder="Type a message..."
          autocomplete="off"
          aria-label="Type a message to DevBot"
        />
        <button class="chatbot-send-btn" id="chatbot-send-btn" aria-label="Send message">
          <span class="material-symbols-outlined" style="font-size: 22px; font-variation-settings: 'FILL' 1;">send</span>
        </button>
      </div>
    `;

    document.body.appendChild(panelEl);

    // Cache DOM refs
    messagesEl = document.getElementById('chatbot-messages');
    inputEl = document.getElementById('chatbot-input');
    sendBtnEl = document.getElementById('chatbot-send-btn');
    typingIndicatorEl = document.getElementById('chatbot-typing');
    suggestionsEl = document.getElementById('chatbot-suggestions');

    // Event listeners
    sendBtnEl.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    panelEl.querySelector('.chatbot-close-btn').addEventListener('click', closePanel);

    // Build suggestions
    buildSuggestions();

    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        closePanel();
      }
    });
  }

  /**
   * Build quick suggestion chips
   */
  function buildSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.innerHTML = '';
    quickSuggestions.forEach(function (text) {
      var chip = document.createElement('button');
      chip.className = 'chatbot-suggestion-chip';
      chip.textContent = text;
      chip.setAttribute('type', 'button');
      chip.addEventListener('click', function () {
        inputEl.value = text;
        handleSend();
      });
      suggestionsEl.appendChild(chip);
    });
  }

  /**
   * Open/close panel
   */
  function openPanel() {
    if (!panelEl) buildChatbotPanel();
    isOpen = true;
    panelEl.classList.add('chatbot-panel--open');
    panelEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Set dock item active
    var dockItem = document.querySelector('.dock-item[data-section="chatbot"]');
    if (dockItem) dockItem.classList.add('active');

    // Focus input after animation
    setTimeout(function () {
      if (inputEl) inputEl.focus();
    }, 400);

    // Add welcome message if first open
    if (messageHistory.length === 0) {
      addBotMessage(
        "Hello there! I'm DevBot, an AI assistant built to help you navigate this portfolio. How can I help you today?",
        'personal'
      );
    }
  }

  function closePanel() {
    if (!panelEl) return;
    isOpen = false;
    panelEl.classList.remove('chatbot-panel--open');
    panelEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Remove dock item active
    var dockItem = document.querySelector('.dock-item[data-section="chatbot"]');
    if (dockItem) dockItem.classList.remove('active');
  }

  function togglePanel() {
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  }

  /**
   * Handle sending a message
   */
  function handleSend() {
    if (isTyping) return;
    var text = inputEl.value.trim();
    if (!text) return;

    inputEl.value = '';

    // Hide suggestions after first message
    if (suggestionsEl) {
      suggestionsEl.style.display = 'none';
    }

    // Add user message
    addUserMessage(text);

    // Find response
    var match = findBestMatch(text);

    // Show typing indicator
    showTypingIndicator();

    // Simulate thinking delay (400-800ms)
    var delay = 400 + Math.random() * 400;
    setTimeout(function () {
      hideTypingIndicator();

      if (match) {
        addBotMessageWithTypewriter(match.answer, match.category);
      } else {
        addBotMessageWithTypewriter(
          "I'm not sure I understand that question. Try asking about Dikshant's **skills**, **projects**, **education**, **experience**, or **career goals**. You can also ask things like \"Tell me about yourself\" or \"What technologies do you know?\"",
          'summary'
        );
      }
    }, delay);
  }

  /**
   * Add a user message bubble
   */
  function addUserMessage(text) {
    var time = new Date();
    var msg = {
      role: 'user',
      text: text,
      time: time
    };
    messageHistory.push(msg);

    var wrapper = document.createElement('div');
    wrapper.className = 'chatbot-msg chatbot-msg--user chatbot-msg--animate';

    var bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble chatbot-bubble--user';
    bubble.textContent = text;

    var timestamp = document.createElement('div');
    timestamp.className = 'chatbot-timestamp chatbot-timestamp--right font-label text-label-sm';
    timestamp.textContent = 'YOU • ' + formatTime(time);

    wrapper.appendChild(bubble);
    wrapper.appendChild(timestamp);
    messagesEl.appendChild(wrapper);

    scrollToBottom();
  }

  /**
   * Add a bot message bubble (instant, no typewriter)
   */
  function addBotMessage(text, category) {
    var time = new Date();
    var msg = {
      role: 'bot',
      text: text,
      time: time,
      category: category
    };
    messageHistory.push(msg);

    var wrapper = document.createElement('div');
    wrapper.className = 'chatbot-msg chatbot-msg--bot chatbot-msg--animate';

    var bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble chatbot-bubble--bot';
    bubble.innerHTML = renderMarkdown(text);

    // Add chips
    var chips = categoryChips[category];
    if (chips && chips.length > 0) {
      var chipsContainer = document.createElement('div');
      chipsContainer.className = 'chatbot-chips';
      chips.forEach(function (chip) {
        var chipEl = document.createElement('span');
        chipEl.className = 'chatbot-chip';
        chipEl.innerHTML = '<span class="material-symbols-outlined" style="font-size:14px;">' + chip.icon + '</span> ' + chip.label;
        chipsContainer.appendChild(chipEl);
      });
      bubble.appendChild(chipsContainer);
    }

    var timestamp = document.createElement('div');
    timestamp.className = 'chatbot-timestamp font-label text-label-sm';
    timestamp.textContent = 'DEVBOT • ' + formatTime(time);

    wrapper.appendChild(bubble);
    wrapper.appendChild(timestamp);
    messagesEl.appendChild(wrapper);

    scrollToBottom();
  }

  /**
   * Add a bot message with typewriter effect
   */
  function addBotMessageWithTypewriter(text, category) {
    isTyping = true;
    var time = new Date();
    var msg = {
      role: 'bot',
      text: text,
      time: time,
      category: category
    };
    messageHistory.push(msg);

    var wrapper = document.createElement('div');
    wrapper.className = 'chatbot-msg chatbot-msg--bot chatbot-msg--animate';

    var bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble chatbot-bubble--bot';

    var contentEl = document.createElement('span');
    contentEl.className = 'chatbot-typewriter-content';
    bubble.appendChild(contentEl);

    var timestamp = document.createElement('div');
    timestamp.className = 'chatbot-timestamp font-label text-label-sm';
    timestamp.textContent = 'DEVBOT • ' + formatTime(time);

    wrapper.appendChild(bubble);
    wrapper.appendChild(timestamp);
    messagesEl.appendChild(wrapper);

    // Typewriter animation
    var renderedHTML = renderMarkdown(text);
    var charIndex = 0;
    // For typewriter, we work with the rendered HTML but reveal chars smartly
    // We'll use a simpler approach: reveal raw text character by character, then set final HTML
    var rawChars = text.split('');
    var currentText = '';

    function typeNextChar() {
      if (charIndex < rawChars.length) {
        currentText += rawChars[charIndex];
        contentEl.innerHTML = renderMarkdown(currentText);
        charIndex++;
        scrollToBottom();

        // Variable speed: faster for spaces/punctuation, slower for new content
        var speed = rawChars[charIndex - 1] === ' ' ? 8 : (rawChars[charIndex - 1] === '\n' ? 30 : 12);
        currentTypewriterTimeout = setTimeout(typeNextChar, speed);
      } else {
        // Done typing — add chips
        var chips = categoryChips[category];
        if (chips && chips.length > 0) {
          var chipsContainer = document.createElement('div');
          chipsContainer.className = 'chatbot-chips chatbot-chips--animate';
          chips.forEach(function (chip) {
            var chipEl = document.createElement('span');
            chipEl.className = 'chatbot-chip';
            chipEl.innerHTML = '<span class="material-symbols-outlined" style="font-size:14px;">' + chip.icon + '</span> ' + chip.label;
            chipsContainer.appendChild(chipEl);
          });
          bubble.appendChild(chipsContainer);
        }
        isTyping = false;
        scrollToBottom();
      }
    }

    typeNextChar();
  }

  /**
   * Typing indicator
   */
  function showTypingIndicator() {
    if (typingIndicatorEl) {
      typingIndicatorEl.classList.add('chatbot-typing--visible');
      typingIndicatorEl.setAttribute('aria-hidden', 'false');
      scrollToBottom();
    }
  }

  function hideTypingIndicator() {
    if (typingIndicatorEl) {
      typingIndicatorEl.classList.remove('chatbot-typing--visible');
      typingIndicatorEl.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Auto-scroll
   */
  function scrollToBottom() {
    if (messagesEl) {
      requestAnimationFrame(function () {
        messagesEl.scrollTop = messagesEl.scrollHeight;
      });
    }
  }

  /* ================================================================
     PUBLIC API — exposed for dock integration
     ================================================================ */

  window.DevBotChatbot = {
    toggle: togglePanel,
    open: openPanel,
    close: closePanel,
    isOpen: function () { return isOpen; }
  };

  // Pre-build the panel (lazy — built on first open)
  // Panel is built on first call to openPanel()

})();
