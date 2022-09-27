export default async function handler(req, res) {
    res.send(
        await fetch(`https://schoolloop.com/mapi/schools`, {
        method: "GET",
        redirect: "follow",
        }).then((res) => {return res.json()})
    )
}
