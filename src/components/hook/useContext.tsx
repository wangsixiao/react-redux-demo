/**
 * useContext使用，优势是存在多层级时，不需要使用props一层一层的传下去
*/
import React,{ useState, useContext, createContext, Context } from 'react';
// 如果子组件是新的文件，直接引入就好
// import ChildComponent from './childCompoent';

export const CountContext:Context<number> = createContext(0)

function context(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => { setCount(count+1) }}>click</button>
      <CountContext.Provider value={count}>
        <ChildComponent1 />
      </CountContext.Provider>
    </div>
  )
}

function ChildComponent1(){
  return (
    <ChildComponent2 />
  )
}

function ChildComponent2(){
  const count = useContext(CountContext);
  return (
    <h2>{count}</h2>
  )
}

export default context