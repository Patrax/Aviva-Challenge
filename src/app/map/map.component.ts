import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 0.0;
  lng: number = 0.0;

  constructor() {}

  setPosition(position){
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
	}
  
  ngOnInit(){
  	if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
  	}
  }

}