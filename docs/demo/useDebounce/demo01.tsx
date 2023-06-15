import React from 'react'
import { useDebounce } from 'lucky-usehooks'

export default () => {
  useDebounce(() => {
    console.log(123)
  }, 2000)

  return (
    <div></div>
  )
}
