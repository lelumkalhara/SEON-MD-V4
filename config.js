const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=JIgT3awY#2vTQ-DXXg8GDkmq9qIQ7DMwlyAuRrx-fQnSY7adSeTU', //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || 'uvindugit', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || 'jjs04aXnF4kFaZ1siVExodAyS2Qirw4fUUXI', //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
