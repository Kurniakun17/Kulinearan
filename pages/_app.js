import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { createContext, useContext, useState } from 'react';
const queryClient = new QueryClient();

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

const userContext = createContext({ user: null, setUser: () => {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: 'Kurnia', userId: 1 });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <div className={jakartaSans.className}>
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
}

export { useUserContext };
