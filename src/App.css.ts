import { globalStyle, style } from '@vanilla-extract/css';

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Microsoft Yahei UI","Microsoft Yahei","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

globalStyle('html', {
  fontFamily,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

export const h1Style = style({ textAlign: 'center' });

export const div1Style = style({
  display: 'flex',
  flexGrow: 5,
  '@media': { '(max-width: 576px)': { flexDirection: 'column', alignItems: 'center' } },
  alignItems: 'stretch',
  justifyContent: 'center',
  height: '50vh',
});

export const m1 = style({ margin: '1em' });

export const noDecoration = style({ textDecoration: 'none' });

export const alignCenter = style({ textAlign: 'center' });

export const textAreaCss = style({
  width: '100%',
  resize: 'none',
  height: '100%',
  borderStyle: 'hidden',
});

export const textAreaDivCss = style({
  '@media': { '(max-width: 576px)': { height: '40%' } },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5em',
  borderRadius: '50px',
  background: '#ffffff',
  boxShadow: '5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff',
  width: '40%',
  minWidth: 300,
  flexBasis: 'none',
});
