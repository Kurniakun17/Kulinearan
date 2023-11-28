import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Plus_Jakarta_Sans } from 'next/font/google';
const queryClient = new QueryClient();

const ubuntu = Plus_Jakarta_Sans({
  subsets: ['cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={ubuntu.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
