import type { AppProps } from 'next/app'

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

function MyApp({ Component, pageProps }:any) {
  return <Component {...pageProps} />
}
export default MyApp
