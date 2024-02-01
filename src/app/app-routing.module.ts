import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importa tus componentes
import { AboutUsComponent } from './about-us/about-us.component'; 
import { ContactComponent } from './contact/contact.component';
import { NoexisteComponent } from './no-existe/noexiste.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Pagina no encontrada', component: NoexisteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
