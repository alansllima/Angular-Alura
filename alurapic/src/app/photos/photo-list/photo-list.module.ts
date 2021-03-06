
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent} from './photos/photos.component'
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module'
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from "../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotosComponent,
        LoadButtonComponent,
        PhotoListComponent,
        SearchComponent,        
        FilterByDescription,
        
      
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
        
      
     ],
    exports: [],
    providers: [],
})
export class PhotoListModule {}