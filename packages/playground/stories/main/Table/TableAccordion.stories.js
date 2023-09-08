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
            <script>
                new document.TableAccordion();
            </script>
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
                <tr class="expandable-row" style="display: none;">
                <td>
                    <div class="table__header  layout-row-between margin- margin-top-  margin-right-8 padding-8 ">
                        <i class="layout-row-between icon-Alert-Circle"><p class="text-small margin-left-8">
                            A22388512019999 </p></i>
                        <li class="badge badge-- badge--small">Lorem ipsum</li>
                        <div class="layout-row-between margin-right-8">
                            <p class="text-small margin-right-4">€1998.04</p>
                        </div>
                    </div>
                </td>

                    <td>
                        <div class="layout-row-end">
                            <li class="badge badge--secondary badge--small">Test Lorem</li>
                        </div>
                    </td>
                </tr>
                <tr class="row-table">
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                </tr>
                <tr class="expandable-row" style="display: none;">
                </tr>
                </tbody>
            </table>
        </div>`
}


export const Simple = Template.bind({});
Simple.args = {
    text: 'Lorem ipsum',
    textTableRow: 'Lorem ipsum',
    textTableHeader: 'Lorem ipsum'
};

