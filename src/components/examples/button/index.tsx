/**
 * 按钮设置
 * 大小：小 中 大超级
 * 类型：普通 次要 主要
 * 是否禁用
 * 按钮icon
 * ref
 * 宽度
 * 传入的class类名
 * 点击事件
*/
import React, {useCallback, useEffect, useState} from 'react';
import BEMClass from '../bemclass';
import './index.scss';

type ButtonSize = 'small' | 'middle' | 'big' | 'super'
type ButtonType = 'normal' | 'secondary' | 'primary'
interface IButtonProps {
  size?: ButtonSize,
  type?: ButtonType,
  disabled?: boolean,
  preIcon?: JSX.Element,
  ref?: any,
  width?: string,
  extendClass?: string,
  onClick?: (e:any) => void,
}
// element是button 组件class名将以react-button开始
const subBEMClass = BEMClass("button")

const Button: React.FunctionComponent<IButtonProps> = React.forwardRef<HTMLDivElement, IButtonProps>(
  (props, ref) => {
    const {
      size = 'middle',
      type = 'primary',
      disabled = false,
      width = 'auto',
      extendClass = ''
    } = props

    // 点击事件
    const onHandleClick = useCallback(e => {
      if(disabled){
        // 阻止事件冒泡
        e.stopPropagation()
        return false;
      }
      props.onClick && props.onClick(e)
    }, [disabled, props.onClick])

    // 
    const ChildCmp = useCallback(() => {
      return <div className="button__content">{props.children}</div>
    }, [props.children])
    // 根据props定义按钮样式
    const wraperClass = subBEMClass({
      element: 'wrapper',
      modifiers: {
        super: size === "super",
        big: size === "big",
        middle: size === "middle",
        small: size === "small",
        normal: type === "normal",
        secondary: type === "secondary",
        primary: type === "primary",
        disable: disabled
      }
    })
    const exClass = subBEMClass({extra: extendClass})

    return(
      <div>
        <div className={exClass} style={{width}}>
        <div
          className={wraperClass}
          onClick={onHandleClick}
          ref={ref}
        >
        {ChildCmp()}
        </div>
      </div>
      <Child/>
      </div>
    )
})

const Child = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("enter123")
    return () => {
      console.log("leave")
    }
  },[count])
  const changeHandle = () => {
    setcount(count+1)
  }
  return(
    <div>
      <input type="text" onChange={changeHandle}/>
    </div>
  )
}

export default Button