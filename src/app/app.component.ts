import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { CertificationsComponent } from './modules/certifications/certifications.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, HomeComponent, SkillsComponent, ExperienceComponent,ProjectsComponent, CertificationsComponent,AboutComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';


}
