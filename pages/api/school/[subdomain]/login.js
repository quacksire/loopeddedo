export default async function handler(req, res) {
    res.send(
        await fetch(`https://${req.query.subdomain}.schoolloop.com/mapi/login?version=3&devToken=postman&devOS=postman&year=${new Date().getFullYear()}`, {
            method: "GET", headers: {
                authorization: req.cookies.auth
            },
            redirect: "follow",
        }).then((res) => {return res.json()})
    )
}
