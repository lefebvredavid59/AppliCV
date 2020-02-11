import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetencesPage } from './competences.page';

describe('CompetencesPage', () => {
  let component: CompetencesPage;
  let fixture: ComponentFixture<CompetencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
