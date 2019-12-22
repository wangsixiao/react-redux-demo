/**
 * 性能优化 useCallback useMemo
 * 防抖
 * 
 */

import React, {memo, useState, useCallback, useMemo} from 'react'

type TDebounce = (f: Function, delay?: number) => (a:any)=>void

// 防抖
// const Example = () => {
//   const [count, setCount] = useState(0)
//   const [bounceCount, setBounceCount] = useState(0)
//   // 还是会走到setimeout里的，每次setCount计算方法都会重新渲染，会得到新的debounceCount函数
//   const debounceCount = debounce(setBounceCount)
//   // 传入空数组，缓存第一次的函数 分配内存一致
//   // const debounceCount = useMemo(() => debounce(setBounceCount), [])
//   // const debounceCount = useCallback(debounce(setBounceCount), [])

//   const handleMove = () => {
//     setCount(count + 1)
//     debounceCount(bounceCount+1)
//   }

//   return (
//     <div onMouseMove={handleMove}>
//       <p>普通移动次数：{count}</p>
//       <p>防抖移动次数：{bounceCount}</p>
//     </div>
//   )
// }

// const debounce:TDebounce = (func, delay=1000) => {
//   let timer:number;
//   return function(...arg){
//     if(timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       console.log('run-do');
//       func.apply(null, arg)
//     }, delay)
//   }
// }

interface IChild {
  onSubmit: Function
}

const Child = memo(() => {
  console.log("child")
  return (
    <div>
      <button>click</button>
    </div>
  )
})

const Example = () => {
  const [text, setText] = useState('')
  const handleSubmit = useCallback(() => {
    console.log(text)
  },[text])
  return(
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
      <Child/>
    </div>
  )
}

export default Example