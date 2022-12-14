export default async function handler(req, res) {
  if (!req.cookies.auth) return res.send(401);
  res.setHeader("Cache-Control", "s-maxage=1800");
  if (process.env.CSB) {
    console.log("ASSMT REQUEST");
    res.send(require("../../../../cache/assignments.json"));
    return;
  }
  res.send(
    await fetch(
      `https://${req.query.subdomain}.schoolloop.com/mapi/assignments?studentID=${req.cookies.sid}`,
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
