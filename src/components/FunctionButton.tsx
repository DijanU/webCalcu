type FunctionButtonProps = {
  symbol: string
  onClick: () => void
}

export function FunctionButton({ symbol, onClick }: FunctionButtonProps) {
  return (
    <button className="btn btn-function" onClick={onClick}>
      {symbol}
    </button>
  )
}