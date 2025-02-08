import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      name: "Java",
      image: "devicon-java-plain",
      brand:"java"
    },
    {
      name: "Angular",
      image: "devicon-angular-plain",
      brand:"angular"
    },    
    {
      name: "MySQL",
      image: "devicon-mysql-plain",
      brand:"mysql"
    },
    {
      name: "Javascript",
      image: "devicon-javascript-plain",
      brand:"javascript"
    },    
    {
      name: "Typescript",
      image: "devicon-typescript-plain",
      brand:"typescript"
    },    
    {
      name: "Spring Boot",
      image: "devicon-spring-plain",
      brand:"spring"
    },
    {
      name: "Tailwind CSS",
      image: "devicon-tailwindcss-plain",
      brand:"tailwind"
    }, 
    {
      name: "Git",
      image: "devicon-git-plain",
      brand:"git"
    },
    {
      name: "C# (Unity)",
      image: "devicon-csharp-plain",
      brand:"csharp"
    },
  ]
}
