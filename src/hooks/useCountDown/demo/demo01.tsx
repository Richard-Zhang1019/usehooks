import useCountDown from '../index'

export default () => {
  const num = useCountDown(10)

  return (
    <div>倒计时{num}</div>
  )
}
