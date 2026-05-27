import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementComponent } from './classement';

describe('Classement', () => {
  let component: ClassementComponent;
  let fixture: ComponentFixture<ClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
