import Check from "../components/Checkbox"

export default {
  title: "Components/Checkbox",
  component: Check,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Check {...args} />

export const primary = Template.bind({})
primary.args = {
  label: "Label for checkbox 1",
  size: "small",
  color: "primary",
}

export const secondary = Template.bind({})
secondary.args = {
  label: "Label for checkbox 2",
  size: "medium",
  color: "secondary",
}

export const danger = Template.bind({})
danger.args = {
  label: "Label for checkbox 3",
  size: "large",
  color: "error",
}
