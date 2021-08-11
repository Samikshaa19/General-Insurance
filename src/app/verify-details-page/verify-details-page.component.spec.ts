import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDetailsPageComponent } from './verify-details-page.component';

describe('VerifyDetailsPageComponent', () => {
  let component: VerifyDetailsPageComponent;
  let fixture: ComponentFixture<VerifyDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
