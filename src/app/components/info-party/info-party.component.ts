import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-info-party',
  templateUrl: './info-party.component.html',
  styleUrls: ['./info-party.component.scss']
})
export class InfoPartyComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.5822099;
  lng = -3.5816842;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14,
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
