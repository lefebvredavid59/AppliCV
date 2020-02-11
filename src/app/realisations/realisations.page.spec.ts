import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealisationsPage } from './realisations.page';

describe('RealisationsPage', () => {
  let component: RealisationsPage;
  let fixture: ComponentFixture<RealisationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealisationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
