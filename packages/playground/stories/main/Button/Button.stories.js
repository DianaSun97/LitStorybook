import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Button',
    argTypes: {
        type: { control: {type: 'select'}, options: ['primary', 'secondary', 'green', 'navigation', 'outlined', 'transparent', 'regular'] },
        size: { control: {type: 'select'}, options: ['primary', 'big', 'small'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        text: { control: {type: 'text'}},
    },
    parameters: {},
};

const Template = (args) => {
    return html`<button class="button  button--${args.type}   margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} button--${args.size}">${args.text}</button>`
}


export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Primary button'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    text: 'Secondary button'
};
