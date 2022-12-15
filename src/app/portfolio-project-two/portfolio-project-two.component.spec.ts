import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectTwoComponent } from './portfolio-project-two.component';

describe('PortfolioProjectTwoComponent', () => {
  let component: PortfolioProjectTwoComponent;
  let fixture: ComponentFixture<PortfolioProjectTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
