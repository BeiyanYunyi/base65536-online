import { createSignal } from 'solid-js';
import style9 from 'style9';
import endecoder from './utils/endecoder';

const styles = style9.create({
  h1Style: { textAlign: 'center' },
  div1Style: {
    display: 'flex',
    flexGrow: 5,
    '@media (max-width: 576px)': { flexDirection: 'column', alignItems: 'center' },
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '50vh',
  },
  m1: { margin: '1rem' },
  noDecoration: { textDecoration: 'none' },
  alignCenter: { textAlign: 'center' },
  textAreaCss: {
    width: '100%',
    resize: 'none',
    height: '100%',
    borderStyle: 'hidden',
  },
  textAreaDivCss: {
    '@media (max-width: 576px)': { height: '40%' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5em',
    borderRadius: '50px',
    backgroundColor: '#ffffff',
    boxShadow: '5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff',
    width: '40%',
    minWidth: 300,
    flexBasis: 'none',
  },
  html: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Microsoft Yahei UI","Microsoft Yahei","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});

const initText = `真理像光一样，它很难谦逊；而且要它对谁谦逊呢？对它本身吗？Verum index sui et falsi［真理是检验它自身和谬误的试金石］。那么是对谬误吗？
如果谦逊是探讨的特征，那么，这与其说是害怕谬误的标志，不如说是害怕真理的标志。谦逊是使我寸步难行的绊脚石。它就是规定在探讨时要对得出结论感到恐惧，它是一种对付真理的预防剂。
——卡尔·马克思《评普鲁士最近的书报检查令》(Karl Marx, Prussian Censorship)`;

document.body.className = styles('html');

const App = () => {
  const [encText, setEncText] = createSignal(initText);
  const [decText, setDecText] = createSignal(endecoder.encode(initText));
  return (
    <div>
      <h1 class={styles('h1Style')}>Base65536 en/decoder</h1>
      <div class={styles('div1Style')}>
        <div class={styles('textAreaDivCss')}>
          <textarea
            class={styles('textAreaCss')}
            value={encText()}
            onInput={(e) => {
              setEncText(e.currentTarget.value);
              setDecText(endecoder.encode(e.currentTarget.value));
            }}
          />
        </div>
        <div class={styles('m1')}>👈full auto👉</div>
        <div class={styles('textAreaDivCss')}>
          <textarea
            class={styles('textAreaCss')}
            value={decText()}
            onInput={(e) => {
              setDecText(e.currentTarget.value);
              setEncText(endecoder.decode(e.currentTarget.value));
            }}
          />
        </div>
      </div>
      <a class={styles('noDecoration')} href="https://github.com/lixiang810/base65536-online">
        <p class={styles('alignCenter')}>Star me on GitHub</p>
      </a>
    </div>
  );
};

export default App;
