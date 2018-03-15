import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { LoadingModule } from 'ngx-loading';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module'; 
import {APP_BASE_HREF} from '@angular/common';
import 'rxjs/Rx';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { ScrollTracker} from './ScrollTracker.directive';
import { UtilityService } from './utility.service';
import { HeaderComponent } from './header/header.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component'; 

const routes: Routes = [
 { path: 'product', component: ProductComponent },
 { path: 'member', component: MemberComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MemberComponent,
    ScrollTracker,
    HeaderComponent,
    CustomLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    LoadingModule,
    NgHttpLoaderModule,
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  providers: [UtilityService, {provide: APP_BASE_HREF, useValue: 'search'}],
  bootstrap: [ AppComponent] 
})
export class AppModule {  }
