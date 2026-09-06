# Rest-OS — site public

Première version du site vitrine de Rest-OS. Le site est volontairement statique, rapide et sans dépendance de production.

## Aperçu local

```bash
npm run serve
```

Ouvrir ensuite `http://localhost:4173`.

## Portail

Les boutons « Portail Rest-OS » utilisent actuellement `https://portail.lagitane.ca`.
Pour changer cette adresse sans modifier chaque bouton, ajouter l'attribut suivant à la balise `<html>` :

```html
<html lang="fr" data-portal-url="https://nouveau-portail.example">
```

## Vérification

```bash
npm test
```

## Hébergement temporaire

Chaque publication sur la branche `main` déclenche le déploiement GitHub Pages vers :

`https://solufi.github.io/Rest-OS_Web/`
