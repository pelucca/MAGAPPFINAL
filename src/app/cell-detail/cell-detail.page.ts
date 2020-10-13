import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cell-detail',
  templateUrl: './cell-detail.page.html',
  styleUrls: ['./cell-detail.page.scss'],
})
export class CellDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public onClickHome(): void {
    this.router.navigate(['/home']);
  }

}
