import { useEffect, useRef, useState } from 'react'

type Fnc = () => void
const noop = () => {}

const useCountDown = (num: Partial<number>) => {
  const [time, setTime] = useState(num || 0)
  const tickRef = useRef<Fnc>(noop)

  const tick = () => {
    if (time > 0) {
      setTime(time - 1)
    }
  }

  useEffect(() => {
    tickRef.current = tick
  })

  useEffect(() => {
    const timerId = setInterval(() => tickRef.current(), 1000)
    return () => clearInterval(timerId)
  }, [])

  return time
}

export default useCountDown
