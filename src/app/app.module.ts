import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    PortfolioProjectMirrorComponent,
    ContactComponent,
    PortfolioProjectTwoComponent,
    PortfolioProjectMirrorTwoComponent,
    FooterComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
