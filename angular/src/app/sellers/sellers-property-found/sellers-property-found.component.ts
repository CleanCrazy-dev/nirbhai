import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { BasicLookupService } from '../../_services/basiclookup.service';

interface Community {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sellers-property-found',
  templateUrl: './sellers-property-found.component.html',
  styleUrls: ['./sellers-property-found.component.css']
})
export class SellersPropertyFoundComponent implements OnInit {

  errMsg: string;
  selectedwhy: string = '';
  communityList: Community[];
  insertedcustomer: string = '';
  insertedphone: string = '';
  insertedemail: string = '';

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  lat: number = 0;
  lng: number = 0;
  address: string;
  city: string;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  mapInitializer() {
    this.coordinates = new google.maps.LatLng(this.lat, this.lng);

    this.mapOptions = {
      center: this.coordinates,
      zoom: 8,
    };

    this.marker = new google.maps.Marker({
      position: this.coordinates
    });

    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    this.marker.setMap(this.map);
  }

  marker = new google.maps.Marker({
    position: this.coordinates
  });

  customerName = new FormControl('', [Validators.required]);

  getCustomerNameErrorMessage() {
    if (this.customerName.hasError('required')) {
      return 'You must enter your Name';
    }
  }

  phone = new FormControl('', [Validators.required]);

  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter your Phone Number';
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private route: ActivatedRoute, private basicLookupService: BasicLookupService, private router: Router) { }

  ngOnInit(): void {
    this.lat = Number(this.route.snapshot.queryParamMap.get('lat'));
    this.lng = Number(this.route.snapshot.queryParamMap.get('lng'));
    this.address = this.route.snapshot.queryParamMap.get('address');
    this.city = this.route.snapshot.queryParamMap.get('city');

    console.log(this.lat, this.lng);

    this.getSubdivisionNameListByCity();
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  getSubdivisionNameListByCity() {
    this.basicLookupService.getSubdivisionNameListByCity(this.city).subscribe(
      data => {
        this.communityList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getHomeValue() {
    if ((this.insertedcustomer == '') || (this.insertedphone == '') || (this.insertedemail == '')) return;

    if(this.getErrorMessage() != '') return;

    this.router.navigate(['/sellers/get-home-value'], { queryParams: { 
      city: this.city
     } }
    );
  }

}
