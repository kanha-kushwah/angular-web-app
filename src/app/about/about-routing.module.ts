import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import { BoardComponent } from "./board/board.component";
import { TeamComponent } from "./team/team.component";
import { WhyLEComponent } from "./why-le/why-le.component";

const routes: Routes = [
    {
      path:'about', redirectTo:'/about', pathMatch:'full'
    },
    {
        /* path: 'about', component: AboutComponent,
        children: [
          { */
               path: 'about', component: AboutComponent,  
              children:[
                {
                  path: 'whyle', component: WhyLEComponent,  
                },
                {
                  path: 'board', component: BoardComponent,  
                },
                {
                  path: 'team', component: TeamComponent,  
                }
              ]
          },
        // ]
    // },
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutRoutingModule { }