---
name: Aetheric Lumina
colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2b'
  surface-container: '#191f2f'
  surface-container-high: '#242a3a'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f8'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dde2f8'
  inverse-on-surface: '#2a3040'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#78a5ff'
  on-tertiary-container: '#00397f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0d1322'
  on-background: '#dde2f8'
  surface-variant: '#2f3445'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is visionary, high-end, and immersive. It targets a sophisticated audience within the technology and creative sectors who value precision and forward-thinking aesthetics. The UI should evoke a sense of "digital craftsmanship" through deep space-like environments and bioluminescent accents.

The design style is **Glassmorphism** infused with **Cyber-Elegance**. It leverages multi-layered translucency, high-fidelity backdrop blurs, and organic "Aurora" gradients that act as light sources behind surfaces. The visual language balances the coldness of deep space with the warmth of vibrant light emissions to create a premium, futuristic atmosphere.

## Colors
This design system utilizes a deep, layered dark palette to establish infinite depth. The primary background uses a near-black obsidian (#050816), while interactive surfaces use slightly lighter shades of navy and charcoal.

**Accents & Gradients:**
- **Cyan (Primary):** Used for focal points, primary actions, and "active" energy states.
- **Purple (Secondary):** Used for depth, transitions, and secondary interactive elements.
- **Electric Blue (Tertiary):** Used for data visualization and subtle atmospheric lighting.
- **Aurora Glow:** A mesh gradient blending all three accents at low opacity (15-30%) positioned behind glass cards to simulate light dispersion.

**Status Colors:**
- **Emerald:** Reserved for achievement unlocked or successful contact states.
- **Red:** Used sparingly for critical system alerts or form errors.

## Typography
The typography system relies on a high-contrast hierarchy to maintain legibility against complex glass backgrounds. 

- **Display & Headings:** Use *Plus Jakarta Sans* for its modern, geometric structure. Large headings should feature tight letter-spacing and occasionally utilize a "text-mask" gradient clipping to the primary/secondary accent colors.
- **Body Text:** *Inter* provides maximum readability at small sizes. Ensure body text maintains a high contrast (White or Light Gray) to avoid being "lost" in backdrop blurs.
- **Technical Labels:** *JetBrains Mono* is used for metadata, tags, and small utility labels to reinforce the "futuristic/developer" aesthetic of the portfolio.

## Layout & Spacing
The design system employs a **fluid 12-column grid** on desktop and a **4-column grid** on mobile.

- **Rhythm:** Spacing follows an 8px base unit. Use generous padding (48px+) within glass containers to ensure the content "breathes" against the blurred background.
- **Sectioning:** Vertical spacing between major sections should be significant (160px on desktop) to allow the aurora gradients to bleed through the whitespace.
- **Adaptive Rules:** On mobile, margins reduce to 20px, and large display fonts scale down to ensure they remain within the viewport without excessive wrapping.

## Elevation & Depth
Depth is the cornerstone of this design system, achieved through **Glassmorphism** and **Z-axis lighting**:

1.  **Level 0 (Base):** Deep obsidian background (#050816).
2.  **Level 1 (Sub-surface):** Aurora light blobs (Blurs of 100px-200px) moving slowly behind the UI.
3.  **Level 2 (Surface):** Glass cards with a 10% opacity white fill, a 20px backdrop blur, and a 1px "inner-glow" border (white at 15% opacity).
4.  **Level 3 (Interactive):** Elements that float above the surface, featuring subtle "outer-glows" in the primary accent color rather than traditional black shadows.

**Glow Effects:** Shadows are replaced by "diffused glows." An active card should have a soft, primary-colored shadow with 0px offset and a 30px blur radius at 20% opacity.

## Shapes
The shape language is sophisticated and modern. Standard elements use a 0.5rem (8px) radius, while larger containers like glass cards use 1rem (16px) to appear more inviting.

A special **"Pill"** shape is reserved for global navigation (the Dock) and status chips, creating a distinct visual contrast against the more structured rectangular layout of content cards.

## Components

### Glass Cards
Cards are the primary container. They must feature:
- `backdrop-filter: blur(20px)`
- `background: rgba(255, 255, 255, 0.05)`
- `border: 1px solid rgba(255, 255, 255, 0.1)`
- Subtle top-down linear gradient border to simulate light hitting the top edge.

### Glowing Buttons
- **Primary:** Solid Cyan fill with a matching 15px outer glow on hover. Text should be high-contrast dark navy for legibility.
- **Secondary:** Ghost style with a 1px Cyan border and a soft glow effect that intensifies when hovered.

### Floating Dock Navigation
A pill-shaped container fixed at the bottom center of the screen. It uses a heavy backdrop blur (40px) and dark background (#0B1120 at 70% opacity). Icons should utilize a "bouncy" hover animation that scales them by 1.2x.

### Animated Progress Indicators
Progress bars should be thin (4px) with a glowing "lead" point. The track is a dark grey, and the fill is a gradient from Purple to Cyan, moving with a subtle pulse animation.

### Inputs
Fields should be "bottom-border only" or fully transparent glass with a focus state that illuminates the entire border in the primary accent color.