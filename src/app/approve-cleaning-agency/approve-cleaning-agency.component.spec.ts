import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCleaningAgencyComponent } from './approve-cleaning-agency.component';

describe('ApproveCleaningAgencyComponent', () => {
  let component: ApproveCleaningAgencyComponent;
  let fixture: ComponentFixture<ApproveCleaningAgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveCleaningAgencyComponent]
    });
    fixture = TestBed.createComponent(ApproveCleaningAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
