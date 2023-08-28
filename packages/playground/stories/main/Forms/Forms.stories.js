import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Forms',
    argTypes: {
        type: { control: {type: 'select'}, options: ['has-error','has-success',] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        placeholder: { control: {type: 'text'}},
        label: { control: {type: 'text'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`
    <label class="label">${args.label}</label>
    <div class="input  input-fullWidth  ${args.type} margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}">
        <input  placeholder=${args.placeholder} type="text"/>
    </div>`
}

export const Forms = Template.bind({});
Forms.args = {
    placeholder: 'test',
    label: 'Your label'
};