import { Display } from "../components/Display"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Display> = {
  title: "Components/Display",
  component: Display,
}
export default meta

type Story = StoryObj<typeof Display>

export const Default: Story = {
  args: {
    value: "12345",
    secondary: "100 + 2345",
  },
}
