import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpinfoComponent } from './ipinfo.component';

describe('IpinfoComponent', () => {
  let component: IpinfoComponent;
  let fixture: ComponentFixture<IpinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
