import { isNgContainer } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PliedWpiComponent, calculate } from './plied-wpi.component';

describe('PliedWpiComponent', () => {
  let component: PliedWpiComponent;
  let fixture: ComponentFixture<PliedWpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PliedWpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PliedWpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('plied-wpi:calculate', ()=>{
  it('calculates for two-ply', () => {
    expect(calculate(15, 2)).toEqual(10);
  });

  it('calculates for three-ply', ()=>{
    expect(calculate(14, 3)).toEqual(7);
  });

  it('calculates five-ply', ()=>{
    expect(calculate(18, 5)).toEqual(7.2);
  });
});
