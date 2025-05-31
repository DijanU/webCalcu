import {describe, it, expect} from 'vitest'

function operate(operable: number, operator: string, result: number){
    if (operator === "+") return result + operable
    else if (operator === "-") return result - operable
    else if (operator === "*") return result * operable
    else if (operator === "/") return result / operable
    else if (operator === "**") return result ** operable
    else if (operator === "sqrt") return Math.sqrt(result)
    else if (result == 0 && operable != 0) return operable
    else if (operator === "%") return result % operable
    else if (operator === "+/-") return -result
    return result
}

describe('operate()', ()=>{
    it('adds correctly', ()=>{
        expect(operate(2, '+', 3)).toBe(5)
    })

    it('does sqrt correctly', () => {
    expect(operate(0, 'sqrt', 16)).toBe(4)
    })

    it('negates correctly', () => {
    expect(operate(0, '+/-', 5)).toBe(-5)
    })
})