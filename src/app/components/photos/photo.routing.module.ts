import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../../modules/views/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule { }
