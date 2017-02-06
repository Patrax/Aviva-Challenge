import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

	name;

	@Output('logout')
	loggingOut: EventEmitter<any> = new EventEmitter();

  constructor() {
  	this.name = localStorage.getItem('name');
  }

  ngOnInit() {
  }

  fbLogout(){
  	console.log('EVENT SENT');
  	this.loggingOut.emit(null);
  }

}
