import React from "react";

const MyInfo = () => {
    return (
<>
            <h2>회원정보</h2>
            <table className="myinfo">
                <tbody>
                <tr>
                    <td>아이디</td>
                    <td>hideonbush3</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>엄준식</td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>abc123@987xyz.co.kr</td>
                </tr>
                <tr>
                    <td>가입일</td>
                    <td>2022-12-19 12:17:36</td>
                </tr>
                </tbody>
            </table>
</>
    );
};

export default MyInfo;
