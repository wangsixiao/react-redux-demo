import React,{useRef} from 'react';

import Button from './button';
// import RButton from '@beisen-phoenix/button';

const Test = () => {
  const cancleRef = useRef(null)
  console.log(cancleRef.current)
  const handleClick = () => {
    console.log(cancleRef.current)
  }
  return(
    <div>
      <div>
        <Button size='small' type="normal">取消</Button>
        <Button size='super' type="secondary" ref={cancleRef} onClick={handleClick}>下一步</Button>
        <Button size='big' disabled>保存</Button>
      </div>
      {/* <div>
        <RButton size='small' type="normal">取消</RButton>
        <RButton size='super' type="secondary">下一步</RButton>
        <RButton size='big' width="120px">保存</RButton>
      </div> */}
    </div>
  )
}

export default Test