import type { Meta, StoryObj } from "@storybook/react"
import { SpecialButton } from "../components/SpecialButton"

const meta: Meta<typeof SpecialButton> = {
  title: "Components/SpecialButton",
  component: SpecialButton,
}
export default meta

type Story = StoryObj<typeof SpecialButton>

export const Equals: Story = {
  args: {
    symbol: "=",
    onClick: () => alert("Calculated!"),
    extraClass: "btn-equals",
  },
}

