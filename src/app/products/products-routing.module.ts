import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OrkoComponent } from './orko/orko.component';
import { AskVanaComponent } from './ask-vana/ask-vana.component';
import { SimpleArcanaComponent } from './simple-arcana/simple-arcana.component';


const routes: Routes = [
  {
    path:'Products', redirectTo:'/Orko', pathMatch:'full'
  },
  {
      path: '', component: ProductsComponent,
      children: [
        {
            path: '', component: ProductsComponent,  
            children:[
              {
                path: 'Orko', component: OrkoComponent,  
              },
              {
                path: 'ask_vana', component: AskVanaComponent,  
              },
              {
                path: 'simple_arcana', component: SimpleArcanaComponent,  
              },
            ]
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
