import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule,  MatButtonModule, MatListModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';
import { HomeComponent } from './components/home/home.component'

import { ModelApiService } from './services/model-api.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ModelApiService],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
