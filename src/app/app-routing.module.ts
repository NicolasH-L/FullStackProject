/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { ReadOnlyComponent } from './application/crud/readOnly/read-only/read-only.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { Error404Component } from './application/error404/error404.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { YoutubeComponent } from './application/youtube/youtube.component';

const routes: Routes = [

  {
    path: 'tutoriel',
    children: [
      { path: ':id', component: TutorielsComponent }
    ]
  },

  { path: 'readOnlyForm/:id', component: ReadOnlyComponent },
  { path: 'updateForm/:idToUpdate', component: UpdateComponent },
  { path: 'fun', component: FunComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: ReadComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'accueil', component: AccueilComponent },

  { path: 'youtube', loadChildren: () => import('./application/youtube/youtube.module').then(m => m.YoutubeModule) },
  
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
