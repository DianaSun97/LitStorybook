import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Navigation',
    argTypes: {
        layout: { control: {type: 'select'}, options: ['layout-row-between','layout-row-start','layout-row-end'] },
        buttonType: { control: {type: 'select'}, options: ['primary', 'secondary', 'green', 'navigation', 'outlined', 'transparent', 'regular'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        id: { control: {type: 'text'}},
        active: { control: {type: 'boolean'}},
        href: { control: {type: 'text'}},
        text: { control: {type: 'text'}},
        titleBar: { control: {type: 'text'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`
        <div id="${args.id}" class="navigation ${args.layout} margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}">
            <div class="tab__head">
                <div class="${args.layout}">
                    <a class="button button--${args.buttonType} ${ args.active ? 'active' : ''}"
                       href="./${args.href}">${args.text}</a>
                    <a class="button button--${args.buttonType} ${ args.active ? 'active' : ''}"
                       href="./${args.href}">${args.text}</a>
                    <a class="button button--${args.buttonType} ${ args.active ? 'active' : ''}"
                       href="./${args.href}">${args.text}</a>
                </div>
            </div>
        </div>
    `
}

export const Navigation = Template.bind({});
Navigation.args = {
    active: false,
    text: 'Your label',
    buttonType: 'navigation',
    layout:'layout-row-start',
    titleBar:  'navigation',
};