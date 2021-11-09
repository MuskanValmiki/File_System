var fs=require('fs')
fs.writeFile("mynewfile3.txt","this is my text.",function(err){
    if (err) throw err;
        console.log("replaced!");
});
//here we are replaced my file by using fs.writeFile() methods