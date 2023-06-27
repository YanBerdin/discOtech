# Project DiscO'Tech - FrontEnd

## About :mirror_ball:

The project consists in creating an online platform allowing the referencing of all musical genres
The main goal is to provide users with a friendly and attractive interface to explore music discs.

## Deploy :gear:

- Launch VM Cloud by [kourou](https://kourou.oclock.io/ressources/vm-cloud/) and wait for starting
- Copy your SSH command ssh <student@xxxxxxxxxxxxxxxx-server.eddi.cloud>
- Open new BASH, paste and execute your SSH command

## Checklist Deploy :heavy_check_mark:

- Place you in the folder HTML and clone this repository

```bash
cd /var/www/html
git clone < git@github.com >:xxxxxxxxxx.git
```

- Now place you inside the project folder

```bash
cd projet-disc-otech-front/Front
```

- Npm installation

```bash
npm install
```

- Npm run dev

```bash
npm run dev
```

## Configuration :hammer:

**Warning** : Only after Back is launch, create a file .env as the `.env.example`.
You need to use your `LASTNAME` and `FIRSTNAME` to create your base url in `.env`

```bash
VITE_API_BASE_URL=http://[firstname]-[lastname]-server.eddi.cloud/projet-disc-otech-back/Back/public/api
```