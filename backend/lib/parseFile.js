const fs = require('fs');
const path = require('path');

module.exports = (filePath , callback) => {
    let result = path.join(__dirname , ".." , filePath);

    fs.readFile(result, (err, data) => {
        if(err){
            return callback(err);
        }

        data = data.toString().split('\r\n');
        let list = [];
        let flag = 0;

        for (let i = 0; i < data.length; i++) {
            let value = data[i];

            if (!value) {
                flag += 1;
                continue;
            }
            
            let [key, body] = value.split(":");

            if (list[flag]) {
                key = key.toLowerCase();
                list[flag][key === "release year" ? "year" : key] = body.trim();
            } else {
                list.push({
                    [key.toLowerCase()]: body.trim()
                })
            }
        }

        callback(null , list);
    })
}