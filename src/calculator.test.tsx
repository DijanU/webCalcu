import { render, fireEvent, screen } from '@testing-library/react'
import Calculator from './components/Calculator'
import { describe, it, expect } from 'vitest'

describe('Calculator UI', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Calculator />)
    expect(getByText('Calculadora Pro')).toBeInTheDocument()
  })

  //tests no triviales
  it('addition is right', () => {
    const { getByText } = render(<Calculator />)

    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))

    const allThrees = screen.getAllByText('3')
    expect(allThrees.length).toBeGreaterThan(1)
  })

  it('mod was done right', () => {
    const {getByText} = render(<Calculator />)

    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('%'))
    fireEvent.click(getByText('9'))
    fireEvent.click(getByText('='))

    const allThrees = screen.getAllByText('3')
    expect(allThrees.length).toBeGreaterThan(1)
    
  })
  it('9 9s is enough', () => {
  const { getByRole } = render(<Calculator />)

  const nineButton = getByRole('button', { name: '9' })

  for (let i = 0; i < 10; i++) {
    fireEvent.click(nineButton)
  }

  const allNines = screen.getAllByText('9')
  expect(allNines.length).not.toBeGreaterThan(10)

  })

  it('ERROR shown', () => {
    const { getByRole, getByText } = render(<Calculator />)

    const nineButton = getByRole('button', { name: '9' })

    for (let i = 0; i < 10; i++) {
      fireEvent.click(nineButton)
    }
    fireEvent.click(getByRole('button', {name:'+'}))
    fireEvent.click(getByRole('button', {name:'1'}))
    fireEvent.click(getByRole('button', {name:'='}))

    expect(getByText('ERROR')).toBeInTheDocument()
  })
it('. is part of the 9char limit', () => {
  const { getByRole, getByText, queryByText } = render(<Calculator />)

  fireEvent.click(getByRole('button', { name: '2' }))
  fireEvent.click(getByRole('button', { name: '2' }))
  fireEvent.click(getByRole('button', { name: '÷' })) 
  fireEvent.click(getByRole('button', { name: '7' }))
  fireEvent.click(getByRole('button', { name: '=' }))  

  expect(getByText('3.1428571')).toBeInTheDocument()
  expect(queryByText('3.14285714')).not.toBeInTheDocument()
})


})

