import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPdfComponent } from './launch-pdf.component';

describe('LaunchPdfComponent', () => {
  let component: LaunchPdfComponent;
  let fixture: ComponentFixture<LaunchPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
