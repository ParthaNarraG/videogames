import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GameComponent } from './components/game/game.component';
import { HttpInterceptor } from './interceptor/http.interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailsComponent } from './components/details/details.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatIconModule} from '@angular/material/icon';
import { TabsGameInfoComponent } from './components/tabs/tabs-game-info/tabs-game-info.component';
import { TabsScreenshotsComponent } from './components/tabs/tabs-screenshots/tabs-screenshots.component';
import { TabsTrailersComponent } from './components/tabs/tabs-trailers/tabs-trailers.component';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameComponent,
    DetailsComponent,
    TabsComponent,
    TabsGameInfoComponent,
    TabsScreenshotsComponent,
    TabsTrailersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    GaugeModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
