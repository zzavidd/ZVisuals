declare module '*.JPG';

interface Variant extends Dimensions {
  label: string;
  Component: React.ReactComponent;
}

interface Dimensions {
  height: number;
  width: number;
}

interface CanvasProps extends React.PropsWithChildren {
  dimensions: Dimensions;
  elementRef: React.RefObject<HTMLDivElement>;
}
