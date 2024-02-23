import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecharttwoComponent } from './piecharttwo.component';

describe('PiecharttwoComponent', () => {
  let component: PiecharttwoComponent;
  let fixture: ComponentFixture<PiecharttwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiecharttwoComponent]
    });
    fixture = TestBed.createComponent(PiecharttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
