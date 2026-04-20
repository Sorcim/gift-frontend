# gift-frontend

Interface utilisateur du projet Gift — application de liste de cadeaux pour couple.

## Stack technique

- **Next.js** 16.x (App Router)
- **TypeScript** 5.x (mode strict)
- **Tailwind CSS** v4
- **TanStack Query** v5 (état serveur)
- **Zustand** v5 (état client : panier, UI)
- **React Hook Form** (formulaires, Story 2.x+)

## Prérequis

- Node.js 20+
- pnpm 10+

## Démarrage rapide

```bash
# Installer les dépendances
pnpm install

# Copier et configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local avec l'URL de l'API

# Démarrer le serveur de développement
pnpm dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/             # Next.js App Router (pages et layouts)
  features/
    catalog/       # Catalogue visiteur
    reservation/   # Panier et réservation
    admin/         # Back-office couple
    auth/          # Authentification couple
  components/      # Composants UI partagés
  lib/             # Utilitaires, client API, TanStack Query config
  stores/          # Stores Zustand (cart, ui)
  types/           # Types TypeScript globaux
```

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL de l'API gift-api |

## Commandes disponibles

```bash
pnpm dev      # Démarrage développement
pnpm build    # Build production
pnpm start    # Serveur production
pnpm lint     # Vérification ESLint
```
