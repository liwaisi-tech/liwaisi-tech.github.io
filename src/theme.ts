/**
 * LIWAISI TECH Brand Theme
 * Source: Manual de Marca V3.3 (Jun 2026), sections 3.4 and 7.1
 *
 * palette  — raw hex constants, the single source of truth for brand colors.
 * tokens   — semantic layer consumed by CSS custom properties.
 * applyTheme() — injects brand CSS custom properties into :root (idempotent).
 */

// Manual de Marca V3.3 — section 3.4
export const palette = {
  verdeAbismo:    '#0D1B1E', // primary surface / dark background
  verdeTierra:    '#103035', // secondary surface / dark variant
  verdeClorofila: '#2ECC71', // accent / action / CTA
  grisTecnico:    '#8E9794', // neutral / utility
  blancoNube:     '#F9F9F9', // light surface
} as const;

/** Inline darken helper — darkens a hex color by the given fraction (0.0–1.0). */
const darken = (hex: string, fraction: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const factor = 1 - fraction;
  const toHex = (n: number) => Math.round(n * factor).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Token names map to CSS custom property names injected by applyTheme().
// Tokens do NOT contain raw hex — they reference CSS vars so the CSS layer
// remains the runtime lookup. This avoids the "two sources of truth" trap.
export const tokens = {
  color: {
    background: {
      primary:   'var(--color-bg-primary)',     // verdeAbismo
      secondary: 'var(--color-bg-secondary)',   // verdeTierra
      light:     'var(--color-bg-light)',       // blancoNube
    },
    text: {
      primary:    'var(--color-text-primary)',   // verdeAbismo
      secondary:  'var(--color-text-secondary)', // grisTecnico
      inverse:    'var(--color-text-inverse)',   // blancoNube
      onDark:     'var(--color-text-inverse)',   // alias for clarity at call site
    },
    action: {
      primary:     'var(--color-action-primary)',  // verdeClorofila
      primaryHover:'var(--color-action-hover)',    // darken(verdeClorofila, 8%)
    },
    border: {
      subtle: 'var(--color-border-subtle)', // grisTecnico @ low opacity
    },
    footer: {
      bg:    'var(--color-footer-bg)',    // verdeAbismo
      text:  'var(--color-footer-text)',  // blancoNube
      muted: 'var(--color-footer-muted)', // grisTecnico
    },
  },
} as const;

/**
 * Injects all brand CSS custom properties into :root.
 * Safe to call once at module init; idempotent on repeated calls.
 * Call from main.tsx BEFORE the React tree mounts.
 *
 * Default mode is DARK per Manual de Marca V3.3 section 7.1 — Verde Abismo
 * is the main background. A future light-mode toggle will override these
 * by re-assigning the same variables on a data attribute or class.
 */
export const applyTheme = (): void => {
  const root = document.documentElement;
  root.style.setProperty('--color-bg-primary',      palette.verdeAbismo);   // dark by default
  root.style.setProperty('--color-bg-secondary',    palette.verdeTierra);   // secondary dark variant
  root.style.setProperty('--color-bg-light',        palette.blancoNube);    // for explicit light surfaces
  root.style.setProperty('--color-text-primary',    palette.verdeAbismo);
  root.style.setProperty('--color-text-secondary',  palette.grisTecnico);
  root.style.setProperty('--color-text-inverse',    palette.blancoNube);
  root.style.setProperty('--color-action-primary',  palette.verdeClorofila);
  root.style.setProperty('--color-action-hover',    darken(palette.verdeClorofila, 0.08));
  root.style.setProperty('--color-border-subtle',   palette.grisTecnico);
  root.style.setProperty('--color-footer-bg',       palette.verdeAbismo);
  root.style.setProperty('--color-footer-text',     palette.blancoNube);
  root.style.setProperty('--color-footer-muted',    palette.grisTecnico);
};