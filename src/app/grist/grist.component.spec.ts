import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GristComponent } from './grist.component';

describe('GristComponent', () => {
  let component: GristComponent;
  let fixture: ComponentFixture<GristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GristComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculates initial values in metric', () => {
    expect(component.grist_metric).toBe(0);
    component.model.length = 200;
    component.model.weight = 100;
    component.calculate();
    expect(component.grist_metric).toEqual(2000);
    expect(component.grist_imperial).toEqual(992.10929804);
  });
});
