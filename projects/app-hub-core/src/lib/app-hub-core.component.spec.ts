import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHubCoreComponent } from './app-hub-core.component';

describe('AppHubCoreComponent', () => {
  let component: AppHubCoreComponent;
  let fixture: ComponentFixture<AppHubCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHubCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHubCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
