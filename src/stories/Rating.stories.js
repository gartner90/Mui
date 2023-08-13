import Ratingf from "../components/Rating"

export default {
  title: "Components/Rating",
  component: Ratingf,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Ratingf {...args} />

export const primary = Template.bind({})
primary.args = {
  value: 3,
}
