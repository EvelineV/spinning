import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitConverterService } from '../unit-converter.service';

export class Units {
  constructor(
    public units: string,
  ) { }
}


@Component({
  selector: 'app-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.css']
})
export class UnitSelectorComponent implements OnInit {

  constructor(
    private unitConverterService: UnitConverterService
  ) { }

  selected = '';
  units: string[] = [];

  ngOnInit(): void {
    this.units = this.unitConverterService.getUnits();
    this.selected = this.unitConverterService.getDefaultUnits();
  }

  onChange(selected: string): void {
    this.unitConverterService.updateSelectedUnit(selected);
  }
}
