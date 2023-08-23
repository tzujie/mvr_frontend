import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/topnavbar';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/css/ionicons.min.css" />
      <TopNavbar />
      <div className="page-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
