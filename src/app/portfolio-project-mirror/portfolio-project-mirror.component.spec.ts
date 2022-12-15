import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectMirrorComponent } from './portfolio-project-mirror.component';

describe('PortfolioProjectMirrorComponent', () => {
  let component: PortfolioProjectMirrorComponent;
  let fixture: ComponentFixture<PortfolioProjectMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectMirrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
