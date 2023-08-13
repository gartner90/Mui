import MusicPlayerSlider from "../components/Player"

export default {
  title: "Components/Player",
  component: MusicPlayerSlider,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <MusicPlayerSlider {...args} />

export const primary = Template.bind({})
