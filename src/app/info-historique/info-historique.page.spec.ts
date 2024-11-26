import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoHistoriquePage } from './info-historique.page';

describe('InfoHistoriquePage', () => {
  let component: InfoHistoriquePage;
  let fixture: ComponentFixture<InfoHistoriquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHistoriquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
