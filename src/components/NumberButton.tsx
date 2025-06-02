type NumberButtonProps = {
  n: number
  onClick: (n: number) => void
}

export function NumberButton({ n, onClick }: NumberButtonProps) {
  return (
    <button className="btn btn-number" onClick={() => onClick(n)}>
      {n}
    </button>
  )
}