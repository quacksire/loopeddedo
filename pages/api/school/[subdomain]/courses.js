export default async function handler(req, res) {
  console.log(req.cookies);
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
