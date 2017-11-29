const fs = require('fs');
const path = require('path');

const csv2json = (fname) => {
    var buff = fs.readFileSync(path.join(__dirname, fname), 'utf8');
    var lines = buff.split('\r\n');
    var keys = lines[0].split(',');
    var data = lines.slice(1);
    data = data.map((line) => {
        var values = line.split(',');
        var obj = {};
        for (var i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
        }
        return obj;
    });
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(data));
};

csv2json(process.argv[2]);
