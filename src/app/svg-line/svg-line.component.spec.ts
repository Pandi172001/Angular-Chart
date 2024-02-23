import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLineComponent } from './svg-line.component';

describe('SvgLineComponent', () => {
  let component: SvgLineComponent;
  let fixture: ComponentFixture<SvgLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgLineComponent]
    });
    fixture = TestBed.createComponent(SvgLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
