import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KltComponent } from './klt.component';

describe('KltComponent', () => {
  let component: KltComponent;
  let fixture: ComponentFixture<KltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
