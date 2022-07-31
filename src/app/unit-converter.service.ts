import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class converter {
  constructor(
    public name: string,
    public factor: number,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  constructor(
  ) { }
  options = ['metric', 'imperial'];
  selected = this.options[0];
  selectedChange: Subject<string> = new Subject<string>();

  conversions: Record<string, Record<string, converter>> = {
    metric: {
      long_length: new converter("meter", 1),
      short_length: new converter("centimeter", 1),
      small_weight: new converter("gram", 1),
      large_weight: new converter("kilogram", 1000)
    },
    imperial: {
      small_weight: new converter("ounces", 28.3495),
      large_weight: new converter("pounds", 453.592),
      long_length: new converter("yards", 0.9144),
      short_length: new converter("inches", 2.54),
    }
  }

  getConverters(): Record<string, converter> {
    return this.conversions[this.selected];
  }

  getUnits(): string[] {
    return this.options;
  }

  getDefaultUnits(): string {
    return this.options[0];
  }

  updateSelectedUnit(value: string): void {
    if (!this.options.includes(value)) {
      value = this.options[0];
    }
    this.selected = value;
    this.selectedChange.next(value);
  }
}
