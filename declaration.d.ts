/// <reference types="vite/client" />
import 'style9';

declare module 'style9' {
  interface CustomProperties {
    '-webkit-font-smoothing'?: string;
    '-moz-osx-font-smoothing'?: string;
  }
}
