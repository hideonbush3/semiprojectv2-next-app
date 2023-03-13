import '../styles/globals.css'
import '../public/css/main.css'
import '../public/css/project2.css'
import '../public/css/normalize.css'

import React from "react";
import Layout from "./layout";
{/*MyApp 컴포넌트는 모든 페이지에서 공통적으로 사용되며,
따라서 React 기반 웹 애플리케이션에서 가장 근본이 되는 컴포넌트 중 하나*/}
{/*Layout 컴포넌트는 모든 페이지에서 공통적으로 사용될 레이아웃을 정의하는 컴포넌트*/}
{/*<Component>는 Next.js에서 페이지 컴포넌트를 나타내는 특별한 프로퍼티*/}
{/*이 프로퍼티는 Next.js에서 현재 페이지의 컴포넌트를 나타냅니다*/}
{/*pageProps는 페이지 컴포넌트로 전달된 데이터를 나타내는 객체입니다.*/}

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />    {/* 페이지 주소가 pageProps에 들어감 */}
      </Layout>
  );
}

export default MyApp
