# 📜 Discord Text Channel Lister

Un bot Discord **ultra simple** utilisant [discord.js v14.18.0](https://discord.js.org/docs/packages/discord.js/14.18.0).  
Il affiche tous les **salons texte** d’un serveur dans un embed, **triés par ordre alphabétique**, avec chaque nom sur une ligne et le **nombre total** en bas.

---

## ✨ Fonctionnalités

- ✅ Liste uniquement les **salons texte** (pas de vocaux ou de catégories)
- 🔠 Trie les salons **par ordre alphabétique**
- 📋 Affiche les noms **un par ligne** dans un embed
- 📊 Affiche le **nombre total** de salons texte
- 💬 Une seule commande : **`!channels`**

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) **v16.9.0** ou plus
- Un bot Discord créé via le [Discord Developer Portal](https://discord.com/developers/applications)
- Le bot doit être invité avec les permissions :
  - **Lire les messages**
  - **Envoyer des messages**
  - **Voir les salons**

---

## 📦 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/kordx-dev/discord-bot-kordx.git
cd discord-bot-kordx
```

### 2. Installer les dépendances
`npm install`

---

## 🔐 Configuration du token

- Ouvre le fichier `index.js` et repère cette ligne :
`const TOKEN = 'TOKEN';`
- ➡️ Remplace `'TOKEN'` par le token de ton bot Discord, que tu obtiens sur le [Discord Developer Portal](https://discord.com/developers/applications).
  ⚠️ Attention : ne partage jamais ton token publiquement !

---

## 🚀 Lancer le bot

- Une fois le token configuré et les dépendances installées, lance le bot en exécutant :
  `node index.js`
- Tu devrais voir s'afficher dans la console :
  `Connecté en tant que BOT#0000`

Le bot est alors prêt à l'emploi !
