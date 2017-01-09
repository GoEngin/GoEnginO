// The parent element controls the children position.
// The style should be described in the component scss file.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SharedService } from './shared/shared.service';

import { LoginService } from './login/login.service';
import { ArticleService } from './article/article.service';
import { CategoryService } from './category/category.service';

import { HeaderComponent, IconComponent, FormComponent, ButtonComponent, InputComponent, TextComponent, DrawerComponent, ToggleComponent, CardComponent, CarouselComponent, CarouselItemComponent, ListComponent, ListItemComponent } from './shared/component/index';
import { AppHeaderComponent } from './appheader/appheader.component';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/categorylist.component';
import { ArticleListComponent } from './article/articlelist.component';
import { ArticleDetailComponent } from './article/articledetail.component';
// for loading components dynamically
import { LoginComponent } from './login/login.component';
import { UserMenuComponent } from './usermenu/usermenu.component';

@NgModule({
  imports: [ 
    BrowserModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    AppHeaderComponent, 
    IconComponent, 
    FormComponent,
    ButtonComponent, 
    InputComponent, 
    TextComponent,
    ToggleComponent,
    LoginComponent,
    DrawerComponent,
    UserMenuComponent,
    CardComponent,
    CarouselComponent,
    CarouselItemComponent,
    ListComponent,
    ListItemComponent,
    ArticleComponent,
    CategoryComponent,
    CategoryListComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  //Component list that are loaded dynamically
  //https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
  entryComponents: [
    DrawerComponent,
    LoginComponent,
    UserMenuComponent,
    CategoryComponent,
    CategoryListComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ListItemComponent,
    CarouselItemComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    SharedService,
    LoginService,
    CategoryService,
    ArticleService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { 

}
