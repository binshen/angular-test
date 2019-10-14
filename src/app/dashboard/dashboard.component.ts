import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements
  OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, DoCheck {

  user = {
    name: '张三',
    age: 23
  };

  constructor() {
    console.log('00: 构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做');
  }

  ngOnChanges() {
    console.log('01: ngOnChanges执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发，父组件改变传给子组件时)');
  }

  ngOnInit() {
    console.log('02: ngOnInit执行了--- 请求数据一般放在这个里面');
  }

  ngDoCheck() {
    console.log('03: ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
  }

  ngAfterContentInit() {
    console.log('04: ngAfterContentInit执行了---当把内容投影进组件之后调用');
  }

  ngAfterContentChecked() {
    console.log('05: ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
  }

  ngAfterViewInit(): void {
    console.log('06: ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）');
  }

  ngAfterViewChecked() {
    console.log('07: ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
  }

  ngOnDestroy() {
    console.log('08: ngOnDestroy执行了····');
  }

  // 自定义函数
  onClickMe() {
    alert(JSON.stringify(this.user));
  }
}
