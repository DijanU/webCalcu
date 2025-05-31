import { useEffect, useState } from "react"
import { useDisplayValue } from "../hooks/useDisplayValue"
import "../styles/calculator.css"
import { operate } from "../utils/operate"


function Calculator() {
  const [result, setResult] = useState(0)
  const [operator, setOperator] = useState("")
  const [operable, setOperable] = useState(0)
  const [show, setShow] = useState("")


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
        <div className="display-container">
          <div className="display-secondary">{operator && `${result} ${operator} ${operable || ""}`}</div>
          <div className="display-main">{displayValue || "0"}</div>
        </div>

        <div className="calculator-grid">
          <button
            className="btn btn-function btn-clear"
            onClick={() => {
              setOperator(() => "")
              setResult(0)
              setOperable(0)
            }}
          >
            AC
          </button>
          <button className="btn btn-function" onClick={() => setOperator(() => "**")}>
            x²
          </button>
          <button className="btn btn-function" onClick={() => setOperator(() => "sqrt")}>
            √
          </button>
          <button className="btn btn-operator" onClick={() => setOperator(() => "/")}>
            ÷
          </button>

          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(7)
            }}
          >
            7
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(8)
            }}
          >
            8
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(9)
            }}
          >
            9
          </button>
          <button className="btn btn-operator" onClick={() => setOperator(() => "*")}>
            ×
          </button>

          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(4)
            }}
          >
            4
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(5)
            }}
          >
            5
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(6)
            }}
          >
            6
          </button>
          <button className="btn btn-operator" onClick={() => setOperator(() => "-")}>
            −
          </button>

          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(1)
            }}
          >
            1
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(2)
            }}
          >
            2
          </button>
          <button
            className="btn btn-number"
            onClick={() => {
              nbutton(3)
            }}
          >
            3
          </button>
          <button className="btn btn-operator" onClick={() => setOperator(() => "+")}>
            +
          </button>

          <button
            className="btn btn-number btn-zero"
            onClick={() => {
              nbutton(0)
            }}
          >
            0
          </button>
          <button className="btn btn-function" onClick={() => setOperator(() => "%")}>
            %
          </button>
          <button className="btn btn-function" onClick={() => setOperator(() => "+/-")}>
            ±
          </button>
          <button
            className="btn btn-equals"
            onClick={() => {
              setResult(operate(operable, operator, result))
              setOperable(0)
              setOperator("")
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
