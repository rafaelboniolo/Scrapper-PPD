module.exports = (param) => {
    let buff = new Buffer(param);
    return buff.toString('base64'); 
}