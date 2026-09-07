import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

test("la page contient les sections et appels à l'action principaux", () => {
  for (const id of ["accueil", "surveillance", "plateforme", "fonctionnement", "tarification", "contact"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(html, /Portail Rest-OS/);
  assert.match(html, /data-portal-link/);
});

test("la tarification distingue les frais initiaux de l'abonnement", () => {
  assert.match(html, /1 000 \$/);
  assert.match(html, /frais unique/);
  assert.match(html, /200 \$/);
  assert.match(html, /par mois/);
  assert.match(html, /Tarification indicative/);
});

test("le contenu couvre les mesures de surveillance essentielles", () => {
  assert.match(html, /Température et humidité/);
  assert.match(html, /Alertes configurables/);
  assert.match(html, /dernière transmission/i);
  assert.match(html, /Passerelle Rest-OS/);
});

test("le haut de page présente toute la plateforme opérationnelle", () => {
  assert.match(html, /Tout votre restaurant/);
  assert.match(html, /Achalandage et prévisions/);
  assert.match(html, /coûts de recettes/i);
  assert.match(html, /inventaire/i);
  assert.match(html, /horaires et réservations/i);
  assert.match(html, /frigos et celliers/i);
  assert.match(html, /tamisez l'éclairage/i);
  assert.match(html, /gérez le chauffage/i);
  assert.match(html, /Vue d'ensemble/);
});

test("la mise en page inclut une adaptation mobile et le mouvement réduit", () => {
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);
});
