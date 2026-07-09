---
name: Singularity OS
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ecb2ff'
  on-secondary: '#520071'
  secondary-container: '#cf5cff'
  on-secondary-container: '#480063'
  tertiary: '#fff5f1'
  on-tertiary: '#4e2600'
  tertiary-container: '#ffd2b2'
  on-tertiary-container: '#934d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ecb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb77f'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6f3900'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  body-base:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.2em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  panel-gap: 12px
---

## Brand & Style
The design system embodies a high-fidelity, cinematic AI environment. It is designed to evoke the feeling of commanding a multi-layered, holographic operating system—an interface that feels both immense in its data capacity and surgical in its precision. The target audience includes power users, engineers, and digital pioneers who require an immersive, "heads-up display" (HUD) experience.

The visual style is a hybrid of **Glassmorphism** and **High-Tech Futurism**. It utilizes deep obsidian voids, volumetric light, and sharp, data-driven aesthetics. Every element should feel projected rather than printed, using light as the primary material. Noise textures, scanlines, and "energy flow" gradients create a living, breathing digital organism.

## Colors
The palette is built on a foundation of **Deep Obsidian (#020617)**, serving as the "void" background. 

- **Primary Cyan (#00F2FF):** Represents the "Neural Core." Used for primary actions, active states, and successful data pings.
- **Secondary Neon Violet (#BD00FF):** Represents "AI/ML Logic." Used for predictive insights, automated processes, and synthetic intelligence layers.
- **Ember Orange (#FF8A00):** Reserved for "Critical Vectoring"—warnings, system overrides, and high-priority data anomalies.
- **Surface Treatment:** Surfaces use semi-transparent glass with a 15% noise overlay to simulate physical lens artifacts.

## Typography
The typography strategy contrasts wide, aggressive geometric sans-serifs for headings with ultra-precise monospaced fonts for technical data.

- **Headlines:** Use **Sora** (as a proxy for wide, sharp grotesques). It should feel architectural and authoritative.
- **Body:** **Hanken Grotesk** provides a clean, contemporary feel that remains legible even against vibrant background blurs.
- **Data & UI Labels:** **JetBrains Mono** is the workhorse for all metadata, coordinates, and system readouts. 
- **Styling Note:** Use all-caps for labels and data headers to reinforce the "instrument panel" aesthetic.

## Layout & Spacing
The layout follows a **Command Center** philosophy: an asymmetric, multi-panel grid that feels like a modular HUD. 

- **Grid:** Use a 12-column fluid grid for the main stage, but flank it with fixed-width "sidebar telemetry" panels (approx 280px).
- **Rhythm:** Use a 4px base unit. Gaps between glass panels should be tight (12px) to maximize screen real estate for data.
- **Responsiveness:** On mobile, panels stack vertically with "accordion" logic. On desktop, utilize the full width to show concurrent data streams. Margins are generous on the edges (48px) to create a "floating" effect for the entire interface.

## Elevation & Depth
Depth is not created with traditional shadows, but through **light and opacity layering**.

- **Level 0 (The Void):** Deep Obsidian background with subtle animated star-field or noise.
- **Level 1 (The Deck):** Large glass containers with a `40px` backdrop blur and a `1px` stroke (20% white).
- **Level 2 (Active Panels):** Foreground glass with `60px` blur and a `1px` primary cyan stroke.
- **Volumetric Glow:** Use "Outer Glow" effects on active elements (Cyan/Violet) with a blur radius of 15px-30px and low opacity (20%) to simulate light refracting in a hazy environment.

## Shapes
The design system utilizes **Sharp (0)** roundedness to maintain a clinical, military-grade precision. 

- **Corners:** All corners are strictly 0px (Sharp). 
- **Modifications:** Use "clipped corners" (45-degree chamfers) for buttons and card headers to emphasize the futuristic HUD aesthetic. This is a decorative CSS clip-path rather than a border-radius.
- **Lines:** Use ultra-thin (0.5px to 1px) borders for all containers to ensure the interface feels light and digital.

## Components
Consistent component styling ensures the interface feels like a unified piece of software.

- **Buttons:** Background-less with 1px Cyan borders. On hover, apply a subtle inner glow and a "scanning" horizontal light bar animation that moves from top to bottom.
- **Cards:** Floating glass panels. Each card should feature "Metadata Corners"—small, monospaced coordinate readouts (e.g., `[40.7128° N]`) in the top-right and bottom-left.
- **Input Fields:** Single bottom-line borders that "charge up" (glow) when focused. Text entry should feel like a terminal command.
- **Chips/Status Tags:** Use the monospaced font in a small box with a high-contrast background (Primary Cyan for 'Active', Ember for 'Alert').
- **Progress Bars:** Segmented blocks instead of a continuous line, resembling old-school power cells or signal strength meters.
- **Lists:** Data-heavy rows separated by 0.5px dotted lines, with hover states that highlight the entire row in a faint violet tint.