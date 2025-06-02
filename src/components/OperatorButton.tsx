type OperatorButtonProps = {
  symbol: string
  onClick: () => void
}

export function OperatorButton({ symbol, onClick }: OperatorButtonProps) {
  return (
    <button className="btn btn-operator" onClick={onClick}>
      {symbol}
    </button>
  )
}