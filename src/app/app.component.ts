import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud Employees';

  employees =[
    {'name': 'Benny', position: 'Manager', email: 'Be@Gmail.com'},
    {'name': 'Mia Khalifa', position: 'Secretary', email: 'Mk@Gmail.com'},
    {'name': 'Raymond', position: 'Designer', email: 'RR@Gmail.com'},
    {'name': 'Charles', position: 'Programmer', email: 'CHR@Gmail.com'}
  ];

  model:any = {};
  model2:any = {};
  msg:string = '';
  hideUpdate:boolean = true;


  addEmployee():void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = ' Record is successfully Added';
  }

  deleteEmployee(i):void {
    var answer = confirm('Are you sure to deleted ?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = ' Record is successfully Delete';
    }
  }

  /* This contain Index */
  myValue;

  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i === j ){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record is successfully Updated';
      }
    }
    this.hideUpdate  = true;
  }

  closeAlert(){
    this.msg = '';
  }

}
