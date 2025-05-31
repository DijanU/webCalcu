// useDisplayValue.ts
import { useEffect, useState } from 'react'

export function useDisplayValue(operable: number, result: number, operator: string) {
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (operator !== "") {
      if (operable > 999999999) {
        setDisplayValue("ERROR")
      } else {
        setDisplayValue(operable.toString().slice(0, 9))
      }
    } else {
      if (result > 999999999 || result < -99999999) {
        setDisplayValue("ERROR")
      } else {
        setDisplayValue(result.toString().slice(0, 9))
      }
    }
  }, [operable, result, operator])

  return displayValue
}
