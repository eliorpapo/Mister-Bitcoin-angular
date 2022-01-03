import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ContactPageComponent, ContactListComponent, ContactPreviewComponent, ContactDetailsComponent, ContactFilterComponent,  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
