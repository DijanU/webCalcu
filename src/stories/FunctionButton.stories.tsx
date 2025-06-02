import { FunctionButton } from "../components/FunctionButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FunctionButton> = {
  title: "Components/FunctionButton",
  component: FunctionButton,
}
export default meta

type Story = StoryObj<typeof FunctionButton>

export const Clear: Story = {
  args: {
    symbol: "AC",
    onClick: () => alert("Cleared"),
  },
}
