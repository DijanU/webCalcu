type DisplayProps = {
  value: string | number
  secondary?: string
}

export function Display({ value, secondary }: DisplayProps) {
  return (
    <div className="display-container">
      <div className="display-secondary">{secondary}</div>
      <div className="display-main">{value || "0"}</div>
    </div>
  )
}

