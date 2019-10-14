import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user = {
    name: '张三',
    age: 23
  };

  onClickMe() {
    alert(JSON.stringify(this.user));
  }
}
