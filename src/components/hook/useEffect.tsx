/**
 * useEffect使用，先执行子组件的useEffect
 * 监听变化
 * 如果不传值，不管做什么都会执行,
 * 传[], 只在组件创建和销毁才会执行
 * 传[count],表示在count改变的时候会触发
*/
import React, { useState, useRef, useEffect, useCallback } from 'react'

export default function Effect(){

  const inputRef = useRef(null)

  const [size, setSize] = useState({
    width: window.outerWidth,
    height: window.outerHeight
  });
  const [count, setCount] = useState(0)

  // 
  useEffect(() => {
    console.log("开始");
    return () => {
      console.log("卸载")
    }
  },[size])

  const onResize = useCallback(() => {
    setSize({
      width: window.outerWidth,
      height: window.outerHeight
    })
  }, [])

  function getinputData(){
    setCount(count+1);
    const data: any = inputRef.current
    console.log(data.value)
  }

  return(
    <div>
      <input type="text" ref={inputRef}/>
      <p>you click {count} times</p>
      <button onClick={() => getinputData()}>click</button>
      {
        count < 3  &&
        <Child />
      }
    </div>
  )
}

function Child(){
  useEffect(() => {
    console.log("Child渲染");
    return () => {
      console.log("Child卸载")
    }
  }, [])
  return (
    <h2>Child</h2>
  )
}