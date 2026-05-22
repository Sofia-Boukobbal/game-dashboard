import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementApi } from './classement-api';

describe('ClassementApi', () => {
  let component: ClassementApi;
  let fixture: ComponentFixture<ClassementApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassementApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassementApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
