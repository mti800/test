import { useEffect, useState } from "react"

export default function Timer() {
  const [count, setCount] = useState(0)
  
  // faltaba borrar el intervalo .?
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(intervalo);
  }, [])
  
  return (
    <div>
      Seconds passed: {count}
      
    </div>
  )
}
