import { LitElement } from 'lit';
declare class DropDownOption {
    key: number;
    value: any;
}
export declare class NeoDropDown extends LitElement {
    static get styles(): import("lit").CSSResultGroup;
    options: DropDownOption[];
    title: string;
    private _selected;
    get selected(): DropDownOption;
    render(): import("lit-html").TemplateResult<1>;
    updateValue(e: Event): void;
}
export {};
