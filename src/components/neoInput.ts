import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {inputStyles} from './styles/input.style';

@customElement('neo-input')
export class NeoInput extends LitElement {

  @property()
  placeholder:string;

  @property()
  private _value : string ;

  static  get styles() { return  inputStyles};
  get value(){ return this._value}


  render() {
    return html`
      <input type="text" @change=${this.updateValue} value=${this._value} placeholder=${this.placeholder}>
    `;
  }

  updateValue(e: Event){
      var input = e.target as HTMLInputElement;
      this._value = input.value;
  }
}