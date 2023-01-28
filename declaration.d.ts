/// <reference types="vite/client" />
import 'style9';

declare module 'style9' {
  interface CustomProperties {
    WebkitFontSmoothing?: string;
    MozOsxFontSmoothing?: string;
  }
}
