import "../../../../../assets/css/_style.css"
import {html} from "lit";

export default {
    title: 'Components / Box',
    argTypes: {
        color: { control: {type: 'select'}, options: ['gray','primary','red','green'] },
        align: { control: {type: 'select'}, options: ['center','right','left'] },
        layout: { control: {type: 'select'}, options: ['layout-row-between','layout-row-start','layout-row-end'] },
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        size: { control: {type: 'select'}, options: ['huge','big','medium','label','small'] },
        type: { control: {type: 'select'}, options: ['uppercase','lineThrough','italic','underline'] },
        background: { control: {type: 'select'}, options: ['primary','dark','secondary','white', 'success', 'info', 'warning', 'error', 'error-bg', 'error-default', 'error-pressed',
                'gray', 'gray-light', 'danger-background-100', 'danger-default-700', 'danger-hover-800', 'danger-pressed-900', 'warning-background-100', 'warning-default-700', 'warning-hover-800',
                'primary-hover-800', 'primary-pressed-900', 'primary-1100',] },
        text: { control: {type: 'text'}},

    },
    parameters: {},
};


const Template = (args) => {
    return html`
        <div class="section bg-${args.background}">
            <div class="container text-${args.align}">
                <h3 class="text-${args.size}    margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} text-${args.color} text-${args.type}  text-withSubtitle">${args.text}</h3>
                <h4 class="text-${args.size}   margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding} text-${args.color} text-${args.type}  m-none">${args.text}</h4>
            </div>
        </div>`
}

export const Navigation = Template.bind({});
Navigation.args = {
    color: 'primary',
    background: 'secondary',
    align: 'center',
    size: 'big',
    text: 'Your label',
    buttonType: 'navigation',
    layout:'layout-row-start',
    titleBar:  'navigation',
    padding: '8'
};