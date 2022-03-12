import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualBoxComponent } from './visual-box.component';

describe('VisualBoxComponent', () => {
  let component: VisualBoxComponent;
  let fixture: ComponentFixture<VisualBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
