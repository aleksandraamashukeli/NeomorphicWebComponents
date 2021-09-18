import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { dropDownStyles} from './styles/dropDown.style'


class DropDownOption{
    public key :number;
    public value:any;
}



@customElement('neo-dropdown')
export class NeoDropDown extends LitElement {

    static get styles(){ return dropDownStyles}


    @property()
    public options :DropDownOption[];

    title:string;

    private _selected:DropDownOption = {key:null, value:null};
 
    get selected(){ return this._selected;}


    render(){
        return html`
            <div class="neoDropDown">
                <div class="neoDropDownBtn">
                       <slot></slot>
                </div>
                <div class="neoDropDownList" @click=${this.updateValue}>
                        ${this.options.map(e => 
                            html`<div class="neoDropDownOption "  key=${e.key}>${e.value}</div>`    
                        )} 
                </div>
            </div>
        `
    }
    updateValue(e:Event){
        var option = e.target as HTMLElement
        var key =   parseInt(option.getAttribute("key"))
        
        var selectedOption =this.options.filter(o => o.key == key)[0];
        this.shadowRoot.querySelector(".neoDropDownBtn").innerHTML = selectedOption.value;
        this._selected = selectedOption;
    }
}