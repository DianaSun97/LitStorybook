import "../../../../../assets/css/_style.css"
import {html} from "lit";
import "./TableAccordion";

export default {
    title: 'Components / TableAccordion',
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
        <div class="table-container">
        <table class="table table--responsive">
            <thead>
            <tr class="text-left">
                <th>${args.textTableHeader}</th>
                <th>${args.textTableHeader}</th>
            </tr>
            </thead>
            <tbody>
                <tr class="row-table">
                <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
            </tr>
            <tr class="row-table">
                <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
            </tr>
                <tr class="expandable-row" style="display: none;">
                   ${args.textTableRow}
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
}


export const Simple = Template.bind({});
Simple.args = {
    text: 'Lorem ipsum',
    textTableRow: 'Lorem ipsum',
    textTableHeader: 'Lorem ipsum'
};

