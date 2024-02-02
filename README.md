<h1>PokeCompanion</h1>

<h2>About The App</h2>

The purpose of PokeCompanion is to serve as a application to use alongside the main Game Boy/DS/Switch Pokemon Games. The end goal of these games is to "Catch Em All" which results in requiring a number of different game versions across game systems and in game regions. It is difficult to keep track of which Pokemon are available in which game which is what inspired PokeCompanion.

The application is set up as a simple list of Pokemon placed in either a "collected" or "to collect" tab, being able to be moved from one to the other. By clicking on an icon, information about the Pokemon's name, id, type (WIP) and location (WIP) can be found, along with the checkbox marking it as found. 

<h2>Technology Stack</h2>

<h3>Frontend</h3>

- React in Vite development environment using Typescript
- Standard CSS

<h3>Backend + Database</h3>

- Firebase Cloud Firestore for storing Pokemon information (NoSQL)
- Firebase library used for serving database documents in lieu of a dedicated backend server

<h3>Hosting</h3>

- Firebase hosting used to host small scale app for free

<h3>CI/CD</h3>

- Github Actions used to ensure successful build before merging to main branch
- Github Actions used to deploy on merge to main branch

<h2>How To Use?</h2>

<h3>Deployed</h3>

Accessed the current release here: https://pokecom-5f29e.web.app

<h3>Local</h3>

Clone the repository to your local machine and run:

```shell
npm i && npm run dev
```

Visit http://localhost:5173/ in a browser to visit application running on your local machines.

<h2>Acknowledgements</h2>

- Pokemon Sprites: https://github.com/PokeAPI/sprites
- Pokemon Information: https://pokemondb.net



