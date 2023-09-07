import "../../../../../assets/css/cards.css"
import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Cards / CardPrice',
    argTypes: {
        icons: { control: {type: 'select'}, options: ['Calendar-Month','Person-3-Default-Filled','Calendar-Week','Person-3-Default-Filled','Edit-Clipboard','Alert-Circle'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        layout: { control: {type: 'select'}, options: ['layout-row-between','layout-row-start','layout-row-end'] },
        text: { control: {type: 'text'}},
        textTableRow: { control: {type: 'text'}},
        sizeText: { control: {type: 'select'}, options: ['huge','big','medium','label','small'] },
        textTableHeader: { control: {type: 'text'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`<section class="tables">
        <div class="table__header margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} ${args.layout}">
            <i class="layout-row-start icon-${args.icons} column"><p class="text-${args.sizeText}">${args.text}</p></i>
       
            <div class="layout-row-end"> 
              
            </div>
        </div>
    </section>`
}

export const CardsTable = Template.bind({});
CardsTable .args = {
    padding: '8',
    text: 'A22388512019999 ',
    textTableRow: 'Lorem ipsum',
    icons: 'Alert-Circle',
    sizeText:'small',
    textTableHeader: 'Lorem ipsum'
};