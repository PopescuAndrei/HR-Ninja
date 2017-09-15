import { SharedTopBarComponent } from './shared-top-bar/shared-top-bar.component';
import { SharedConfigService } from './services/shared-config.service';
import { SharedFooterComponent } from './shared-footer/shared-footer.component';
import { SharedNavBarComponent } from './shared-nav-bar/shared-nav-bar.component';
import { SharedContentComponent } from './shared-content/shared-content.component';
import { SharedBodyComponent } from './shared-body/shared-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedBodyComponent,
    SharedContentComponent,
    SharedNavBarComponent,
    SharedFooterComponent,
    SharedTopBarComponent
  ],
  providers:[
    SharedConfigService
  ],
  exports:[
    SharedBodyComponent
  ]
})
export class SharedModule { }
