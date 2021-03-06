// Services
import { JsonService } from '../services/json-service';

// Components
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { HeaderComponent } from './header/header.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ApicallComponent } from './apicall/apicall.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FooterComponent } from './footer/footer.component';
import { RickMortyApiComponent } from './rick-morty-api/rick-morty-api.component';

// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "../shared/shared.module";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DetailsComponent } from './details/details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    HeaderComponent,
    SubscribeComponent,
    ApicallComponent,
    DirectivasComponent,
    FooterComponent,
    RickMortyApiComponent,
    FormComponent,
    TableComponent,
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    MatDialogModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [JsonService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
