import "../../../../../assets/css/datepicker.css"
import "./Datepicker";
import {html} from "lit";


export default {
    title: 'Datepicker / Datepicker',
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
    return html`
        <script>
            new document.Datepicker();
        </script>
         <input type="text" id="week_start" value="mon">
        <input 
            type="date" 
            id="selectedDate" 
            data-source=".picker1">

        <div 
            class="picker1" 
            data-date="#selectedDate" 
            data-weekstart="#week_start">
        </div>`
}


export const Simple = Template.bind({});
Simple.args = {
    text: 'Lorem ipsum',
    textTableRow: 'Lorem ipsum',
    textTableHeader: 'Lorem ipsum'
};
