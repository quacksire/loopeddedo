export default async function handler(req, res) {
  // if (!req.cookies.auth) return res.send(401);

  res.setHeader("Cache-Control", "s-maxage=3600");
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
  const resultJson = await result.json();
  
  res.status(200).json(resultJson)
  res.send(resultJson);
}
