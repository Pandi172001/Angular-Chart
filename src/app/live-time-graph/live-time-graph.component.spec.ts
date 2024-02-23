import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTimeGraphComponent } from './live-time-graph.component';

describe('LiveTimeGraphComponent', () => {
  let component: LiveTimeGraphComponent;
  let fixture: ComponentFixture<LiveTimeGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveTimeGraphComponent]
    });
    fixture = TestBed.createComponent(LiveTimeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
