# Fonts

The Alibio brand kit uses two paid typefaces. Put the licensed web font files here with these exact names:

| File | Face | Used for |
| --- | --- | --- |
| `TTRamillas-Regular.woff2` | TT Ramillas Regular (400) | Headings |
| `ProximaNova-Regular.woff2` | Proxima Nova Regular (400) | Body text |
| `ProximaNova-Medium.woff2` | Proxima Nova Medium (500) | Buttons, labels, card titles |

Where to get them:

- **TT Ramillas:** a web licence from TypeType (typetype.org). Download the WOFF2 files.
- **Proxima Nova:** a web licence from Mark Simonson Studio, or Adobe Fonts. With Adobe Fonts you get a kit link instead of files: add the kit's `<link rel="stylesheet" href="https://use.typekit.net/<kit-id>.css">` to the `<head>` of `index.html` and keep the `"Proxima Nova"` name in `--font-text` (Adobe Fonts names it `proxima-nova`; add that name to the stack too).

Until the files are here, the page shows Literata and Figtree from Google Fonts, which have similar shapes. Check the hero heading after adding the files: TT Ramillas sets wider than Literata, and the heading must stay within three lines on a phone.
