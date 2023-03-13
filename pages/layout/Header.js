import Link from "next/link";


const Header = () => {
  return (
<>
        <header><h1>NextJS 프로젝트 v1</h1></header>
        <nav>
          <ul>
              {/*Link 컴포넌트는 프리렌더링이다 미리 페이지를 만들어둔다 클릭하면 응답속도가 빠름*/}
              {/*a태그는 그렇지 않음*/}
            <li><Link href="/">Home</Link></li>
              {/*Link 컴포넌트를 사용하면 Link를 눌러 회원가입으로 갔을때 리캡챠가 렌더링되지 않는다
              프리렌더링이라 페이지를 미리 만들어두기 때문이다 그래서 프리렌더링으로 작동하지 않게 하기 위해서
              회원가입 태그는 a태그를 사용한다*/}
            <li><a href="/member/join">회원가입</a></li>
            <li><Link href="/member/login">로그인</Link></li>
            <li><Link href="/board/list">게시판</Link></li>
            <li><Link href="/member/MyInfo">회원정보</Link></li>
          </ul>
          <hr />
        </nav>
</>
  );
};

export default Header;
