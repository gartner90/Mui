import Buttonf from "../components/Button"

export default {
  title: "Components/Button",
  component: Buttonf,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Buttonf {...args} />

export const primary = Template.bind({})
primary.args = {
  label: "Button Primary",
  variant: "contained",
  size: "medium",
  color: "primary",
}

export const secondary = Template.bind({})
secondary.args = {
  label: "Button Secondary",
  variant: "contained",
  size: "small",
  color: "secondary",
}

export const danger = Template.bind({})
danger.args = {
  label: "Button Danger",
  variant: "contained",
  size: "large",
  color: "error",
}
