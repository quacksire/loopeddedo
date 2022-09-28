export default async function handler(req, res) {
  res.send(
    await fetch(
      `https://${req.query.subdomain}.schoolloop.com/mapi/progress_report?studentID=${req.cookies.sid}&periodID=${req.query.pid}`,
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
