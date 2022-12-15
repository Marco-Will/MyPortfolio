import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PortfolioProjectMirrorComponent } from './portfolio-project-mirror/portfolio-project-mirror.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioProjectTwoComponent } from './portfolio-project-two/portfolio-project-two.component';
import { PortfolioProjectMirrorTwoComponent } from './portfolio-project-mirror-two/portfolio-project-mirror-two.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    PortfolioProjectMirrorComponent,
    ContactComponent,
    PortfolioProjectTwoComponent,
    PortfolioProjectMirrorTwoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
