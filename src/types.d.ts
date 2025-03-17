declare module 'react' {
  export * from 'react';
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: any[]) => void;
  
  export type ReactNode = 
    | React.ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | React.ReactNodeArray;
  
  export type ReactNodeArray = Array<ReactNode>;
  
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
  
  export type Key = string | number;
  
  export type JSXElementConstructor<P> = 
    | ((props: P) => ReactElement<any, any> | null)
    | (new (props: P) => Component<any, any>);
  
  export class Component<P, S> {
    constructor(props: P);
    props: P;
    state: S;
    setState(state: S | ((prevState: S, props: P) => S), callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    render(): ReactNode;
  }
  
  export interface FC<P = {}> {
    (props: P): ReactElement<any, any> | null;
  }
}

declare module 'react-dom' {
  export * from 'react-dom';
  export function render(element: React.ReactNode, container: Element | null): void;
}

declare module 'lucide-react' {
  import { FC } from 'react';
  
  interface IconProps {
    size?: number | string;
    color?: string;
    stroke?: number | string;
    className?: string;
  }
  
  export const School: FC<IconProps>;
  export const Clock: FC<IconProps>;
  export const PhoneCall: FC<IconProps>;
  export const CheckCircle2: FC<IconProps>;
  export const Droplets: FC<IconProps>;
  export const Phone: FC<IconProps>;
  export const ClipboardCheck: FC<IconProps>;
  export const Calendar: FC<IconProps>;
  export const Sparkles: FC<IconProps>;
  export const Palette: FC<IconProps>;
  export const TreePine: FC<IconProps>;
  export const FlaskRound: FC<IconProps>;
  export const HeartHandshake: FC<IconProps>;
  export const Globe: FC<IconProps>;
  export const Award: FC<IconProps>;
  export const MessageCircle: FC<IconProps>;
}

declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  
  export function jsx(type: any, props: any): any;
  export function jsxs(type: any, props: any): any;
} 