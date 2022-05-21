// App's Business logic 
const fetchData = require('../services/loadData/app.loaddata');
let museumData = []

const controller = {
    getMuseumsVisitorsCount : async (req, res)=>{
        // We will check do we have already stored the data on local memory or not
        console.log("Query : ", req.query)
        if(museumData.length > 0){
            console.log("Data already stored : ", museumData.length)
            return res.json({"message": "hello"})
        }

        //If not, then we will first fetch the data and store it in local variable
        museumData = await fetchData()
        console.log("Data appended = ", museumData.length);
        return res.json({"message": "hello"})
    }
}

module.exports = {
    controller
}