import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CellDetailPageRoutingModule } from './cell-detail-routing.module';
import { CellDetailPage } from './cell-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CellDetailPageRoutingModule
  ],
  declarations: [CellDetailPage]
})
export class CellDetailPageModule {}
