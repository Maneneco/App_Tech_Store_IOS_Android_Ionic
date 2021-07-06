import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'launcher',
    loadChildren: () =>
      import('./launcher/launcher.module').then((m) => m.LauncherPageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () =>
      import('./myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () =>
      import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'produto',
    loadChildren: () =>
      import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'paymentdone',
    loadChildren: () =>
      import('./paymentdone/paymentdone.module').then( m => m.PaymentdonePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'addinformation',
    loadChildren: () => import('./addinformation/addinformation.module').then( m => m.AddinformationPageModule)
  },
  {
    path: 'warrantydone',
    loadChildren: () => import('./warrantydone/warrantydone.module').then( m => m.WarrantydonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
