import { Interpolation, Theme, Global } from '@emotion/react';
import { useState } from 'react';
import endecoder from './utils/endecoder';

const initText = `真理像光一样，它很难谦逊；而且要它对谁谦逊呢？对它本身吗？Verum index sui et falsi［真理是检验它自身和谬误的试金石］。那么是对谬误吗？
如果谦逊是探讨的特征，那么，这与其说是害怕谬误的标志，不如说是害怕真理的标志。谦逊是使我寸步难行的绊脚石。它就是规定在探讨时要对得出结论感到恐惧，它是一种对付真理的预防剂。
——卡尔·马克思《评普鲁士最近的书报检查令》(Karl Marx, Prussian Censorship)`;
const sm = '@media (max-width: 576px)';

function App() {
  const [encText, setEncText] = useState(initText);
  const [decText, setDecText] = useState(endecoder.encode(initText));
  const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Microsoft Yahei UI","Microsoft Yahei","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
  const textAreaCss: Interpolation<Theme> = {
    width: '100%',
    resize: 'none',
    height: '100%',
    borderStyle: 'hidden',
  };
  const textAreaDivCss: Interpolation<Theme> = {
    [sm]: { height: '40%' },
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
  };
  return (
    <div>
      <Global
        styles={{
          html: {
            fontFamily,
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
          },
        }}
      />
      <h1 css={{ textAlign: 'center' }}>Base65536 en/decoder</h1>
      <div
        css={{
          display: 'flex',
          flexGrow: 5,
          [sm]: { flexDirection: 'column', alignItems: 'center' },
          alignItems: 'stretch',
          justifyContent: 'center',
          height: window.innerHeight * 0.5,
        }}
      >
        <div css={textAreaDivCss}>
          <textarea
            css={textAreaCss}
            value={encText}
            onChange={(e) => {
              setEncText(e.target.value);
              setDecText(endecoder.encode(e.target.value));
            }}
          />
        </div>
        <div css={{ margin: '1em' }}>👈full auto👉</div>
        <div css={textAreaDivCss}>
          <textarea
            css={textAreaCss}
            value={decText}
            onChange={(e) => {
              setDecText(e.target.value);
              setEncText(endecoder.decode(e.target.value));
            }}
          />
        </div>
      </div>
      <a css={{ textDecoration: 'none' }} href="https://github.com/lixiang810/base65536-online">
        <p css={{ textAlign: 'center' }}>Star me on GitHub</p>
      </a>
    </div>
  );
}

export default App;
