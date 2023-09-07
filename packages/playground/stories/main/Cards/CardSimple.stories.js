import "../../../../../assets/css/cards.css"
import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Cards / CardSimple',
    argTypes: {
        icons: { control: {type: 'select'}, options: ['Calendar-Month','Person-3-Default-Filled','Calendar-Week','Person-3-Default-Filled','Edit-Clipboard','Alert-Circle'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        layout: { control: {type: 'select'}, options: ['layout-row-between','layout-row-start','layout-row-end'] },
        text: { control: {type: 'text'}},
        textBadges: { control: {type: 'text'}},
        sizeText: { control: {type: 'select'}, options: ['huge','big','medium','label','small'] },
        typeBadges: { control: {type: 'select'}, options: ['primary', 'secondary', 'dark', 'success', 'warning', 'error'] },

    },
    parameters: {},
};


const Template = (args) => {
    return html`<section class="tables">
        <div class="table__header   margin-${args.margin} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} ${args.layout}">
            <i class="layout-row-start icon-${args.icons} column"><p class="text-${args.sizeText} margin-left-${args.left}">${args.text}</p></i>
            <div class="layout-row-end">
                <li class="badge badge--${args.typeBadges} badge--small">${args.textBadges}</li>
            </div>
        </div>
    </section>`
}

export const CardsTable = Template.bind({});
CardsTable .args = {
    padding: '8',
    left: '8',
    text: 'A22388512019999 ',
    textBadges: 'Lorem ipsum',
    icons: 'Alert-Circle',
    sizeText:'small',
};
