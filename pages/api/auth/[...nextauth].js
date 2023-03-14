// npm install next-auth@3.29.10 -save-dev
// 경로 : /pages/auth

import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        Credentials({
            // 로그인 폼 정의
            name: 'email-passwd-credentials',
            credentials: {
                email: { label: "이메일", type: "email" },
                passwd: { label: "비밀번호", type: "password" }
            },
            async authorize(credentials, req) {
                // 폼에 입력한 이메일, 비밀번호 값 가져옴
                const email = credentials.email;
                const passwd = credentials.passwd;

                if(email === 'asd123@asd.com' && passwd === 'asd123') return credentials;
            }
        })
    ]
})