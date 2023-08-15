import Alerts from "../components/Alerts"

export default {
  title: "Components/Alerts",
  component: Alerts,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Alerts {...args} />

export const primary = Template.bind({})
primary.args = {
  variant: "filled",
}
