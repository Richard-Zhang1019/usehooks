import React from 'react'
import { useCountDown } from 'lucky-usehooks'

export default () => {
  const num = useCountDown(10)

  return (
    <div>倒计时：{num}</div>
  )
}
