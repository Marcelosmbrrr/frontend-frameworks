import '../styles/globals.css';
// Mui
import { SnackbarProvider } from 'notistack';
// Custom
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import { HomeLayout } from '../components/layout/HomeLayout';


function AppWrapper({ children, isHome = false }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {isHome ? <HomeLayout>{children}</HomeLayout> : children}
      </ThemeProvider>
    </AuthProvider>
  );
}

function MyApp({ Component, pageProps, router }) {

  const isHome = router.pathname.startsWith('/home');

  return (
    <AppWrapper isHome={isHome}>
      <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </AppWrapper>
  );
}

export default MyApp
