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
        value: {type: String},

        _isOpen: {state: true, type: Boolean}
    };
    static styles = css`
    :host {
    }
    
    @font-face {
      font-family: "erply-iconfont";
      src: url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.eot?bm9age");
      src: url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.eot?bm9age#iefix") format("embedded-opentype"), url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.woff2?bm9age") format("woff2"), url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.ttf?bm9age") format("truetype"), url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.woff?bm9age") format("woff"), url("https://assets.erply.com/global/fonts/erply-iconfont/erply-iconfont.svg?bm9age#erply-iconfont") format("svg");
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }
    [class^=icon-], [class*=" icon-"] {
      /* use !important to prevent issues with browser extensions that change fonts */
      font-family: "erply-iconfont", serif !important;
      speak: never;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      font-size: large;
      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-Close:before {
      content: "\\e971";
    }
    .icon-Chevron-Up-Closed:before {
      content: "\\e969";
    }
    .icon-Chevron-Down-Closed:before {
      content: "\\e950";
    }
    
    .badges {
        display: flex;
        margin-left: 0;
        margin-right: 0;
        margin-right: 16px;
        height: 33px;
        width: 100%;
        font-weight: normal;
        overflow: hidden;  
    }
    .badges-and-close {
        display: flex;
        border: 1px solid rgb(191, 203, 217);
        border-radius: 5px;
        box-shadow: none;
        background: rgb(255, 255, 255);
        cursor: pointer;
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
    
    .button{
        border: 0;
        border-radius: 5px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        transition: opacity 0.2s ease-in-out;
        white-space: nowrap;
        background-color: transparent;
        color: #333333;
        font-size: 14px;
        padding: 0;
    }
    
    .dropdown {
        position: absolute;
        z-index: 100;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(191, 203, 217);
        border-style: solid;
        border-width: 1px;
        padding: 4px;
    }
    
    .open-close {
        font-size: 24px;
    }
    
    .hidden {
        display: none;
    }
    
    .form {
        display: none;
    }
    .button--close {
        font-size: 16px;
        color: gray;
        margin-left: 4px;
        margin-right: 4px;
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
        this.value = '';
        this._isOpen = false;
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.value !== '') {
            this.value.split(',').forEach((v) => {
                const opt = this._optionsRaw.find((o) => o.value === v);
                if (opt) {
                    opt.selected = true;
                }
            })
        }
    }

    get _optionsRaw() {
        return [...this.children].filter((e) => e.localName === 'option');
    }

    get _options() {
        return this._optionsRaw.map((e) => ({value: e.value, title: e.innerText, selected: e.selected}));
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
        this._optionsRaw.forEach((opt) => {
            opt.selected = value;
        });
        this._updateForm();
        this.requestUpdate();
    }
    _remove(e) {
        const name = e.target.getAttribute('data-value');
        this._optionsRaw.find((opt) => opt.value === name).selected = false;
        this._updateForm();
        this.requestUpdate();
    }
    _checked(e) {
        const name = e.target.getAttribute('data-value');
        const value = e.target.checked;
        this._optionsRaw.find((opt) => opt.value === name).selected = value;
        this._updateForm();
        this.requestUpdate();
    }

    render() {
        const selected = this._options.filter((o) => o.selected);
        return html`
            <div>
                <div class="badges-and-close">
                    <div class="badges">
                        ${selected.map((opt) =>
                                html`<div class="badge">${opt.title}<button class="button button--close icon-Close" data-value="${opt.value}" @click="${this._remove}"></button></div>`
                        )}
                    </div>
                    <button class="open-close button icon-Chevron-${this._isOpen ? 'Up' : 'Down'}-Closed" @click="${this._openOrClose}"></button>
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
                                <input id="${id}" type="checkbox" data-value="${opt.value}" @click="${this._checked}" .checked="${opt.selected}"/>
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
