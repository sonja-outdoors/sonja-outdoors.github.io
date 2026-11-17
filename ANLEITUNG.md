# Website online stellen und bearbeiten

Alles ist kostenlos. Du brauchst etwa 30 Minuten.

**So funktioniert es**
- **GitHub** speichert die Dateien deiner Website.
- **GitHub Pages** zeigt sie im Internet an.
- **Pages CMS** ist dein Online-Editor. Dort änderst du Texte und lädst Fotos hoch, ganz ohne Code.

---

## 1. GitHub-Konto anlegen
1. Öffne <https://github.com/signup> und registriere dich.
2. Wähle deinen **Benutzernamen** mit Bedacht, denn er wird Teil deiner Website-Adresse: `benutzername.github.io`.

## 2. GitHub Desktop installieren
GitHub Desktop ist ein einfaches Programm, das deine Dateien zu GitHub hochlädt.
1. Lade es von <https://desktop.github.com> herunter, installiere es und öffne es.
2. Melde dich mit deinem GitHub-Konto an.

## 3. Website hochladen
1. Klicke in GitHub Desktop auf **File → Add Local Repository…** und wähle den Ordner deiner Website.
2. Wenn eine Meldung erscheint, dass der Ordner noch kein Repository ist, klicke auf **create a repository**. Dann:
   - **Name:** `benutzername.github.io`. Ersetze `benutzername` durch deinen GitHub-Benutzernamen.
   - Klicke auf **Create Repository**.
3. Klicke oben auf **Publish repository**.
   - **Entferne** das Häkchen bei „Keep this code private“, denn GitHub Pages ist nur für öffentliche Repositorys kostenlos.
   - Klicke auf **Publish Repository**.

## 4. GitHub Pages einschalten
1. Öffne auf github.com dein Repository `benutzername.github.io`.
2. Gehe zu **Settings → Pages**.
3. Wähle unter „Build and deployment“ als **Source** die Option **Deploy from a branch**, dann den Branch **main** und den Ordner **/ (root)**. Klicke auf **Save**.
4. Nach 1–2 Minuten ist deine Seite unter `https://benutzername.github.io` erreichbar.

## 5. Online-Editor verbinden
1. Öffne <https://app.pagescms.org> und klicke auf **Sign in with GitHub**.
2. Erlaube den Zugriff, und zwar nur auf das Repository `benutzername.github.io`.
3. Öffne das Repository und klicke auf **My website**. Jetzt kannst du:
   - Name, Vorstellung und „About me“ ändern,
   - dein Foto hochladen,
   - Projekte hinzufügen, löschen und umsortieren.
4. Klicke auf **Save**. Nach etwa einer Minute ist die Änderung auf deiner Website sichtbar.

**Tipp:** In den langen Textfeldern lässt du zwischen Absätzen eine **Leerzeile**.

---

## Später: eigene Domain
Wenn du eine Adresse wie `deinname.com` möchtest, kaufst du sie bei einem Anbieter. Das kostet etwa 10–15 € im Jahr. Danach trägst du sie unter **Settings → Pages → Custom domain** ein. Claude hilft dir gern dabei.

## Welche Datei macht was?
| Datei | Inhalt |
|---|---|
| `content/site.json` | alle Texte (wird vom Editor geändert) |
| `images/` | Fotos (Uploads aus dem Editor landen hier) |
| `.pages.yml` | legt fest, welche Felder der Editor zeigt |
| `style.css` | Farben und Layout |
| `index.html`, `projects.html`, `contact.html`, `render.js` | Aufbau der Seiten |
