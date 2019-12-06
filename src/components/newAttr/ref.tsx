import React, { Component } from 'react';

interface Iprops{

}
interface Istate{
}

export default class extends Component<Iprops,Istate>{

  // createRef是一个泛型方法，支持传递类型参数
  private textRef = React.createRef<HTMLInputElement>()
  // checkRef:HTMLInputElement
  constructor(props:any){
    super(props);
  }

  componentDidMount(){
    // 数组求和
    const arr = [1,12,3,4,5]
    let sum = 0
    arr.forEach(item => {
      sum += item
    })
    // let sum = arr.reduce((pre, cur, index, arr) => {
    //   console.log("index: " + index + "arr:" + arr)
    //   return pre + cur
    // })
    // console.log(sum)
  }

  getData(){
    // !操作符表示该变量此时
    // const data = this.textRef.current!.value
    // console.log(data)
    // const checkdata = this.checkRef.current!.value
    // console.log(checkdata)
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.textRef}/>
        {/* <input type="checkbox" ref={(ele) => (this.checkRef = ele)}/> */}
        <button onClick={this.getData}>click</button>
      </div>
    )
  }
}