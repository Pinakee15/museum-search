const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const env = require("../../env/app.env")
let url = env.dataUrl;

let settings = { method: "Get" };

const fetchData = async (req, res)=>{
    return await fetch(url, settings)
    .then(res => res.json())
    .then((data) => {
        return data;
    });
}

module.exports = fetchData;
