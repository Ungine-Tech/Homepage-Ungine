# Homepage Ungine

云骏时代企业官网

## Develop

```bash
git clone https://github.com/Ungine-Tech/Homepage-Ungine.git
cd Homepage-Ungine
yarn install
yarn dev
```

## Deploy

You need to install Node.js or docker in advance.

### Self-deploy

```bash
yarn install --frozen-lockfile
yarn build
yarn start
```

### Export static files

```bash
yarn install  --frozen-lockfile
yarn export
```

Then you can find the exported files in the `./out/` directory.

### Docker Dynamic

use `node:lts-alpine` image.

```bash
docker build -t homepage-ungine .
docker run -itd homepage-ungine -p 3000:80
```

### Docker Static

use `node:lts-alpine` and `nginx:stable-alpine` images.

```bash
docker build -t homepage-ungine .
docker run -itd homepage-ungine -p 80:80
```
