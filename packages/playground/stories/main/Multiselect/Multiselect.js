import {css, html, nothing, LitElement} from 'lit';

export class ErplyMultiselect extends LitElement {
    static formAssociated = true;
    static properties = {
        name: {type: String, reflect: true},
        required: {type: Boolean, reflect: true},
        disabled: {type: Boolean},
        readonly: {type: Boolean},
        placeholder: {type: String},
        join: {type: Boolean},

        _isOpen: {state: true, type: Boolean},
        _selected: {
            state: true,
            type: Object,
        }
    };
    static styles = css`
    :host {
    }
    
    erp-multiselect{
        border-style: solid;
        border-width: 1px;
        padding: 4px;
    }
    
    .badges {
        margin-left: 0px;
        margin-right: 0;
        height: 33px;
        width: 100%;
        background: rgb(255, 255, 255);
        display: block;
        margin-right: 16px;
        position: relative;
        cursor: pointer;
        border: 1px solid rgb(191, 203, 217);
         border-radius: 5px;
        box-shadow: none;
        font-weight: normal;
       overflow: hidden;
      
        
          
    }
    
    .badge {
       display: inline-block;
        background-color: rgb(236, 239, 241);
        border-radius: 3px;
        color: rgba(29, 36, 51, 0.8);
        margin: 2px;
        margin-bottom: 2px;
        line-height: 1.2em;
          padding-bottom: 5px;
          padding-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
}
    }
    
    .dropdown {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(191, 203, 217);
        border-style: solid;
        border-width: 1px;
        padding: 4px;
    }
    
    .open-close {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
    }
    
    .hidden {
        display: none;
    }
    
    .form {
        display: none;
    }
    .button{
        border: 0;
        border-radius: 5px;
        color: #fff;
        display: inline-block;
        margin-right: 8px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        transition: opacity 0.2s ease-in-out;
        white-space: nowrap;
    }
     .button--transparent{
       background-color: transparent;
        color: #333333;
        font-size: 14px;
        padding: 0;
    }
  `;

    constructor() {
        super();
        this._internals = this.attachInternals();
        this.name = name;
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.placeholder = '';
        this.join = false;
        this._isOpen = false;
        this._selected = {};
    }

    get _options() {
        return [...this.children].filter((e) => e.localName === 'option').map((e) => ({value: e.value, title: e.innerText, selected: !!this._selected[e.value]}));
    }

    _openOrClose() {
        this._isOpen = !this._isOpen;
    }

    _updateForm() {
        const selected = this._options.filter((o) => o.selected);
        const form = new FormData();
        if (this.join) {
            form.append(this.name, selected.map((o) => o.value).join(','));
        } else {
            selected.forEach((o) => {
                form.append(this.name, o.value);
            })
        }
        this._internals.setFormValue(form);
    }

    _selectAll(e) {
        const value = e.target.checked;
        if (value) {
            this._options.forEach((opt) => {
                if (!opt.selected) {
                    this._selected[opt.value] = true;
                }
            })
        } else {
            this._selected = {};
        }
        this._updateForm()
        this.requestUpdate();
    }
    _remove(e) {
        const name = e.target.getAttribute('data-value');
        delete this._selected[name];
        this._updateForm()
        this.requestUpdate();
    }
    _checked(e) {
        const name = e.target.getAttribute('data-value');
        const value = e.target.checked;
        if (value) {
            this._selected[name] = true;
        } else {
            delete this._selected[name];
        }
        this._updateForm()
        this.requestUpdate();
    }

    render() {
        const selected = this._options.filter((o) => o.selected);
        return html`
            <div>
                <div class="badges select select-fullWidth">
                    ${selected.map((opt) =>
            html`<div class="badge">${opt.title}<button class="button button--transparent" style="font-size:16px;color:gray" data-value="${opt.value}" @click="${this._remove}">x</button></div>`
        )}
                    <button class="open-close button button--transparent" @click="${this._openOrClose}">${this._isOpen ? '^' : 'v'}</button>
                </div>
                <div class="dropdown ${!this._isOpen ? 'hidden' : ''}">
                    <div>
                        <input id="all" type="checkbox" @change="${this._selectAll}"/>
                        <label for="all">Select all</label>
                    </div>
                    ${this._options.map((opt) => {
            const id = `${this.name}-${opt.value}`;
            return html`
                            <div>
                                <input id="${id}" type="checkbox" data-value="${opt.value}" @click="${this._checked}" .checked="${!!this._selected[opt.value]}"/>
                                <label for="${id}">${opt.title}</label>
                            </div>
                        `
        })}
                </div>
            </div>
        `
    }
}

customElements.define('erp-multiselect', ErplyMultiselect);
