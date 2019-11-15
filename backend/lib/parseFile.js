const fs = require('fs');
const path = require('path');
const readline = require('readline');

module.exports = (filePath , callback) => {
    let result = path.join(__dirname , ".." , filePath);
    
    let readInterface = readline.createInterface({
        input: fs.createReadStream(result),
        crlfDelay: Infinity
    })

    let list = [];
    let flag = 0;

    readInterface.on('line', (line) => {
        if (!line) {
            flag += 1;
        }else{
            let [key, body] = line.split(":");
            if (list[flag]) {
                key = key.toLowerCase();
                if (key === "stars") 
                    body = [...new Set(body.split(','))].join(',');
                list[flag][key === "release year" ? "year" : key] = body.trim();
            } else {
                list.push({
                    [key.toLowerCase()]: body.trim()
                })
            }
        }
    })
    .on('close', () => {
        callback(null , list);
    })
}