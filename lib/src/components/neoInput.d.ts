import { LitElement } from 'lit';
export declare class NeoInput extends LitElement {
    placeholder: string;
    private _value;
    static get styles(): import("lit").CSSResultGroup;
    get value(): string;
    render(): import("lit-html").TemplateResult<1>;
    updateValue(e: Event): void;
}
