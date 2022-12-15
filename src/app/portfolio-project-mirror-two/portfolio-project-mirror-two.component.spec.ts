import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectMirrorTwoComponent } from './portfolio-project-mirror-two.component';

describe('PortfolioProjectMirrorTwoComponent', () => {
  let component: PortfolioProjectMirrorTwoComponent;
  let fixture: ComponentFixture<PortfolioProjectMirrorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectMirrorTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectMirrorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
