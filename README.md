# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Auto Open Browser

ng serve -o

https://ithelp.ithome.com.tw/articles/10195338?sc=iThelpR

decorator typescript

ng g c servers

> create component under app folder
> auto add to app.component.ts

### hint

ng g c warningAlert

> create component

component :

selector: '[header-component]',

> 代表 attribute <div header-component> </div>

selector: '.header-component',

> 代表 class

### string interpolation

{{變數}}

### property binding

[disabled]="allow"

### event binding

(click)="onCreateServer"
教學
https://josephdotw.blogspot.com/2017/03/angular-2data-binding.html

### two way Binding

ngModel 應該是 directive

### Directive

\*ngif

> - strucutre directive => add or remove element

> attribute directive => change element they pleace on

# Data Binding
* View Encapsulation CSS 作用於當下的TEMPLATE (Shadow Dom 技術 )  可以設定套用成全部
* Custom Event Binding => 傳入參數 需要引入 EventEmitter , new EventEmitter<Recipe>()
* Custom Property Binding => 傳入參數 需要引入 Input , Output 
* Local Reference => Element 上面掛#tag , only use in template pass element value into function ,not typescript code
* ViewChild => 用於typescript code , 需要引入 ViewChild ,用法相同於local reference , 這兩種方法都是在避免傳入資訊給上下層 不用特別設定two way binding , 只在最後的時候送出值
#js by value ,by reference
https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html
