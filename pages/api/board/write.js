import Board from "../../../models/Board";

export default async (req, res) => {
    // body라는 프로퍼티에 담아서 내용을 보냈기때문에
    // req.body로 받아야한다
    const {title, userid, contents} = req.body;
    // console.log(title, userid, contents)

    try {
        // new Board(null, title, userid, null, contents, null).insert()
        const cnt = Board.newOne(title, userid, contents).insert()
            .then(result => result)

        console.log(await cnt);
        res.status(200).json({cnt: await cnt});
    }catch(err){
        res.status(500).json(err);
    }
}