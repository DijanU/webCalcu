export function operate(operable: number, operator: string, result: number) {
  if (operator === "+") {
    return result + operable
  } else if (operator === "-") {
    return result - operable
  } else if (operator === "*") {
    return result * operable
  } else if (operator === "/") {
    return result / operable
  } else if (operator === "**") {
    return result ** operable
  } else if (operator === "sqrt") {
    return Math.sqrt(result)
  } else if (result == 0 && operable != 0) {
    return operable} 
    else if (operator === "%") {return result % operable} 
    else if (operator === "+/-") {return -result}
  return result
}