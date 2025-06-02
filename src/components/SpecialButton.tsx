type SpecialButtonProps = {
  symbol: string
  onClick: () => void
  extraClass?: string 
}

export function SpecialButton({ symbol, onClick, extraClass = "" }: SpecialButtonProps) {
  return (
    <button className={`btn ${extraClass}`} onClick={onClick}>
      {symbol}
    </button>
  )
}