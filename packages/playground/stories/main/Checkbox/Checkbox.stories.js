import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Checkbox',
    argTypes: {

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
     <div class="radio">
            <input id="radio1" name="radio" type="radio" value=""/>
            <label for="radio1">Radio button 1</label>
        </div>
      `
}

export const Icons = Template.bind({});
Icons.args = {
    type: 'Calendar-Week',
};