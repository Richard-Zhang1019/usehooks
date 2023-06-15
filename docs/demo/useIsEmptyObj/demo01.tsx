import React from 'react'
import { useIsEmptyObj } from 'lucky-usehooks'

export default () => {
  const obj = {}
  const isEmpty = useIsEmptyObj(obj)

  return (
    <div>obj{isEmpty ? '是': '不是'}空对象</div>
  )
}
