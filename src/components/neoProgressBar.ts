import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { progressBarStyles} from './styles/progressBar.style'

@customElement('neo-progressbar')
export class NeoProgressBar extends LitElement {

    @property()
    value:number;

    static get styles() { return [progressBarStyles]}
    render(){
        return html`
            <div class="progressBar">
                <div class="progressBarLine" style="width:${this.value}%" ></div>
            </div>
        `
    }
}