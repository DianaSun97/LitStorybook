import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / CheckboxRadio',
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
        <div class="radio margin-${args.margin} margin-left-${args.left} margin-top-${args.top} margin-right-${args.right} padding-${args.padding}" ?disabled="${args.disabled}">
            <input id="radio1" name="radio" type="radio" value=""/>
            <label for="radio1">${args.text}</label>
        </div>
      `
}

export const Icons = Template.bind({});
Icons.args = {
    text: 'Lorem ipsum',
    disabled: false
};