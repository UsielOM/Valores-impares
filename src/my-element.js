import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {


    static get properties() {
        return {
            value: {
                hasChanged(newVal, oldVal) {
                    const hasChanged = newVal % 2 == 1;
                    console.log(`${newVal}, ${oldVal}, ${hasChanged}`);
                    return hasChanged;
                }
            }
        };
    }
    constructor() {
        super();
        this.value = 1;
    }

    render() {
        return html `
        <p>${this.value}</p>
        <button @click="${this.nuevoValor}">Nuevo valor </button>
        `;
    }

    nuevoValor() {
        this.value = Math.floor(Math.random() * 100);
    }
}
customElements.define('my-element', MyElement);