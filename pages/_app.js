import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { WalletBalanceProvider } from '../context/useWalletBalance'
import { ModalProvider } from 'react-simple-hook-modal'
import { useEffect } from 'react';

const WalletConnectionProvider = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr: false,
  },
)

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    // Set the background color for the whole app
    document.body.classList.add('bg-[#18191a]');
    return () => {
      document.body.classList.remove('bg-[#18191a]');
    };
  }, []);

  return (
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  )
}

export default MyApp
