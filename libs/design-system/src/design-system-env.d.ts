declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare var __DEV__: boolean; // eslint-disable-line

type Breakpoint = 'base' | 'md' | 'lg';

type ResponsiveProp<T> = T | { [key in Breakpoint]?: T };

type ClockwiseProp<T> = T | [T, T] | [T, T, T] | [T, T, T, T];

type OmitAriaLabelProps<T> = Omit<T, 'aria-label' | 'aria-labelledby'>;

type AriaLabelProps<T> =
  | (OmitAriaLabelProps<T> & {
      'aria-label': string;
      'aria-labelledby'?: never;
    })
  | (OmitAriaLabelProps<T> & {
      'aria-label'?: never;
      'aria-labelledby': string;
    });

type LabelProps<T> =
  | (OmitAriaLabelProps<T> & {
      label: string;
      'aria-label'?: never;
      'aria-labelledby'?: never;
    })
  | (OmitAriaLabelProps<T> & {
      label?: never;
      'aria-label': string;
      'aria-labelledby'?: never;
    })
  | (OmitAriaLabelProps<T> & {
      label?: never;
      'aria-label'?: never;
      'aria-labelledby': string;
    });
