import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalTaskComponent } from './vital-task.component';

describe('VitalTaskComponent', () => {
  let component: VitalTaskComponent;
  let fixture: ComponentFixture<VitalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
