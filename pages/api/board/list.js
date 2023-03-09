import mariadb from 'mariadb'

// RESTAPI : http:/localhost:3000/api/board/list
// view : http:/localhost:3000/board/list

const dbconfig = {
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PWD,
    database: process.env.MARIADB_DB,
};

export default async (req, res) => {
    let conn;
    // limit first, second의 firsr는 start number이고 second는 가져올 개수
    // 0번부터 15개 가져온다
    const sql = `select bno, title, userid, date_format(regdate, "%Y-%m-%d") regdate, views from board order by bno desc limit 0, 15`;

    try {
        conn = await mariadb.createConnection(dbconfig);

        const rowData = await conn.query(sql);
        // 정상 처리 후 응답 : 상태코드 200, 조회결과 반환
        res.status(200).json(rowData);  // json으로 응답

    } catch (err) {
        console.log(err);
        // 처리 실패시 응답 : 상태코드 500, 오류메시지 반환
        res.status(500).json(err).end();
    } finally {
        if (conn) await conn.close();
    }
}
