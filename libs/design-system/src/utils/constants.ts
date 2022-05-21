export const SPACING = [
  'none',
  '3xsm',
  '2xsm',
  'xsm',
  'sm',
  'md',
  'lg',
  'xlg',
  '2xlg',
  '3xlg',
  '4xlg',
  '5xlg',
  '6xlg',
  '7xlg',
  '8xlg',
  '9xlg',
] as const;

export const CUSTOM_SPACING = {
  auto: 'auto',
  full: '100%',
  normal: 'normal',
  '1fr': '1fr',
  content: 'fit-content',
  initial: 'initial',
  'h-screen': '100vh',
  'w-screen': '100vw',
} as const;

export const ENHANCED_SPACING = [
  ...SPACING,
  'initial',
  'content',
  'auto',
  'full',
  'screen',
] as const;

export const COLOR = [
  'primary-50',
  'primary-100',
  'primary-200',
  'primary-300',
  'primary-400',
  'secondary-100',
  'secondary-200',
  'secondary-300',
  'support-100',
  'support-200',
  'support-300',
  'support-400',
  'support-500',
  'success-100',
  'success-200',
  'success-300',
  'alert-100',
  'alert-200',
  'alert-300',
  'critical-100',
  'critical-200',
  'critical-300',
  'inherit',
  'transparent',
] as const;

export type Color = typeof COLOR[number];

export type Spacing = typeof SPACING[number];

export type CustomSpacing = keyof typeof CUSTOM_SPACING;

export type EnhancedSpacing = typeof ENHANCED_SPACING[number];
