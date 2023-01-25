import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectThreeComponent } from './portfolio-project-three.component';

describe('PortfolioProjectThreeComponent', () => {
  let component: PortfolioProjectThreeComponent;
  let fixture: ComponentFixture<PortfolioProjectThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
