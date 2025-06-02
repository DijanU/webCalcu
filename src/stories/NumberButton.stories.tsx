import { NumberButton } from "../components/NumberButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof NumberButton> = {
  title: "Components/NumberButton",
  component: NumberButton,
}
export default meta

type Story = StoryObj<typeof NumberButton>

export const Default: Story = {
  args: {
    n: 5,
    onClick: (n) => alert(`Pressed ${n}`),
  },
}

