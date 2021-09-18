import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { checkboxStyles} from './styles/checkbox.style'

@customElement('neo-checkbox')
export class NeoCheckbox extends LitElement {

    
    @property()
    private _checked : boolean  =false;

    static get styles() {return checkboxStyles}
    get checked() { return this._checked}

    render(){
        return  html`
        <label class="checkbox">
            <span class="checkbox__input">
                    <input @change=${this.updateValue} type="checkbox" class="checkbox_hid" name="checkbox">
                    <span class="checkbox__control">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='-3 -3 30 30' aria-hidden="true" focusable="false">
                            <path  fill='none' stroke='rgb(69, 209, 155)' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                    </span>
            </span>
        </label>
        `
    }

    updateValue(e: Event){
        var input = e.target as HTMLInputElement;
        this._checked = input.checked;
    }

}