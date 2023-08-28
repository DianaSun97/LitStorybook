import "../../../../../assets/css/_style.css"
import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Components / Button Joined',
    argTypes: {
        margin: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        left: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        right: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        top: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        padding: { control: {type: 'select'}, options: ['0', '2', '4', '8', '16', '18', '20', '24', '32', '36', '48', '64'] },
        text: { control: {type: 'text'}},
        link: { control: {type: 'text'}},
    },
    parameters: {},
};

const Template = (args) => {
    return html`
      <ul class="periods margin-${args.margin} margin-left-${args.left} margin-top-${args.top}  margin-right-${args.right} padding-${args.padding}">
        <li>
            <a href="${args.link}"  class="active">${args.text} </a>
        </li>
        <li>
            <a href="${args.link}">Weekly</a>
        </li>
        <li>
            <a href="${args.link}">Monthly</a>
        </li>
        <li>
            <a href="${args.link}">Yearly</a>
        </li>
    </ul>`
}


export const ButtonJoined = Template.bind({});
ButtonJoined.args = {
    text: 'Primary button',
    link: 'Test/link'
};

