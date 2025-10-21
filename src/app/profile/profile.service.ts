import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 projects:any = [
    {
      id: 2,
      title: 'Camera Rental Application using java',
      desc: '',
      livedemo: 'https://github.com/Rajiilax23/Java-FSD_New',
      githurl: 'https://github.com/Rajiilax23/java-fsd',
      
      imgUrl: 'assets/images/z26.jpg',
      tech: 'Core Java and DSA'
    },
    
    {
      id: 12,
      title: 'Railway Crossing Status using Hibernate',
      desc: '',
      livedemo: 'https://github.com/Rajiilax23/Java-FSD_New',
      githurl: 'https://github.com/Rajiilax23/java-fsd',
      
      imgUrl: 'assets/images/z12.png',
      tech: 'Hibernate and mySQL'
    },

    {
      id: 13,
      title: 'Vaccination Center using SpringBoot',
      desc: '',
      livedemo: 'https://github.com/Rajiilax23/Java-FSD_New',
      githurl: 'https://github.com/Rajiilax23/java-fsd',
      
      imgUrl: 'assets/images/z13.png',
      tech: 'SpringBoot and mySQl'
    },

    

  ]
  about2 = `Trainee Associate Software Engineer.
  
  A young passionate Java Full Stack Developer seeking opportunities to join a company that can help me in enhancing my knowledge and skills.
  I am willing to explore a wide variety of opportunities that can help me gain perspective.
  Have good understanding of Java, Hibernate, Bootstrap, Angular, and MYSQL`

  about = "Trainee Associate Software Engineer"

  resumeurl = ""
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Boostrap',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL, MYSQL',
      'progress': '90%'
    },
    {
      'id': '5',
      'skill': 'Hibernate',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'JAVA',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2012',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
  ];
  
skills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }
  education(): Observable<any> {
    return this.educationData;
  }

}
