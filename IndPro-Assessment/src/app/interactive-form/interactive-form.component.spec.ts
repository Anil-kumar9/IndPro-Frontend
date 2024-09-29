import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveFormComponent } from './interactive-form.component';

describe('InteractiveFormComponent', () => {
  let component: InteractiveFormComponent;
  let fixture: ComponentFixture<InteractiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
