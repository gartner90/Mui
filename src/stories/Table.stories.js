import EnhancedTable from "../components/Table"

export default {
  title: "Components/Table",
  component: EnhancedTable,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <EnhancedTable {...args} />

export const primary = Template.bind({})
