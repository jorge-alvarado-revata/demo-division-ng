import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionShellComponent } from './division-shell.component';

describe('DivisionShellComponent', () => {
  let component: DivisionShellComponent;
  let fixture: ComponentFixture<DivisionShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
