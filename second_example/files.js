var fs = require('fs');
fs.exists('./demo', (result1) => {
    if (result1) {
        console.log('Directory Already exists');
    } else {
        fs.mkdir('./demo', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    }
});


