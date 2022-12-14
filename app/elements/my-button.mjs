/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function MyButton({ html }){
  return html`
    <style>
      :host {
        display: block;
      }
      :host button {
        padding: 0.5rem;
        background-color: var(--primary-500);
        color: var(--light);
        border-radius: 0.5rem;
      }
    </style>

    <button>
      <slot></slot>
    </button>

    <script type="module">
      import { toast } from '/_static/bundles/toast.mjs'

      class MyButton extends HTMLElement {
        constructor() {
          super()
          this.button = this.querySelector('button')
          this.count = 1

          this.button.addEventListener('click', (e) => {
            toast('Cheers! ' + this.count++)
          })
        }
      }

      customElements.define('my-button', MyButton)
    </script>
  `
}
