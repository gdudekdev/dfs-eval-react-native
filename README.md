# Goals

Application mobile React Native (Android) affichant les statistiques sportives et les
objectifs d'un utilisateur, réalisée dans le cadre d'une évaluation modulaire.

📄 Sujet complet : [Evaluation - Goals.pdf](docs/Evaluation%20-%20Goals.pdf)

## Fonctionnalités

- **Écran Accueil** — tableau de bord alimenté par l'API : trois statistiques
  (séances, temps converti en `h min`, calories) et la liste dynamique des objectifs.
- **Écran Profil** — informations utilisateur fictives (nom, description, objectif
  principal, objectif de poids, activité favorite, niveau sportif).
- **Navigation** — barre d'onglets en bas (Accueil / Profil), onglet actif identifiable.
- **États** — chargement, succès et erreur (message compréhensible + bouton Réessayer).
- **Bonus** — pull to refresh, accessibilité (labels/rôles) et adaptation aux tailles
  d'écran (contenu plafonné et centré).

## Pile technique

- React Native 0.86
- React Navigation (bottom tabs)
- react-native-vector-icons
- TypeScript

## Prérequis

- Node.js ≥ 22.11
- JDK 21 (celui embarqué par Android Studio convient)
- Android SDK + un émulateur ou un appareil Android connecté

## Installation

```sh
npm install
```

## Lancer l'application

Un `Makefile` regroupe les commandes courantes (il pointe automatiquement vers le JDK 21
d'Android Studio pour les builds) :

```sh
make start      # démarre le serveur Metro
make android    # build et lance l'app sur l'émulateur/appareil connecté
make devices    # liste les appareils Android connectés
```

Équivalents npm : `npm start`, `npm run android`.

## Structure du projet

```
src/
├─ app.tsx              # point d'entrée : NavigationContainer + navigation
├─ api/                 # client HTTP + types du tableau de bord
├─ components/          # composants UI partagés (IconBadge, SectionTitle)
├─ navigation/          # barre d'onglets (Accueil / Profil)
├─ theme/               # couleurs, espacements, rayons
└─ screens/
   ├─ home/             # écran Accueil (components, hooks, utils)
   └─ profile/          # écran Profil (components, data fictives)
```

## API

Les données du tableau de bord proviennent de :

```
GET https://labs.nicolas.sh/reactnative/evmod/api/
```

Les résultats varient à chaque appel ; ajouter `?fixed=true` pour les figer.

## État du projet

⚠️ **Projet en cours — pas encore complet.**

- Les **tests ne sont pas encore implémentés** (la configuration Jest par défaut du
  template est présente, mais aucun test applicatif n'a été écrit).
