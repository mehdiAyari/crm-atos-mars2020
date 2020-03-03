import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login/page-login.component';
import { PagePrestationsComponent } from './prestation/pages/page-prestations/page-prestations.component';
import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';


const appRoutes: Routes = [
  {
    path: 'prestations',
    loadChildren: () => import('./prestation/prestation.module').then(m => m.PrestationModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./page-nots-found/page-nots-found.module').then(m => m.PageNotsFoundModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true , preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
