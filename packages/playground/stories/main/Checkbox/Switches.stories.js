import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Switches',
    argTypes: {

        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        text: { control: {type: 'text'}},
        disabled: { control: {type: 'boolean'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`
        <div class="switches-main b2 margin-${args.margin} margin-left-${args.left} margin-top-${args.top} margin-right-${args.right} padding-${args.padding}" ?disabled="${args.disabled}"  id="button-15">
            <input type="checkbox" class="switches"/>
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
    `
}

export const Icons = Template.bind({});
Icons.args = {
    text: 'Lorem ipsum',
    disabled: false
};