import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 projects:any = [
    {
      id: 2,
      title: 'Workflow Automation & Notification Engine',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/Rajiilax23/event-driven-workflow-engine',
      
      imgUrl: 'assets/images/z26.jpg',
      tech: 'Python, FastAPI, PostgreSQL'
    },
    
    {
      id: 12,
      title: 'Paste Bin Lite',
      desc: '',
      livedemo: 'https://pastebin-lite-gd3vyfjq7-rajalakshmis-projects-9f43aa65.vercel.app/',
      githurl: 'https://github.com/Rajiilax23/pastebin-lite_',
      
      imgUrl: 'assets/images/z12.png',
      tech: 'Next.js, TypeScript, Upstash Redis,Vercel Deployment'
    },

    {
      id: 13,
      title: 'Book Finder App',
      desc: '',
      livedemo: 'https://codesandbox.io/p/devbox/bookfinder-lrd8jj',
      githurl: 'https://github.com/Rajiilax23/React_BookFinder_App',
      
      imgUrl: 'assets/images/z13.png',
      tech: 'React, Typescript, javascript, Tailwind'
    },

    

  ]
  about2 = 'Python Backend Engineer with 3 years of experience building and operating high-volume batch processing and data-driven backend systems for a US-based trading platform. Specialized in Python, SQL, FastAPI, job scheduling, and production-grade automation. Experienced in developing business logic, handling large data pipelines, monitoring critical workflows, and resolving failures under strict SLA timelines. Strong in backend engineering, system reliability, and scalable data processing.'

  about = "Python Backend Developer"

  resumeurl = ""
  skillsData: any = [
    {
      'id': '1',
      'skill': 'Programming: Python, HTML, CSS',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Database: MySQL, PostgreSQL, MongoDB',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'Framework: FastAPI',
      'progress': '85%'
    },
    
    {
      'id': '4',
      'skill': 'Tools: Git, Docker, Splunk, Tableau, Control-M, Remedy',
      'progress': '90%'
    },
    {
      'id': '5',
      'skill': 'Cloud: AWS',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Others: Linux, Cron Jobs',
      'progress': '85%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `.`,
      'institution': ''
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
