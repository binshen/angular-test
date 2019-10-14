import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>个人主页地址：<a href="{{mySite}}" target="_blank">点击跳转</a></h2>
    `
})
export class AboutComponent {
  title = 'About';
  mySite = 'http://www.baidu.com';
}
