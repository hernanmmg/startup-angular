import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../modules/views/home/home.component';
import { FormsModule } from '@angular/forms';
import { PersistenceService } from '../../services/persistence.service';
import { PhotosRoutingModule } from './photo.routing.module';
import { NavbarComponent } from 'src/app/modules/layout/navbar/navbar.component';
import { PhotosComponent } from './components/photos.component';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, PhotosComponent, CardComponent, SearchComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    PhotosRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [
    PersistenceService,
  ]
})
export class PhotoModule { }
