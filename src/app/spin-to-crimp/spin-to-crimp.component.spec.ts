import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Results, SpinToCrimpComponent, WheelSettings } from './spin-to-crimp.component';

describe('SpinToCrimpComponent', () => {
  let component: SpinToCrimpComponent;
  let fixture: ComponentFixture<SpinToCrimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinToCrimpComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpinToCrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Calculate Spin To Crimp', () => {
  it(`should calculate Rachel's example correctly in cm`, () => {
    const ws = new WheelSettings(5, 17, 17, 50, 30, 2, "ross");
    const expected = new Results(9.649529102979773, 5.789717461787864, 10);
    const got = SpinToCrimpComponent.calculate(ws);
    expect(got).toEqual(expected);
  })

});
