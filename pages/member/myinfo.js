import axios from "axios";
import { signOut, useSession } from "next-auth/client";

// member/myinfo : getServerSideProps 실행되고 axios로 url에 요청
// -> api/member/myinfo?userid=${userid} 가 url임
// -> 반환값 받고 돌아와서 Myinfo 컴포넌트로 return
export async function getServerSideProps(ctx) {
  // let userid = ctx.query.userid;
  let userid = "123";
  let url = `http://localhost:3000/api/member/myinfo?userid=${userid}`;

  const res = await axios.get(url);
  const member = await res.data[0];
  // console.log('pg myinfo - ', await member);

  return { props: { member } };
}

export default function Myinfo({ member }) {
  const [session, loading] = useSession();
  console.log("myinfo - ", session?.user?.userid);
  return (
    <main>
      <h2>회원정보</h2>
      <table className="myinfo">
        <tbody>
          <tr>
            <td>아이디</td>
            <td>{member.userid}</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>{member.name}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>{member.email}</td>
          </tr>
          <tr>
            <td>가입일</td>
            <td>{member.regdate}</td>
          </tr>
        </tbody>
      </table>
      {session ? <button onClick={() => signOut()}>로그아웃</button> : false}
    </main>
  );
}
