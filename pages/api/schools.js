export default async function handler(req, res) {
    console.log(req.cookies.get('vercel'))

    res.send(
        await fetch(`https://schoolloop.com/mapi/schools`, {
        method: "GET",
        redirect: "follow",
        }).then((res) => {return res.json()})
    )
}
