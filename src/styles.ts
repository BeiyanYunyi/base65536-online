import renderer from './felaRenderer';

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Microsoft Yahei UI","Microsoft Yahei","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

renderer.renderStatic(
  {
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'html',
);

const h1 = () => ({ textAlign: 'center' });
export const h1Style = renderer.renderRule(h1, {});

const div1 = () => ({
  display: 'flex',
  flexGrow: 5,
  '@media (max-width: 576px)': { flexDirection: 'column', alignItems: 'center' },
  alignItems: 'stretch',
  justifyContent: 'center',
  height: '50vh',
});
export const div1Style = renderer.renderRule(div1, {});

const m1 = () => ({ margin: '1em' });
export const m1Style = renderer.renderRule(m1, {});

const noDecoration = () => ({ textDecoration: 'none' });
export const noDecorationStyle = renderer.renderRule(noDecoration, {});

const alignCenter = () => ({ textAlign: 'center' });
export const alignCenterStyle = renderer.renderRule(alignCenter, {});

const textAreaCss = () => ({
  width: '100%',
  resize: 'none',
  height: '100%',
  borderStyle: 'hidden',
});
export const textAreaStyle = renderer.renderRule(textAreaCss, {});

const textAreaDivCss = () => ({
  '@media (max-width: 576px)': { height: '40%' },
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
export const textAreaDivStyle = renderer.renderRule(textAreaDivCss, {});
