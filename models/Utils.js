import axios from "axios";

const check_captcha = async (response) => {
    let url = '/api/board/recaptcha?response=' + response; // 캡챠 확인받는 주소
    const data = axios.get(url).then(data => data.data)
    console.log((await data).success)

    return (await data).success;
};

module.exports = {check_captcha}