import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit, AfterViewInit  {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.4145318;
  lng = -3.6910836;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  constructor() { }

  ngAfterViewInit() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }
  ngOnInit() {

  }

}
