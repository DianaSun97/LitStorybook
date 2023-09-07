import "../../../../../assets/css/cards.css"
import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Cards / Card',
    argTypes: {
        icons: { control: {type: 'select'}, options: ['Calendar-Month','Person-3-Default-Filled','Calendar-Week','Person-3-Default-Filled','Edit-Clipboard'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        layout: { control: {type: 'select'}, options: ['layout-row-between','layout-row-start','layout-row-end'] },
        text: { control: {type: 'text'}},
        textTableRow: { control: {type: 'text'}},
        textTableHeader: { control: {type: 'text'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`<section class="tables">
        <div class="table__header margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} ${args.layout}">
            <p class="layout-row-start">${args.text}</p>
            <div class="layout-row-end"> 
                <i class="icon-${args.icons}"></i>
                <i class="icon-${args.icons}"></i>
                <i class="icon-${args.icons}"></i>
            </div>
        </div>
        <div class="">
            <table class="table table--responsive">
                <thead>
                <tr class="text-left">
                    <th>${args.textTableHeader}</th>
                    <th>${args.textTableHeader}</th>
                </tr>
                </thead>
                <tbody>
                <tr cass="row-table"l>
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                </tr>
                <tr class="row-table">
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                    <td data-title="${args.textTableHeader}">${args.textTableRow}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>`
}

export const CardsTable = Template.bind({});
CardsTable .args = {
    padding: '16',
    text: 'Lorem ipsum',
    textTableRow: 'Lorem ipsum',
    icons: 'Calendar-Month',
    textTableHeader: 'Lorem ipsum'
};