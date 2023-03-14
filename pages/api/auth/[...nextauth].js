// npm install next-auth@3.29.10 -save-dev
// 경로 : /pages/auth

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      // 로그인 폼 정의
      id: "userid-passwd-credentials",
      name: "userid-passwd-credentials",
      credentials: {
        userid: { label: "아이디", type: "text" },
        passwd: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials, req) {
        // 폼에 입력한 이메일, 비밀번호 값 가져옴
        const userid = credentials.userid;
        const passwd = credentials.passwd;

        // 인증에 성공해야만 로그인 허용
        if (userid === "asd123" && passwd === "asd123") return credentials;
      },
    }),
  ],
  pages: {
    // 인증에 사용자 정의 로그인 페이지 사용
    signIn: "/member/login",
  },
  callbacks: {
    // jwt는 json web token의 약자임
    async jwt(token, user, account, profile, isNewUser) {
      console.log("jwt - ", user);
      // user 객체가 존재하고 userid 값이 있다면
      // 옵셔널 체이닝
      if (user?.userid) token.userid = user.userid;

      return token;
    },
    // session, userOrToken
    async session(session, userOrToken) {
      console.log("session - ", userOrToken);
      session.user.userid = userOrToken.userid;

      return session;
    },
  },
});
