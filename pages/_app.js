import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import ProductInfoProvider from '../utilities/contexts/ProductInfoProvider';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div data-theme="light" className="w-full h-full">
        <ProductInfoProvider>
          <Component {...pageProps} />
        </ProductInfoProvider>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
