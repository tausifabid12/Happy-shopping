import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ThemeProvider } from '@material-tailwind/react';
import ProductInfoProvider from '../utilities/contexts/ProductInfoProvider';

import AuthProvider from '../utilities/contexts/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div data-theme="light" className="w-full h-full">
        <AuthProvider>
          <ProductInfoProvider>
            <Component {...pageProps} />
            <Toaster position="top-center" reverseOrder={false} />
          </ProductInfoProvider>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
