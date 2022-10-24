export default async function handler(req, res) {
  // if (!req.cookies.auth) return res.send(401);

  res.setHeader("Cache-Control", "s-maxage=3600");
  /** if (process.env.CSB) {
    console.log("courses REQUEST");
    res.send(require("../../../../cache/courses.json"));
    return;
  }**/
  const authToken = "c2plZmZzMjQ6MTIwMzIwMDU=";
  const sid = "1593846838236";
  const result = await fetch(
    `https://${req.query.subdomain}.schoolloop.com/mapi/report_card?studentID=${sid}`,
    {
      method: "GET",
      headers: {
        authorization: "Basic c2plZmZzMjQ6MTIwMzIwMDU=",
      },
      redirect: "follow",
    }
  );
  // .then((res) => {
  //   return res.json();
  // })
  const resultJson = await result.json();
  console.log(
    "[remote result]",
    resultJson,
    `https://${req.query.subdomain}.schoolloop.com/mapi/report_card?studentID=${sid}`
  );
  res.send(resultJson);
}
