import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoiPage } from './moi.page';

describe('MoiPage', () => {
  let component: MoiPage;
  let fixture: ComponentFixture<MoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
