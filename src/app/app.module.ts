import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Core */
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

/* Angular Material */
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/* Angular NGX Boostrap */
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Angular Components */
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

/* Angular Boostrap */
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonsModule.forRoot(),
    NgbTooltipModule,
    NgbModule
  ],
  providers: [provideHttpClient(), provideAnimations(), importProvidersFrom(MatNativeDateModule)],
  bootstrap: [AppComponent]
})
export class AppModule { }
