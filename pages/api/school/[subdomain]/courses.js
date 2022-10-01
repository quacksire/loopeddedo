export default async function handler(req, res) {
  if (!req.cookies.auth) return res.send(401);
  res.setHeader("Cache-Control", "s-maxage=3600");
  res.send(
    await fetch(
      `https://${req.query.subdomain}.schoolloop.com/mapi/report_card?studentID=${req.cookies.sid}`,
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
