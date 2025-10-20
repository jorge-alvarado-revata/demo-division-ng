import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbOrgComponent } from './tb-org.component';

describe('TbOrgComponent', () => {
  let component: TbOrgComponent;
  let fixture: ComponentFixture<TbOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbOrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
