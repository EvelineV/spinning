import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitConverterService } from '../unit-converter.service';

import { GristComponent } from './grist.component';

describe('GristComponent', () => {
  let component: GristComponent;
  let fixture: ComponentFixture<GristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GristComponent],
      providers: [UnitConverterService],
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
    expect(component.grist).toBe(0);
    component.length = 200;
    component.weight = 100;
    component.calculate();
    expect(component.grist).toEqual(2000);
    expect(component.unitConverterService.getConverters()['long_length'].name).toBe('meter');
  });

  it('calculates initial values in imperial', () => {
    component.unitConverterService.updateSelectedUnit('imperial');
    expect(component.unitConverterService.getConverters()['long_length'].name).toEqual("yards");
    const yards = 200 / component.converters['long_length'].factor;
    const ounces = 100 / component.converters['small_weight'].factor;
    expect(yards).toBe(218.72265966754156);
    expect(ounces).toBe(3.527399072294044);
    component.length = yards;
    component.weight = ounces;

    component.calculate();
    expect(component.grist).toBeCloseTo(992.1084864391951);
    expect(component.grist * 2.02).toBeCloseTo(2004.0591426071742);
  });

});
