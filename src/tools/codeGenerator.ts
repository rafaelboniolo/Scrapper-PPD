export default (param: string) => {
  const buff = Buffer.from(param, 'base64');
  return buff.toString('ascii')
}
