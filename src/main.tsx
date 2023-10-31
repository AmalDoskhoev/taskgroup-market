import ReactDOM from 'react-dom/client';

import { App } from '@/app';
import { withProviders } from '@/app/providers';

const RootApp = withProviders(() => <App />);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RootApp />
);
