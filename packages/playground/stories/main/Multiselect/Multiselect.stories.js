import {html, nothing} from "lit";
import "../../../../components/src/Multiselect";

export default {
    title: 'Components / Multiselect',
    argTypes: {
        name: { control: {type: 'text'}},
        disabled: { control: {type: 'boolean'}},
        readonly: { control: {type: 'boolean'}},
        placeholder: { control: {type: 'text'}},
        join: { control: {type: 'boolean'}},
    },
    parameters: {},
};

const Template = (args) => {
    return html`<form method="post" style="padding-bottom: 70px;">
    <erp-multiselect
            placeholder="${args.placeholder}"
            ?join="${args.join}"
            name="${args.name}"
            ?disabled="${args.disabled}"
            ?readonly="${args.readonly}"
            value="${args.join ? '2' : ''}">
        <option value="1">One</option>
        <option value="2" ?selected="${!args.join}">Two</option>
        <option value="3">Three</option>
    </erp-multiselect>
</form>`
}


export const FormArray = Template.bind({});
FormArray.args = {
    name: 'filter',
    disabled: false,
    readonly: false,
    placeholder: 'Select an option',
    join: false,
};


export const FormField = Template.bind({});
FormField.args = {
    name: 'filter',
    disabled: false,
    readonly: false,
    placeholder: 'Select an option',
    join: true,
};