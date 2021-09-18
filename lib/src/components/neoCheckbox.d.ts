import { LitElement } from 'lit';
export declare class NeoCheckbox extends LitElement {
    private _checked;
    static get styles(): import("lit").CSSResultGroup;
    get checked(): boolean;
    render(): import("lit-html").TemplateResult<1>;
    updateValue(e: Event): void;
}
