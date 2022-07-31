import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitSocksComponent } from './knit-socks.component';

describe('KnitSocksComponent', () => {
  let component: KnitSocksComponent;
  let fixture: ComponentFixture<KnitSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnitSocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnitSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
