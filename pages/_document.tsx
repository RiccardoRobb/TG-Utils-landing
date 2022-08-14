import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <link href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&family=Roboto&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// font-awesome è utile per le icone social 