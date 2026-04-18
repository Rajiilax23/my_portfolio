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
  about2 = 'Results-driven Site Reliability Engineer with 3+ years of experience in supporting a large-scale US financial services platform. Delivered a 70% reduction in manual toil through Python-automated Kubernetes pod lifecycle management, maintained 97.9% SLA compliance across 500+ batch jobs processing 13M+ daily financial transactions, and reduced MTTR by 30–40% through proactive observability and alerting. Skilled across the full SRE stack — Python automation, Docker & Kubernetes, CI/CD pipelines, Terraform IaC, Prometheus/Grafana/Splunk monitoring, and Disaster Recovery. AWS Certified Cloud Practitioner with a strong passion for AI-driven operations and platform reliability engineering.'

  about = "Site Reliability Engineer"

  resumeurl = ""
  skillsData: any = [
    {
      'id': '1',
      'skill': 'Languages: Python, Bash/Shell Scripting, SQL, YAML, JSON',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Database: PostgreSQL, MySQL, MongoDB, Oracle',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'Tools: Kubernetes, Docker,Jenkins, Terraform, Ansible, Helm',
      'progress': '85%'
    },
    
    {
      'id': '4',
      'skill': 'Observability: Prometheus, Grafana, Splunk, ELK, CloudWatch',
      'progress': '90%'
    },
    {
      'id': '5',
      'skill': 'Cloud: AWS (EC2, S3, Lambda, CloudWatch, IAM, VPC)',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'AI: LLM Integration, AIOps, Prompt Engineering, OpenAI APIs',
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
