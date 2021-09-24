const url = require('url');

export default function handler(req, res) {
    const query = url.parse(req.url,true).query
    res.status(200).json({ ...query })
}