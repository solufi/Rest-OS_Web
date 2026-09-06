import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

test("la page contient les sections et appels à l'action principaux", () => {
  for (const id of ["accueil", "surveillance", "plateforme", "fonctionnement", "contact"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(html, /Portail Rest-OS/);
  assert.match(html, /data-portal-link/);
});

test("le contenu couvre les mesures de surveillance essentielles", () => {
  assert.match(html, /Température et humidité/);
  assert.match(html, /Alertes configurables/);
  assert.match(html, /dernière transmission/i);
  assert.match(html, /Passerelle Rest-OS/);
});

test("la mise en page inclut une adaptation mobile et le mouvement réduit", () => {
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);
});
