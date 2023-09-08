import "../../../../../assets/css/_style.css"
import "../../../../../assets/css/togl.css"
import {html} from "lit";

export default {
    title: 'Components / Togl',
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
        <div class="form-check form-switch">
            <label class="switch" for="addBagPrompt">
                <input type="checkbox"  class="form-input" id="addBagPrompt" name="" value="1" checked >
                <span class="slider round"></span>
            </label>
        </div>
    `
}

export const Icons = Template.bind({});
Icons.args = {
    text: 'Lorem ipsum',
    disabled: false
};