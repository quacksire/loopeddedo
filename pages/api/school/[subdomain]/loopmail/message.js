export default async function handler(req, res) {
  if (!req.cookies.auth) return res.send(401);

  res.send(
    await fetch(
      `https://${req.query.subdomain}.schoolloop.com/mapi/mail_messages?studentID=${reqbk}&ID=${req.query.mid}`,
      {
        method: "GET",
        headers: {
          authorization: req.cookies.auth,
        },
        redirect: "follow",
      }
    ).then((res) => {
      return res.json();
    })
  );
}
