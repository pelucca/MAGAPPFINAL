import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CellDetailPage } from './cell-detail.page';

describe('CellDetailPage', () => {
  let component: CellDetailPage;
  let fixture: ComponentFixture<CellDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CellDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
