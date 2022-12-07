import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"list", component: GamesComponent},
  {path:"create", component: GameCreateComponent},
  {path:"", redirectTo: "list", pathMatch: "full"},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }