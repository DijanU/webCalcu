import { useState } from "react"
import { useDisplayValue } from "../hooks/useDisplayValue"
import "../styles/calculator.css"
import { operate } from "../utils/operate"
import { NumberButton } from './NumberButton'
import { FunctionButton } from "./FunctionButton"
import { OperatorButton } from "./OperatorButton"
import { Display } from './Display'
import { SpecialButton } from "./SpecialButton"


function Calculator() {
  const [result, setResult] = useState(0)
  const [operator, setOperator] = useState("")
  const [operable, setOperable] = useState(0)


  function nbutton(n: number) {
    if (operator === "") {
      if (result < 0) {
        if (result * 10 - n > -100000000) {
          setResult((operable) => operable * 10 - n)
        }
      } else {
        if (result * 10 + n < 1000000000) {
          setResult((operable) => operable * 10 + n)
        }
      }
    } else {
      if (operable * 10 + n < 1000000000) {
        setOperable((operable) => operable * 10 + n)
      }
    }
  }

  const displayValue = useDisplayValue(operable, result, operator)


  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1>Calculadora Pro</h1>
        <p>Mejor que la calculadora del iPhone</p>
      </div>

      <div className="calculator-wrapper">
        <Display
          value={displayValue}
          secondary={operator && `${result} ${operator} ${operable || ""}`}
        />
        <div className="calculator-grid">
        <SpecialButton
          symbol="AC"
          extraClass="btn-function btn-clear"
          onClick={() => {
            setOperator("")
            setResult(0)
            setOperable(0)
          }}
        />
          <FunctionButton symbol="x²" onClick={() => setOperator("**")} />
          <FunctionButton symbol="√" onClick={() => setOperator("sqrt")} />

          <OperatorButton symbol="÷" onClick={() => setOperator("/")} />

          <NumberButton n={7} onClick={nbutton} />
          <NumberButton n={8} onClick={nbutton} />
          <NumberButton n={9} onClick={nbutton} />

          <OperatorButton symbol="×" onClick={() => setOperator("*")} />

          <NumberButton n={4} onClick={nbutton} />
          <NumberButton n={5} onClick={nbutton} />
          <NumberButton n={6} onClick={nbutton} />

          <OperatorButton symbol="−" onClick={() => setOperator("-")} />

          <NumberButton n={1} onClick={nbutton} />
          <NumberButton n={2} onClick={nbutton} />
          <NumberButton n={3} onClick={nbutton} />

          <OperatorButton symbol="+" onClick={() => setOperator("+")} />

          <NumberButton n={0} onClick={nbutton}/>

          <FunctionButton symbol="%" onClick={() => setOperator("%")} />
          <FunctionButton symbol="±" onClick={() => setOperator("+/-")} />
          <SpecialButton
            symbol="="
            extraClass="btn-equals"
            onClick={() => {
              setResult(operate(operable, operator, result))
              setOperable(0)
              setOperator("")
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Calculator