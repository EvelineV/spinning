import { isNgContainer } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PliedWpiComponent, Ply } from './plied-wpi.component';

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

describe('ply:calculate', ()=>{
  interface TestCase {
    name: string,
    singlesWPI: number,
    numPlies: number,
    expectedPliedWPI: number,
  }
  const testcases: TestCase[] = [
    {
      name: 'two-ply',
      singlesWPI: 15,
      numPlies: 2,
      expectedPliedWPI: 10,
    }, {
      name: 'three-ply',
      singlesWPI: 14,
      numPlies: 3,
      expectedPliedWPI: 7,
    }, {
      name: 'five-ply',
      singlesWPI: 18,
      numPlies: 5,
      expectedPliedWPI: 7.2,
    }
  ];

  testcases.forEach((tc)=>{
    it(tc.name, ()=>{
      expect(new Ply({ singles_wpi: tc.singlesWPI, num_plies: tc.numPlies}).calculateWPI()).toEqual(tc.expectedPliedWPI);
    });
  });

  it('should calculate BPI', ()=>{
    expect(new Ply({ singles_tpi: 14, num_plies: 3, singles_wpi: 23 }).calculateBPI()).toEqual(42);
    expect(new Ply({ singles_tpi: 0, num_plies: 3, singles_wpi: 18 }).calculateBPI()).toEqual(0);
  });
});
