import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { SplitComponent } from './pipes/split/split.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VisualBoxComponent } from './components/visual-box/visual-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    InputComponent,
    SplitComponent,
    VisualBoxComponent,
  ],
  imports: [
    DragDropModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
    ]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
