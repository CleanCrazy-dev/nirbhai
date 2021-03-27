import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-sellers-home',
  templateUrl: './sellers-home.component.html',
  styleUrls: ['./sellers-home.component.css']
})
export class SellersHomeComponent implements OnInit {

  errMsg:string = '';

  lat: string;
  lng: string;

  address: Object;
  formattedAddress: string;
  streetNumber: string;
  street: string;
  city: string;
  state: string;
  district: string;
  countryShort: string;
  country: string;
  postCode: string;
  phone: string;

  constructor(public zone: NgZone, private router: Router) {}

  ngOnInit(): void { }

  getAddress(place: object) {
    // console.log(place);
    this.address = place['formatted_address'];
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
    this.streetNumber = this.getStreetNumber(place);
    this.street = this.getStreet(place);
    this.city = this.getCity(place);
    this.state = this.getState(place);
    this.district = this.getDistrict(place);
    this.countryShort = this.getCountryShort(place);
    this.country = this.getCountry(place);
    this.postCode = this.getPostCode(place);
    this.phone = this.getPhone(place);
    this.getLocation(place);

    console.log("address = ", this.address);
    console.log("streetNumber = ", this.streetNumber);
    console.log("street = ", this.street);
    console.log("city = ", this.city);
    console.log("state = ", this.state);
    console.log("district = ", this.district);
    console.log("countryShort = ", this.countryShort);
    console.log("postCode = ", this.postCode);
    console.log("phone = ", this.phone);
    console.log("lat = ", this.lat, " : lng = ", this.lng);
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return '';
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }

  getLocation(place) {
    //verify result
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }

    //set latitude, longitude and zoom
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
  }

  gotoPropertyFound() {
    // window.location.href = SERVER_URL + 'sellers/property-found';
    this.router.navigate(['/sellers/property-found'], { queryParams: { 
      lat: this.lat, 
      lng: this.lng, 
      address: this.address,
      city: this.city
     } }
    );
  }

}
