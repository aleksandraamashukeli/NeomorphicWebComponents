import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { buttonStyles} from './styles/button.style'

@customElement('neo-button')
export class NeoButton extends LitElement {

    @property()
    color:string;
    
    static get styles() {return buttonStyles}
    render(){
        return html`
            <button>
                <slot></slot>
            </button>
        
        `
    }
} 
