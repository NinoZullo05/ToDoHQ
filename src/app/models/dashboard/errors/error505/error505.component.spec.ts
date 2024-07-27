import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error505Component } from './error505.component';

describe('Error505Component', () => {
  let component: Error505Component;
  let fixture: ComponentFixture<Error505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error505Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
