import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
// import { contactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    // children: [
    //   {
    //     path: 'edit/:id',
    //     component: contactEditComponent,
    //     resolve: { contact: contactResolverService },
    //   },
    //   {
    //     path: 'edit',
    //     component: contactEditComponent,
    //     resolve: { contact: contactResolverService },
    //   },
    // ],
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
