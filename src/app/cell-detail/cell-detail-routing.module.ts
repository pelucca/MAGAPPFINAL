import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellDetailPage } from './cell-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CellDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CellDetailPageRoutingModule {}
