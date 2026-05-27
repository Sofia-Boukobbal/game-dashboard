import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementApiComponent } from './classement-api';

describe('ClassementApi', () => {
  let component: ClassementApiComponent;
  let fixture: ComponentFixture<ClassementApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassementApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassementApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
