import { createRoot } from 'react-dom/client';

import { App } from 'src/components/App';

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
