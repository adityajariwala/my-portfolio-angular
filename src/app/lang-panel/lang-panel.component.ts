import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-panel',
  templateUrl: './lang-panel.component.html',
  styleUrls: ['./lang-panel.component.css']
})
export class LangPanelComponent implements OnInit {

  icons = ['devicon-android-plain', 'devicon-angularjs-plain',
  'devicon-bootstrap-plain', 'devicon-c-plain',
  'devicon-cplusplus-plain', 'devicon-csharp-plain',
  'devicon-css3-plain', 'devicon-git-plain',
  'devicon-html5-plain', 'devicon-java-plain',
  'devicon-javascript-plain', 'devicon-linux-plain',
  'devicon-mysql-plain', 'devicon-nodejs-plain',
  'devicon-python-plain', 'devicon-typescript-plain'];

  iconsText = ['devicon-android-plain-wordmark colored', 'devicon-angularjs-plain colored',
  'devicon-bootstrap-plain-wordmark colored', 'devicon-c-plain colored',
  'devicon-cplusplus-plain colored', 'devicon-csharp-plain colored',
  'devicon-css3-plain-wordmark colored', 'devicon-git-plain-wordmark colored',
  'devicon-html5-plain-wordmark colored', 'devicon-java-plain-wordmark colored',
  'devicon-javascript-plain colored', 'fa fa-linux',
  'devicon-mysql-plain-wordmark colored', 'devicon-nodejs-plain-wordmark colored',
  'devicon-python-plain-wordmark colored', 'devicon-typescript-plain colored'];

  numbers = [];

  constructor() {
    this.numbers = Array<number>(16).fill(1).map((x, i) => i);
  }

  ngOnInit() {
  }
}
