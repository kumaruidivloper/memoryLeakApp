import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuckyComponent } from './lucky/lucky.component';
import { ReallyComponent } from './really/really.component';

const routes: Routes = [
     { path: '', redirectTo: 'lucky', pathMatch: 'full'},
     { path: 'lucky', component: LuckyComponent, pathMatch: 'full'},
     { path: 'really', component: ReallyComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
