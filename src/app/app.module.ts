import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FileDropModule } from 'ngx-file-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { EmailInputComponent } from './components/emailInput/emailInput.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { PriceSelectionComponent } from './components/priceSelection/priceSelection.component';
import { MenuComponent } from './header/menu/menu.component';
import { HomePageComponent } from './homePage/homePage.component';
import { FileUploadComponent } from './components/fileUpload/fileUpload.component';
import { CurrencyPipe } from './pipes/CurrencyPipe/CurrencyPipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromotionComponent,
    EmailInputComponent,
    SubscriptionComponent,
    PriceSelectionComponent,
    MenuComponent,
    HomePageComponent,
    FileUploadComponent,
    CurrencyPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FileDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FileUploadComponent],
})
export class AppModule { }
