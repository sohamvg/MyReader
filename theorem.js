const data = require('./output/Differentiations.json') // json file to be searched

function getObject(theObject,query) {

    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i],query);
            if (result) {
                break;
            }   
        }
    }
    else
    {
        for(var prop in theObject) {
            
            if(prop == "T") {
                if(theObject[prop] == query && (theObject['TS'][2]==1 || theObject['TS'][3]==1)) // result text must be bold or italic
                {
                    return theObject;
                }
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = getObject(theObject[prop],query);
                if (result) {
                    break;
                }
            } 
        }
    }
    return result;
}
var res = getObject(data,'definition'); // text to be searched as the second argument

if(res!=null){
    console.log(res);
}
else{
    console.log('not found');
}