import type React from 'react';

declare global {
  interface Variant {
    label: string;
    Component: () => JSX.Element;
    settings: Settings;
  }

  interface Settings {
    height: number;
    width: number;
    padding: number;
    objectPosition?: string;
  }

  interface CanvasProps extends React.PropsWithChildren {
    elementRef: React.RefObject<HTMLDivElement>;
    settings: Settings;
  }
}
