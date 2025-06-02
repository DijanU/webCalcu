import { OperatorButton } from "../components/OperatorButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof OperatorButton> = {
  title: "Components/OperatorButton",
  component: OperatorButton,
}
export default meta

type Story = StoryObj<typeof OperatorButton>

export const Plus: Story = {
  args: {
    symbol: "+",
    onClick: () => alert("Pressed +"),
  },
}

