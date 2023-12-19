import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OrkoComponent } from './orko/orko.component';
import { AskVanaComponent } from './ask-vana/ask-vana.component';
import { SimpleArcanaComponent } from './simple-arcana/simple-arcana.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    OrkoComponent,
    AskVanaComponent,
    SimpleArcanaComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
