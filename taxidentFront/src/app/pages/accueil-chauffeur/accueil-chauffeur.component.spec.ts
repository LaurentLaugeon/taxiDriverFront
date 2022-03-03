import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilChauffeurComponent } from './accueil-chauffeur.component';

describe('AccueilChauffeurComponent', () => {
  let component: AccueilChauffeurComponent;
  let fixture: ComponentFixture<AccueilChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
