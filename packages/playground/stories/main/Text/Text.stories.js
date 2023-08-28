import "../../../../../assets/css/charts.css"
import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Text',
    argTypes: {
        type: { control: {type: 'select'}, options: ['uppercase','lineThrough','italic','underline'] },
        color: { control: {type: 'select'}, options: ['gray','primary','red','green'] },
        size: { control: {type: 'select'}, options: ['huge','big','medium','label','small'] },
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
    return html`
    <p class="text-${args.type} text-${args.color} text-${args.size}  margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}">${args.text}</p>`
}

export const Text = Template.bind({});
Text.args = {
    text: 'Lorem text test'
};