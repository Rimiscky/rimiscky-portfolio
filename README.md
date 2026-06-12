# Rimiscky Sambala — Portfolio

Portfolio personnel premium : photographie, vidéo, design & développement web.

**Production :** https://rimiscky-portfolio.vercel.app

## Stack

- Next.js 15 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animations) + Lenis (smooth scroll)
- next-themes (dark mode par défaut)

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Modifier le contenu

Tout le contenu (textes, expériences, compétences, photos, vidéos, équipement, projets web, liens) est centralisé dans **`lib/data.ts`**.

### Ajouter des photos

1. Déposer l'original dans `Photos/`
2. L'optimiser vers `public/photos/` :
   ```bash
   sips -Z 1800 -s format jpeg -s formatOptions 78 "Photos/MA_PHOTO.jpg" --out public/photos/photo-19.jpg
   ```
3. Ajouter l'entrée dans le tableau `photos` de `lib/data.ts` (avec largeur/hauteur réelles : `sips -g pixelWidth -g pixelHeight public/photos/photo-19.jpg`)

### Ajouter une vidéo

1. Copier le fichier dans `public/videos/`
2. Générer un poster : `ffmpeg -ss 2 -i public/videos/ma-video.mp4 -vframes 1 -q:v 3 public/videos/ma-video-poster.jpg`
3. Ajouter l'entrée dans `videoProjects` de `lib/data.ts`

### Ajouter un visuel design

1. Optimiser vers `public/design/` (`sips -Z 1400 ...`)
2. Ajouter l'entrée dans `designItems` avec un `span` (`big`, `tall`, `wide`, `square`) pour la grille bento

## Déploiement

```bash
vercel deploy --prod --yes
```

Les dossiers sources (`Photos/`, `Graphisme/`, `videos/`) sont exclus de l'upload via `.vercelignore` — seules les versions optimisées dans `public/` sont déployées.

## Domaine personnalisé

Pour brancher **www.rimiscky.fr** : Vercel → projet `rimiscky-portfolio` → Settings → Domains → ajouter `rimiscky.fr`, puis pointer les DNS chez votre registrar (A `76.76.21.21` ou CNAME `cname.vercel-dns.com`).
