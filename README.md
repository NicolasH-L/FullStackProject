# Fullstack

Projet certificatif du cours 420-345

1. La page Error404 est une propriété de https://colorlib.com/wp/free-404-error-page-templates/
2. La page d'accueil à été inspiré de https://getbootstrap.com/docs/4.0/examples/carousel/
3. Les slides de la page d'accueil sont de https://colorlib.com/wp/bootstrap-4-carousel/
4. La page de formulaire est une propriété de https://freefrontend.com/bootstrap-forms/
5. Les photos sont gratuites venant de https://www.pexels.com/search/car/

==========Étape pour créer un projet Angular============
1. Créer un répertoire Workspace dans l'emplacement qu'on désire

1. Entrer dans le répertoire et ouvrir un git bash afin d'exécuter la commande suivante pour créer un projet : ng n nomDuProjet --routing

2. Toujours dans le git bash, lancer Visual Studio code en exécutant : code .

3. Installer les librairies:
  npm i jquery
  npm i bootstrap
  npm i json-server 
  npm i @fortawesome/fontawesome-free --save

4. Configurer les options dans le fichier Angular.json du projet pour ajouter jQuery et bootstrap 
  "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "node_modules/@fortawesome/fontawesome-free/css/all.css",
   "src/styles.css"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]

5. Dans app.module.ts, il faut importer ces 2 modules :
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
  Toujours dans app.module.ts, ajouter manuellement les deux modules dans la categorie "imports"

6. Supprimer le HTML du app.component.html et le remplacer par les balises suivantes :
  |-----------------|
  | <app-navbar>    |
  | <router-outlet> |
  | <app-footer>    |

7. Dans le package.json du projet, il faut modifier dans la section script le start pour que ça devient "start": "ng serve -o --port 7070"
On rajoute notre propre port désiré.

8. Dans la création du service de l'objet, il faut spécifier le port du http dans le constructeur : 
super(http, "http://localhost:3200/apiFullstack");

9. Exécuter la commande suivante pour lancer le serveur Json : json-server -w nomDuFichierJson.json --port 3200

10. Exécuter le projet dans le terminal avec la commande : npm start

==========================================================================
Note de cours

[routerLink]="['/home']"
routerLink = "home"

port 3200 pour le data.json

{
    "apiFullstack": [

  ]
}

==========================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

|========Utilisation de Github ==> Pousser le code et déployer l'application.========|
1. Connecter le projet sur le repertoire Github distant(Remote)
  git remote add origin https://github.com/NicolasH-L/nomDuDossier

2. Préparer(vérifier) les fichiers à envoyer sur le repo Github(stage)
  git add .
    |--------------------------------------------------------|
    | git add -A : Stage all(nouveau + modifier + supprimer) |
    | git add .  : Stage(nouveaux et modifier) SEULEMENT     |
    | git add -u : Stage(modifier et supprimer) SEULEMENT    |

3. Commiter les fichiers en état de Stage
  git commit -m "Un message"

4. Pousser le code
  git push -u origin master

|========Déployer l'application sur Github Pages========|
1. Modifier le fichier angular.json comme suit : 
  La balise "outputPath": "dist/Fullstack" deviendra "outputPath": "docs/"
  En gros changer dist/nomDuProjet par docs/

2. Builder le projet(Créer une image de votre application à l'instant T qui sera déployé)
  ng build --prod --base-href="https://NicolasH-L.github.io/nomDuRepo/"

3. Pousser le code
  git add .
  git commit -m "un message"
  git push -u origin master

4. Aller dans Github/mon_repo/settings/ --> voir le githubPages

5. Dans l'option source : choisir la branche Master / docs et appuyer sur Save

|========Commande pour créer un module========|

ng generate module youtube --route youtube --module app.module

|===============Troubleshoot===============|

Fix du problème pour l'insertion de l'image pour que ca affiche proprement lors du déploiement sur GitHub pages.
Passer de <img src="" alt=""> à faire cela <img [src]="['']" alt="">