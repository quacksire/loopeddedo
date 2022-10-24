export default async function handler(req, res) {
if (!req.cookies.auth) return res.send(401);
if (process.env.CSB) {
    res.send(require(`../../../../cache/course/${req.query.pid}.json`));
    return
  }
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
