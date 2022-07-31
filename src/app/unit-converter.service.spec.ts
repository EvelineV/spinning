import { TestBed } from '@angular/core/testing';

import { UnitConverterService } from './unit-converter.service';

describe('UnitConverterService', () => {
  let service: UnitConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('accepts updating', () => {
    service.updateSelectedUnit("imperial");
    expect(service.selected).toBe("imperial");
  })

  it('does not accept invalid systems', () => {
    service.updateSelectedUnit("lightyears");
    expect(service.selected).toBe("metric");
  })

  it('returns correct metric converters', () => {
    expect(service.getConverters()['long_length'].name).toBe("meter");
  })

  it('returns correct imperial converters', () => {
    service.updateSelectedUnit("imperial");
    expect(service.getConverters()['long_length'].name).toBe("yards");
  })

});
