const path = require('path');
const fs = require('fs');
const pathListUser = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'userToken.json'
)

const auth = (token) => {
    let listUser = JSON.parse(fs.readFileSync(pathListUser, 'utf-8'));
    let isUser = listUser.find(item => item.token == token);
    if (isUser.token != undefined) {
        return true;
    } else {
        return false;
    }
}

exports.auth = auth;