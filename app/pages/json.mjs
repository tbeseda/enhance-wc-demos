export default function JsonPage({html, state: {store}}){
  return html`
    <main class="demo font-sans pt4">
      <json-viewer class="block mb2 pl2 pr2 pt-2 pb-2">
        ${JSON.stringify(store)}
      </json-viewer>

      <p class="leading2 mb1">
        👆 This is <a href="https://www.webcomponents.org/element/@alenaksu/json-viewer">a custom element, <code>&ltjson-viewer&gt</code></a>,
        provided entirely by an external source!
      </p>

      <p class="leading2 mb1">
        The JSON data is fetched and hydrated by an Enhance API middleware 🎉
      </p>

      <p class="leading2 mb1">
        <code>json-viewer</code> is imported from esm.sh, but it could be installed as an npm dependency and bundled with
        Enhance's <code>@bundles</code> settings.
      </p>

      <p class="leading2">
        <a href="/">Home</a>
      </p>
    </main>

    <script type="module">
      import 'https://esm.sh/@alenaksu/json-viewer@1.0.1'

      const viewer = document.querySelector('json-viewer')
      window.addEventListener('DOMContentLoaded', () => {
        viewer.expand('bills')
      });
    </script>
  `
}
