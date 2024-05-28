import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalComponent } from './cheval.component';

describe('ChevalComponent', () => {
  let component: ChevalComponent;
  let fixture: ComponentFixture<ChevalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChevalComponent]
    });
    fixture = TestBed.createComponent(ChevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
