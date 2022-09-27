export default function handler(req, res) {
    console.log(`https://${req.query.subdomain}.schoolloop.com/mapi/login?version=3&devToken=postman&devOS=postman&year=${new Date().getFullYear()}`)
    return fetch(`https://${req.query.subdomain}.schoolloop.com/mapi/login?version=3&devToken=postman&devOS=postman&year=${new Date().getFullYear()}`, {
        method: "GET",
        headers: require('../dev-auth'),
        redirect: "follow",
    })
}
