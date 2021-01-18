import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-footer',
  templateUrl: './social-footer.component.html',
  styleUrls: ['./social-footer.component.css']
})
export class SocialFooterComponent implements OnInit {

  icons = ['fa fa-github-square',
           'fa fa-linkedin-square',
           'fa fa-envelope-square'];

  numbers = [];

  constructor() { this.numbers = Array<number>(7).fill(1).map((x, i) => i); }

  ngOnInit () {
  }

  onClick (n: number) {
    switch (n) {
      case 0:
        window.open('https://github.com/adityajariwala', '_blank');
        break;
      case 1:
        window.open('https://www.linkedin.com/in/aditya-jariwala', '_blank');
        break;
      case 2:
        window.open('mailto:ajariwala24@gmail.com?subject=From%20your%20website:%20(add%20subject%20here)', '_blank');
        break;
    }
  }

  getResume () {
    window.open('/assets/resume.pdf', '_blank');
  }

}
