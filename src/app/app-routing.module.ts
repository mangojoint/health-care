import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'firsts', pathMatch: 'full' },
  {
    path: 'firsts',
    loadChildren: './firsts/firsts.module#FirstsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'customer', loadChildren: './register/customer/customer.module#CustomerPageModule' },
  { path: 'nurse', loadChildren: './register/nurse/nurse.module#NursePageModule' },
  { path: 'servicetype', loadChildren: './servicetype/servicetype.module#ServicetypePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
