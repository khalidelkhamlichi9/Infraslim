# INFRASLIM - Architecture Astro + Strapi CMS

Ce projet contient la version moderne **Jamstack (Astro + Strapi)** du site officiel **INFRASLIM (Agdal, Rabat)**.

---

## 📁 Structure du Projet

- **`/frontend`** : Application **Astro** (Pages statiques ultra-rapides, composants modulaires, routes dynamiques `[slug].astro`, design system officiel INFRASLIM).
- **`/backend`** : **Strapi Headless CMS** (Interface d'administration pour gérer les Services, Articles de Blog, Questions FAQ et Paramètres Généraux).

---

## 🚀 Démarrage Rapide

### 1. Lancer le Backend Strapi (CMS)

```bash
cd backend
npm install
npm run develop
```
- Créez votre compte administrateur.
- **Auto-configuration intégrée :** Au premier démarrage (`src/index.js`), Strapi pré-remplit automatiquement les 5 Services, les 3 Articles de Blog, les 6 FAQ et les Paramètres Généraux, et active les permissions publiques de lecture (`find` / `findOne`).

### 2. Lancer le Frontend Astro

```bash
cd frontend
npm install
npm run dev
```
> **💡 Fonctionnement Autonome Intégré :**  
> Le connecteur `src/lib/strapi.ts` intègre des données officielles de secours (*fallback*). Ainsi, **le frontend Astro fonctionne immédiatement et affiche tout le contenu d'INFRASLIM** même si le serveur Strapi n'est pas encore démarré ! Dès que Strapi est actif, Astro récupère automatiquement vos contenus modifiés dans le CMS.

---

## 📦 Build de Production (Astro)

Pour générer les fichiers statiques optimisés pour votre hébergeur :

```bash
cd frontend
npm run build
```
Les fichiers générés se trouveront dans `frontend/dist/`.
