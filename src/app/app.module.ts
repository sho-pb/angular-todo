import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemComponent,
    TextFieldComponent,
    HomeComponent,
    ContainerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
