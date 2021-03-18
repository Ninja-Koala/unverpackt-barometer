# Unverpackt Siegen Finanzierungsbarometer Webseite

## Webseite bauen:

* Repo klonen: `git clone --recurse-submodules https://github.com/Ninja-Koala/unverpackt-barometer.git`
* hugo installieren
* npm installieren
* `npm install postcss-cli`
* `npm install autoprefixer`
* In der `config.toml` den Wert `baseURL` richtig setzen
* `hugo -D`

Ergebnis ist der `public` Ordner, der die statische Webseite enthält.
Dort befindet sich die Datei `funding-status.min.js`, darin kann die Variable
`funding_status` auf den aktuellen Finanzierungswert gesetzt werden.
