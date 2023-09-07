import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Badges',
    argTypes: {
        type: { control: {type: 'select'}, options: ['primary', 'secondary', 'dark', 'success', 'warning', 'error'] },
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
    return html`<ul>
    <li class="badge badge--${args.type} badge--${args.size} margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}">${args.text}</li>
</ul>`
}


export const Primary = Template.bind({});
Primary.args = {
    type: 'outlined',
    text: 'Badges'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    text: 'Secondary button'
};
