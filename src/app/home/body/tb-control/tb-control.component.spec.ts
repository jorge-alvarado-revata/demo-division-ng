import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbControlComponent } from './tb-control.component';

describe('TbControlComponent', () => {
  let component: TbControlComponent;
  let fixture: ComponentFixture<TbControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
