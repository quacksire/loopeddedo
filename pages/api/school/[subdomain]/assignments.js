export default async function handler(req, res) {
    res.send(
        await fetch(`https://${req.query.subdomain}.schoolloop.com/mapi/assignments?studentID=${req.query.id}`, {
            method: "GET", headers: {
                authorization: req.cookies.auth
            },
            redirect: "follow",
        }).then((res) => {return res.json()})
    )
}
