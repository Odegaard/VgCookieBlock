# VgCookieBlock

Nettleserutvidelse for Chrome og Brave som fjerner samtykke-popups og gjenoppretter scrolling på norske nettsteder.

## Installasjon

1. Last ned eller klon repoet
2. Gå til `chrome://extensions` eller `brave://extensions`
3. Skru på **Utviklermodus** (øverst til høyre)
4. Klikk **Last inn upakket** og velg mappen

## Legg til nettsteder

Åpne `content.js` og legg til domenet i `SITES`-listen øverst:

```js
const SITES = [
  "vg.no",
  "eksempel.no", // legg til her
];
```

Deretter trykk på oppdater-ikonet (↺) på utvidelsen i `chrome://extensions`.

## Støttede nettsteder

| Nettsted | Utgiver |
|---|---|
| vg.no | Schibsted |
| e24.no | Schibsted |
| aftenposten.no | Schibsted |
| bt.no | Schibsted |
| sa.no | Schibsted |
| fvn.no | Schibsted |
| adressa.no | Schibsted |
| smp.no | Schibsted |
| ba.no | Schibsted |
| rb.no | Schibsted |
| dagbladet.no | Aller Media |
| nettavisen.no | Nettavisen |
| tv2.no | TV 2 |
| dn.no | DN |
| hegnar.no | Hegnar Media |
| tek.no | Aller Media |
| dinside.no | Aller Media |
| kode24.no | Amedia |
