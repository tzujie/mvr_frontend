import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import TopNavbar from './components/topnavbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <TopNavbar />
    <Component {...pageProps} />
    </>
  )
}
