import { createSignal } from 'solid-js';
import {
  alignCenterStyle,
  div1Style,
  h1Style,
  m1Style,
  noDecorationStyle,
  textAreaDivStyle,
  textAreaStyle,
} from './styles';
import endecoder from './utils/endecoder';

const initText = `真理像光一样，它很难谦逊；而且要它对谁谦逊呢？对它本身吗？Verum index sui et falsi［真理是检验它自身和谬误的试金石］。那么是对谬误吗？
如果谦逊是探讨的特征，那么，这与其说是害怕谬误的标志，不如说是害怕真理的标志。谦逊是使我寸步难行的绊脚石。它就是规定在探讨时要对得出结论感到恐惧，它是一种对付真理的预防剂。
——卡尔·马克思《评普鲁士最近的书报检查令》(Karl Marx, Prussian Censorship)`;

const App = () => {
  const [encText, setEncText] = createSignal(initText);
  const [decText, setDecText] = createSignal(endecoder.encode(initText));
  return (
    <div>
      <h1 class={h1Style}>Base65536 en/decoder</h1>
      <div class={div1Style}>
        <div class={textAreaDivStyle}>
          <textarea
            class={textAreaStyle}
            value={encText()}
            onInput={(e) => {
              setEncText(e.currentTarget.value);
              setDecText(endecoder.encode(e.currentTarget.value));
            }}
          />
        </div>
        <div class={m1Style}>👈full auto👉</div>
        <div class={textAreaDivStyle}>
          <textarea
            class={textAreaStyle}
            value={decText()}
            onInput={(e) => {
              setDecText(e.currentTarget.value);
              setEncText(endecoder.decode(e.currentTarget.value));
            }}
          />
        </div>
      </div>
      <a class={noDecorationStyle} href="https://github.com/lixiang810/base65536-online">
        <p class={alignCenterStyle}>Star me on GitHub</p>
      </a>
    </div>
  );
};

export default App;
