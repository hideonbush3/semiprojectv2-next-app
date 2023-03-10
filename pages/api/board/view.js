import Board from '/models/Board';

export default async (req, res) => {
    let bno = req.query.bno;


    try {
        const rowData = new Board().selectOne(bno).then((bds) => bds);
        res.status(200).json(await rowData);  // json으로 응답
    } catch (err) {
        console.log(err);
        // 처리 실패시 응답 : 상태코드 500, 오류메시지 반환
        res.status(500).json(err);
    }
}
