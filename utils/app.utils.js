
const getAllVisitDetails = (data, ignoredMuseum)=>{
    let maxVisits  = 0;
        minVisits = Infinity;
        museumWithMinVisit = "";
        museumWithMaxVisit = "";
        total = 0;
        ignored = null
    Object.keys(data).forEach(key=>{
        
        if(key !== ignoredMuseum){
            if(key == 'month') { 
                // skip
            }
    
            // Find name and count of museum with maximum visits
            if(parseInt(data[key]) >= maxVisits){
                maxVisits = parseInt(data[key]);
                museumWithMaxVisit = key
            }
    
            // Find name and count of museum with minimum visits
            if(parseInt(data[key]) < minVisits){
                minVisits = parseInt(data[key]);
                museumWithMinVisit = key
            }      
    
            total = total +  parseInt(data[key]);    
        }
        
    })

    return {museumWithMaxVisit , maxVisits , museumWithMinVisit , minVisits , total}
}

const getIgnoredMuseum = (data,museum)=>{
    if(data[museum]) return {museum , visitors : data[museum]}
    else return null;
}

const numToMonthConverter = (month)=>{
    const numToMonthObj = {
        "1" : "Jan",
        "2" : "Feb",
        "3" : "March",
        "4" : "April",
        "5" : "May",
        "6" : "Jun",
        "7" : "Jul",
        "8" : "Aug",
        "9" : "Sep",
        "10" : "Oct",
        "11" : "Nov",
        "12" : "Dec" 
    }
    return numToMonthObj[month]
}


module.exports = {
    getAllVisitDetails,
    getIgnoredMuseum,
    numToMonthConverter
}