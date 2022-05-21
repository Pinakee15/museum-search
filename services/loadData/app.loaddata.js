const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let url = "https://data.lacity.org/resource/trxm-jn3c.json";

let settings = { method: "Get" };

const fetchData = async (req, res)=>{
    return await fetch(url, settings)
    .then(res => res.json())
    .then((data) => {
        return data;
    });
}

module.exports = fetchData;
