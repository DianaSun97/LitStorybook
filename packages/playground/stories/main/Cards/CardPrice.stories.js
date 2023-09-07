import "../../../../../assets/css/cards.css"
import "./quantity";
import "../../../../../assets/css/_style.css"
import "../../../../../assets/css/quantity.css"

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
        textBadges: { control: {type: 'text'}},
        sizeText: { control: {type: 'select'}, options: ['huge','big','medium','label','small'] },
        typeBadges: { control: {type: 'select'}, options: ['primary', 'secondary', 'dark', 'success', 'warning', 'error'] },

    },
    parameters: {},
};


const Template = (args) => {
    return html`
        <section class="tables">
            <div class="table__header  layout-row-between margin-${args.margin} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} ${args.layout}">
                <i class="layout-row-between icon-${args.icons}"><p
                        class="text-${args.sizeText} margin-left-${args.left}">${args.text}</p></i>
                <li class="badge badge--${args.typeBadges} badge--small">${args.textBadges}</li>
                <div class="layout-row-between margin-right-${args.right}">
                    <p class="text-${args.sizeText} margin-right-4">€1998.04</p>
                    
                    <div class="quantity">
                        <a href="#" class="quantity__minus"><span>-</span></a>
                        <input name="quantity" type="text" class="quantity__input" value="1">
                        <a href="#" class="quantity__plus"><span>+</span></a>
                    </div>
                    <i class="layout-row-between icon-${args.icons}"></i>
                </div>
            </div>
        </section>`
}

export const CardsTable = Template.bind({});
CardsTable .args = {
    padding: '8',
    left: '8',
    right: '8',
    text: 'A22388512019999 ',
    textBadges: 'Lorem ipsum',
    icons: 'Alert-Circle',
    sizeText:'small',
};