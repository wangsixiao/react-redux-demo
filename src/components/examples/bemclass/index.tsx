import BEMHelper from 'react-bem-helper';

interface IObj {
  element?: string,
  modifiers?: {},
  extra?: string
}

export default (name: string, extra?: string) => {
  const instance = new BEMHelper({
    name: name,
    prefix: 'react-',
    // 输入为string 否则className获取到的不是string类型
    outputIsString: true
  })
  return (obj:IObj) => {
    const defaultObj = {
      element: '',
      modifiers: '',
      extra: extra || ''
    } 
    return instance(Object.assign(defaultObj, obj))
  }
}
