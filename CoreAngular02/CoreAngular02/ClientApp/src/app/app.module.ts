import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { HomeComponent02 } from './component/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { InsertComponent } from './component/table/insert/insert.component';
import { SelectComponent } from './component/table/select/select.component';
import { CharComponent } from './component/char/char.component';
import { PieComponent } from './component/char/pie/pie.component';
import { LineComponent } from './component/char/line/line.component';
import { ColumnComponent } from './component/char/column/column.component';
import { TableComponent } from './component/table/table.component';
import { UpdateComponent } from './component/table/update/update.component';
import { EmailComponent } from './component/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,

    InsertComponent,
    SelectComponent,
    HomeComponent02,
    CharComponent,
    PieComponent,
    LineComponent,
    ColumnComponent,
    TableComponent,
    UpdateComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
