// styles
import "../stylesheets/blog.css"
import "../stylesheets/index.css"
import "../stylesheets/layout.css"

import "../stylesheets/navbar/mobileMenu.css"
import "../stylesheets/navbar/sidebar.css"

import "../stylesheets/admin-styles/create.css"
import "../stylesheets/admin-styles/login.css"
import "../stylesheets/admin-styles/posts.css"
import "../stylesheets/admin-styles/uploadImages.css"


import { useRouter } from 'next/router';
import React, {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'UA-190645408-2', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />
}
export default MyApp
