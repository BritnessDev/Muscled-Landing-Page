import { FC, useEffect, useState } from 'react'
import 'styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Sidebar from 'components/sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <div className='w-full'>
      <div>
        {/* Header */}
        <Header />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
}

export default MyApp
