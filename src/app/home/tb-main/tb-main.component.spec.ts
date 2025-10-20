import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbMainComponent } from './tb-main.component';

describe('TbMainComponent', () => {
  let component: TbMainComponent;
  let fixture: ComponentFixture<TbMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
