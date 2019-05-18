// SEARCH IN PAGE

const data = require('./output/abcd.json') // json file to be searched

function search_theorem(data,search_item){
    var page = data['formImage']['Pages'];

    for(var pg_no in page){
        
        var text = page[pg_no]['Texts'];
        for(var txt_no in text){
            var R = text[txt_no]['R'][0];
            if(R['T'] == search_item && (R['TS'][2]==1 || R['TS'][3]==1))   // result text must be bold or italic
            {
                return R;
            }
        }
    }
}

var res = search_theorem(data,'abcd');  // parameter1 : data/json file ; parameter2 : text to be searched

if(res!=null){
    console.log(res);
}
else{
    console.log('not found');
}