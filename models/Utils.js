import axios from "axios";

const check_captcha = async (response) => {
    let url = '/api/board/recaptcha?response=' + response; // 캡챠 확인받는 주소
    const data = axios.get(url).then(data => data.data)
    console.log((await data).success)

    return (await data).success;
};

const handleInput = (setInput, e) => {setInput(e.target.value)};

const process_submit = async (url, data) => {
    const cnt = fetch(url, {
        method: 'POST', mode: 'cors',
        body: JSON.stringify(data), // 보내는 내용
        headers: {'Content-Type': 'application/json'} // 유형
    }).then(res => res.json());

    return (await cnt).cnt;
};

module.exports = {check_captcha, handleInput, process_submit}