import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const dbConfig: DBConfig  = {
  name: 'hwweb',
  version: 1,
  objectStoresMeta: [{
    store: 'enrollments',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'lastname', keypath: 'lastname', options: { unique: false } },
      { name: 'identification', keypath: 'identification', options: { unique: true } },
      { name: 'age', keypath: 'house', options: { unique: false } },
      { name: 'house', keypath: 'house', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    UiModule,
    PagesModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
