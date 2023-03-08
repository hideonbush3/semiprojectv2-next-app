import Link from "next/link";


const Header = () => {
  return (
<>
        <header><h1>NextJS 프로젝트 v1</h1></header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/member/Join">회원가입</Link></li>
            <li><Link href="/member/Login">로그인</Link></li>
            <li><Link href="/board/List">게시판</Link></li>
            <li><Link href="/member/MyInfo">회원정보</Link></li>
          </ul>
          <hr />
        </nav>
</>
  );
};

export default Header;
