/**
 * @type {import('@enhance/types').EnhanceHeadFn}
 */
export default function Head(){
  return /*html*/`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Enhance 3rd Party WC demos</title>
        <link rel="stylesheet" href="/_static/styles.css">
        <link rel="icon" href="https://fav.farm/🎉" />

        <style>
          main.demo {
            max-width: 48rem;
            margin: 0 auto;
          }

          main.demo a {
            color: var(--primary-700);
            text-decoration: underline;
          }

          ol li {
            list-style-position: inside;
          }

          code {
            font-family: Menlo, Monaco, Consolas, monospace;
            color: var(--muted)
          }
        </style>
  `
}
