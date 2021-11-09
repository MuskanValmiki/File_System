var fs=require('fs')
fs.open('node_formidable.txt','w',function(err,file){
    if  (err) throw err;
      console.log("saved!");
});

var data=require('fs')
data.mkdirSync("Muskan")
data.writeFileSync("Muskan/node_formidable.txt",'Hello i am muskan  valmikee.')
data.appendFileSync("Muskan/node_formidable.txt",'\ntoday there is variable class you will join if you have doubt.')
