// App's Business logic 
const { response } = require('express');
const fetchData = require('../services/loadData/app.loaddata');
const utils = require("../utils/app.utils");
let museumData = []

const controller = {
    getMuseumsVisitorsCount : async (req, res)=>{
        // We will check do we have already stored the data on local memory or not
        console.log("Query : ", req.query)
        if(museumData.length > 0){
            // console.log("Data already stored : ", museumData)
            // return res.json({"message": "hello"})
        }

        //If not, then we will first fetch the data and store it in local variable
        museumData = await fetchData()
        console.log("Data appended = ", museumData);

        // Login
        let response = {}
        let datetime = new Date(1404198000000)
        let datetimeString = datetime.toISOString();
        console.log("Date time : ", datetime);
        museumData.map(data=>{
            if(data?.month.includes(datetimeString.substring(0,10))){
                let d =   {
                    america_tropical_interpretive_center: '2786',
                    avila_adobe: '11747',
                    chinese_american_museum: '1183',
                    gateway_to_nature_center: '0',
                    firehouse_museum: '2904',
                    hellman_quon: '0',
                    iamla: '716',
                    pico_house: '0',
                    visitor_center_avila_adobe: '0',
                    museum_of_social_justice: '1232',
                    biscailuz_gallery: '0'
                  }
                console.log("This is max : ", utils.getMax(d))
            }
        })

        return res.json({"message": "hello"})
    }
}

module.exports = {
    controller
}