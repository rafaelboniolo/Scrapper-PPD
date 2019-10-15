export default (param: string) => {

    let buff = Buffer.from(param, 'base64');
    return buff.toString('ascii')

}