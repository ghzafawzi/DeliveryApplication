import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivraisonsPage } from './livraisons.page';

describe('LivraisonsPage', () => {
  let component: LivraisonsPage;
  let fixture: ComponentFixture<LivraisonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
