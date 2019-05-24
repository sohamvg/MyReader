// SEARCH THEOREMS / DEFINITIONS / EXAMPLES IN PDF

const data = require('./output/Theorem1.json') // json file to be searched

function search_theorem(data,search){
    var page = data['formImage']['Pages'];
    search_list = search.split(" ");   // e.g.: search_list[0] = 'theorem/example'; search_list[1] = '2.1.'
    
    for(var pg_no in page){
        
        var text = page[pg_no]['Texts'];
        
        if(text.length>1){
            var txt_no;
            for(txt_no=0; txt_no < text.length; txt_no++){
                
                var R = text[txt_no]['R'][0];
                var R2 = text[txt_no+1]['R'][0];
                
                if(R['T'].toLowerCase().includes(search_list[0].toLowerCase()) && R['T'].toLowerCase().includes(search_list[1].toLowerCase()) && (R['TS'][2]==1 || R['TS'][3]==1)){ // search items are in single text object
                    return [R, [text[txt_no]['x'],text[txt_no]['y'],text[txt_no]['w']]];
                }
                else if(R['T'].toLowerCase().includes(search_list[0].toLowerCase()) && R2['T'].toLowerCase().includes(search_list[1].toLowerCase()) && (R['TS'][2]==1 || R['TS'][3]==1) && (R2['TS'][2]==1 || R2['TS'][3]==1)){ // search items are in different text objects
                    return [R2, [text[txt_no+1]['x'],text[txt_no+1]['y'],text[txt_no+1]['w']]];
                }
                else if(R['T'].toLowerCase().includes(search_list[0].toLowerCase()) && R['T'].toLowerCase().includes(search_list[1].toLowerCase())){ // search items are in single text object
                    return [R, [text[txt_no]['x'],text[txt_no]['y'],text[txt_no]['w']]];
                }
                else if(R['T'].toLowerCase().includes(search_list[0].toLowerCase()) && R2['T'].toLowerCase().includes(search_list[1].toLowerCase())){   // search items are in different text objects
                    return [R2, [text[txt_no+1]['x'],text[txt_no+1]['y'],text[txt_no+1]['w']]];
                }
            }
        }
        else{   // only one text object on the page
            for(var txt_no in text){
                var R = text[txt_no]['R'][0];
                if(R['T'].toLowerCase().includes(search_list[0].toLowerCase()) && R['T'].toLowerCase().includes(search_list[1].toLowerCase())){ 
                    return [R, [text[txt_no]['x'],text[txt_no]['y'],text[txt_no]['w']]];
                }
            }
        }
    }
}

var res = search_theorem(data,"theorem 2.1");  // parameter1 : data/json file ; parameter2 : text to be searched

if(res!=null){
    console.log(res);
}
else{
    console.log('not found');
}