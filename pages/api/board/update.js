import Board from "../../../models/Board";

export default async (req, res) => {
    // body라는 프로퍼티에 담아서 내용을 보냈기때문에
    // req.body로 받아야한다
    const {bno, title, contents} = req.body;

    try {
        const cnt = Board.modifyOne(bno, title, contents)
            .update()
            .then(result => result)
        res.status(200).json({cnt: await cnt});
    }catch(err){
        res.status(500).json(err);
    }
}