var fs=require('fs')
fs.appendFile('mynewfile.txt','Hello Muskan!',function(err){
    if (err) throw err;
       console.log("saved!")
});
//here we are creating file by fs.appendFile() methods