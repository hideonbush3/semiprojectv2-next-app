// 경로 : /pages/auth/login.js

import { signIn, signOut, useSession } from "next-auth/client";

const Login = () => {
  const [session, loading] = useSession();

  // 세션이 있을때 처리
  if (session) {
    return (
      <>
        <h3>{session.user.userid} 계정으로 로그인하였습니다.</h3>
        <button onClick={() => signOut()}>로그아웃하기</button>
      </>
    );
  }

  // 세션이 없을때 처리
  return (
    <>
      <h3>로그인 하세요!</h3>
      <button onClick={() => signIn()}>로그인하기</button>
    </>
  );
};

export default Login;
