import {LitElement, html,css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { buttonStyles} from './styles/button.style'

@customElement('neo-container')
export class NeoContainer extends LitElement {
    static get styles() { return css`
        .neoContainer{
            min-width:100px;
            min-height:100px;
            border-radius:20px;
            box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, 0.25),
   -3px -3px 12px 0 rgba(255, 255, 255, 0.3);
            background: linear-gradient(-45deg, rgba(104, 104, 104, 0.6);, rgba(255,255,255,0.25));
        }
    `}

    @property()
    public width:string;

    @property()
    public height: string;

    render(){
        return html`
            <div  style="width:${this.width} ;height:${this.height}"  class="neoContainer">
                <slot></slot>
            </div>
        `
    }
}