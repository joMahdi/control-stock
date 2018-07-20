import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';

 
const appRoutes: Routes = [
    { path: 'produit', component: ProduitComponent},
    { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
            {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class appRoutingModule { }