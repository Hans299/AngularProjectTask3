import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tugas2Component } from './pages/tugas2/tugas2.component';

const routes: Routes = [
  {
    path:'',redirectTo:'tugas2',pathMatch:'full'
  },
  {
    path:'tugas2',component:Tugas2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
