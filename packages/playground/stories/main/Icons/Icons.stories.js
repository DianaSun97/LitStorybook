import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Icons',
    argTypes: {
        type: { control: {type: 'select'}, options: ['Calendar-Month','Person-3-Default-Filled','Calendar-Week','Person-3-Default-Filled','Edit-Clipboard','Alert-Circle'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
    },
    parameters: {},
};


const Template = (args) => {
    return html`
    <i class="icon-${args.type} margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}"></i>`
}

export const Icons = Template.bind({});
Icons.args = {
    type: 'Calendar-Week',
};