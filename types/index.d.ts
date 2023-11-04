declare module '*.JPG';

interface Variant extends Settings {
  label: string;
  Component: React.ReactComponent;
}

interface Settings {
  height: number;
  width: number;
  padding: number;
  objectPosition?: string;
}

interface CanvasProps extends React.PropsWithChildren {
  settings: Settings;
  elementRef: React.RefObject<HTMLDivElement>;
}
