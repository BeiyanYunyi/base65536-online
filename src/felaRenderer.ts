import { createRenderer } from 'fela';
import { render } from 'fela-dom';
import plugins from 'fela-preset-web';

const renderer = createRenderer({ plugins });
render(renderer);
export default renderer;
