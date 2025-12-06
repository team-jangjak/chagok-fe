import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@styles/index.css';
import App from '@app/App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
