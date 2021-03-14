# HEMS-Skulpturengarten
> Im Rahmen der Kurse *Darstellendes Spiel* und *Kreatives Schreiben* der Heinrich-Emanuel-Merck-Schule Darmstadt
> sind wir mit unseren Lehrerinnen (Frau Berner und Frau Trieschmann) einen Nachmittag im *Skulpturengarten Darmstadt*
> gewesen und wurden dort von Frau Kuhlmann über das Gelände geführt.

> Wir haben uns von den einzelnen Ausstellungsstücken zu, unter anderem, Texte inspirieren lassen und uns dazu
> entschlossen, diese aufzubereiten und für Interessierte auf dieser Webseite auszustellen.

**Feel free to [start a discussion](https://github.com/SpraxDev/HEMS-Skulpturengarten/discussions)
or to [report a bug](https://github.com/SpraxDev/HEMS-Skulpturengarten/issues)!**

## Projektstruktur
Das Projekt ist grob in 2 Teile aufgeteilt. Der `src/`-Ordner enthält ein kleines Programm, dass dazu dient eine fertige
Webseite mit all ihren benötigten Dateien zu generieren. Dieses kleine Programm ermöglicht mir, den Webseiten-Code sehr
übersichtlicht zu halten und das viele Copy'n Pasten zu vermeiden. Außerdem wird ungenutztes CSS entfernt.

Im Ordner `resources/` befinden sich alle benötigten Dateien der Webseite inklusiver HTML-Templates. Dateien mit einer
bestimmten Dateiendung werden vom oben beschriebenen Programm erkannt und durch
[ejs](https://www.npmjs.com/package/ejs) gejagt.
*ejs* ermöglicht Schreibweisen wie `<%= variable %>`, um JavaScript auszuführen und so dynamisch den Inhalt der
resultierenden Datei zu bestimmen.

## Webseite generieren
Eine aktuelle Version kann [hier](https://github.com/SpraxDev/HEMS-Skulpturengarten/releases) heruntergeladen werden.

### Voraussetzungen
* node.js 14 oder neuer
    * npm

### Ablauf
* Prüfe die Datei `src/config.ts` und nimm potenzielle Änderungen vor (z. B.: in der Property `cfg`)
* `npm install` - Lädt alle benötigten externen Dateien herunter und speichert sie im Ordner `node_modules/`
* `npm run build` - Generiert alle Dateien der Webseite und legt diese in `dist/` ab. Der Ordnerinhalt kann so auf einen
  Webserver hochgeladen werden.