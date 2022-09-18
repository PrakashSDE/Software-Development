var url = 'https://nodejs.org/api/esm.html';
function log(message){
     console.log("This is Module System" +message);
}
module.exports.log=log;
module.exports.endPoint = url;