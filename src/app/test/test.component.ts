import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'Test';
  sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];

  imageUrl = 'https://www.baidu.com/img/bd_logo1.png?where=super'

  clickMessage = '';
  inputValue = '';

  onClickMe() {
    this.clickMessage = '菜鸟教程!';
  }

  onKey(value: string) {
    this.inputValue += value + ' | ';
  }
}
