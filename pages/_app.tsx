import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/topnavbar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRedirectToSuccess = () => {
    router.push('/success');
  };

  return (
    <>
      <TopNavbar />
      <Component {...pageProps} onRedirectToSuccess={handleRedirectToSuccess} />
    </>
  );
}
