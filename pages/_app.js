import '../styles/globals.css'
import '../public/css/main.css'
import '../public/css/project2.css'
import '../public/css/normalize.css'

import React from "react";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />    {/* 페이지 주소가 pageProps에 들어감 */}
      </Layout>
  );
}

export default MyApp
