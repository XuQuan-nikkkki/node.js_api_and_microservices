const express = require("express");
let app = express();

app.get('/', (req, res) => {
    res.json({'ipaddress': req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']});
    console.log(req);
})

app.listen(8080, ()=>{
    console.log("server running at 8080");
})