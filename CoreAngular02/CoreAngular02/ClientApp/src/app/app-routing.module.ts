import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UpdateComponent } from './component/table/update/update.component';
import { InsertComponent } from './component/table/insert/insert.component';
import { SelectComponent } from './component/table/select/select.component';
import { HomeComponent02 } from './component/home/home.component';
import { CharComponent } from './component/char/char.component';
import { PieComponent } from './component/char/pie/pie.component';
import { LineComponent } from './component/char/line/line.component';
import { ColumnComponent } from './component/char/column/column.component';
import { TableComponent } from './component/table/table.component';
import { EmailComponent } from './component/email/email.component';

const routes: Routes = [
  {
    path: 'email', component: EmailComponent
  },
  {
    path: 'home', component: HomeComponent02
  },
  {
    path: 'table', component: TableComponent,
    children: [
      { path: 'insert', component: InsertComponent },
      { path: 'select', component: SelectComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: '**', redirectTo: 'select' },
    ]
  }, {
    path: 'char', component: CharComponent,
    children: [
      { path: 'line', component: LineComponent },
      { path: 'pie', component: PieComponent },
      { path: 'column', component: ColumnComponent },
      { path: '**', redirectTo: 'line' },
    ]
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
