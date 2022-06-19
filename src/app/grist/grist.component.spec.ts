import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GristComponent, gristValues } from './grist.component';

describe('GristComponent', () => {
  let component: GristComponent;
  let fixture: ComponentFixture<GristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GristComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Grist Calculation', () => {
  it('should correctly calculate dummy values', () => {
    const values = GristComponent.calculate(new gristValues("meter", "gram", 200, 100));
    console.log("values", values);
    expect(values[0]).toEqual(2000);
    expect(values[1]).toBeCloseTo(4822.013167506075);
  })
})
