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
            // **PASS**. If Museum data already exist then no need to fetch
        }

        //If not, then we will first fetch the data and store it in local variable
        else {
            museumData = await fetchData()
        }

        // Get query string variables
        let date = req.query?.date;
        let ignore = req.query?.ignore;

        // Declare local variables
        let response = {}
        let datetime = new Date(parseInt(date))
        let datetimeString = datetime.toISOString();
        let obj = {}
        let ignored = null;

        // Get visits data
        museumData.map(data=>{
            if(data?.month.includes(datetimeString.substring(0,10))){
                obj = utils.getAllVisitDetails(data, ignore)
                ignored = utils.getIgnoredMuseum(data , ignore)
            }
        })

        let attendance = {
            month :  (utils.numToMonthConverter(datetime.getMonth()+1)).toString(),
            year : datetime.getFullYear(),
            highest :{
                museum : obj['museumWithMaxVisit'],
                visitors : obj['maxVisits']
            },
            lowest :{
                museum : obj['museumWithMinVisit'],
                visitors : obj['minVisits']
            },
            total : obj['total']
        }

        ignored ? attendance['ignored'] = ignored : null;
        response['attendance'] = attendance;

        return Object.keys(obj).length>0 ? res.json(response) : res.json({"message" : "No museum data found in the provide date"})
    }
}

module.exports = {
    controller
}