import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserFormComponent} from './components/user-form/user-form.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
