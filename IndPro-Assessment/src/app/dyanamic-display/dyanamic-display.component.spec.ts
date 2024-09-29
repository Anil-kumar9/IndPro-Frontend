import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicDisplayComponent } from './dyanamic-display.component';

describe('DyanamicDisplayComponent', () => {
  let component: DyanamicDisplayComponent;
  let fixture: ComponentFixture<DyanamicDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyanamicDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanamicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
