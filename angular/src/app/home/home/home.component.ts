import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SERVER_URL, RESOURCE_URL } from '../../_services/endPoint';
declare var $: any;

// import {
//   SwiperComponent,
//   SwiperDirective,
//   SwiperConfigInterface,
//   SwiperScrollbarInterface,
//   SwiperPaginationInterface
// } from 'ngx-swiper-wrapper';

import { PropertyService } from '../../_services/property.service';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   observer: true,
//   direction: 'horizontal',
//   threshold: 50,
//   spaceBetween: 5,
//   slidesPerView: 1,
//   centeredSlides: true
// };

@Component({
  selector: 'app-home-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [
  //   NgbCarouselConfig
  // ]
})
export class HomeComponent implements OnInit {

  public errMsg:string = "";
  public RESOURCE_URL:string = RESOURCE_URL;

  // public images = ['../../assets/home-sale-lg.jpg', '../../assets/home-rent-lg.jpg', '../../assets/home-commercial-lg.jpg'];

  // public links = ['For Sale', 'For Rent', 'Commercial'];
  // public activeLink = this.links[0];

  // public isForSale: boolean = true;
  // public isForRent: boolean = false;
  // public isCommercial: boolean = false;

  public show: boolean = true;
  public type: string = 'component';
  public property_search_input:string = '';

  // public slides = [
  //   'https://picsum.photos/700/250/?image=27',
  //   'https://picsum.photos/700/250/?image=22',
  //   'https://picsum.photos/700/250/?image=61',
  //   'https://picsum.photos/700/250/?image=23',
  //   'https://picsum.photos/700/250/?image=24',
  //   'https://picsum.photos/700/250/?image=26',
  //   'https://picsum.photos/700/250/?image=41',
  //   'https://picsum.photos/700/250/?image=28',
  //   'https://picsum.photos/700/250/?image=21',
  //   'https://picsum.photos/700/250/?image=20',
  //   'https://picsum.photos/400/250/?image=75'
  // ];

  public disabled: boolean = false;

  // public config: SwiperConfigInterface = {
  //     direction: 'horizontal',
  //     loop: false,
  //     slidesPerView: 3.5,
  //     keyboard: true,
  //     mousewheel: true,
  //     scrollbar: false,
  //     navigation: true,
  //     pagination: true,
  //     spaceBetween: 20
  // };

  // public onIndexChange(index: number): void {
  //   console.log('Swiper index: ', index);
  // };

  // public onSwiperEvent(event: string): void {
  //   console.log('Swiper event: ', event);
  // };

  public ourListingArr = [];

  serverURL = SERVER_URL;

  lat: string;
  lng: string;

  address: Object;
  city: string;

  constructor(private propertyService: PropertyService, private router: Router) { 
    // customize default values of carousels used by this component tree
    // config.interval = 5000;
    // config.keyboard = true;
    // config.pauseOnHover = false;
    // config.showNavigationArrows = false;
    // config.showNavigationIndicators = false;
  };

  ngOnInit(): void {
    this.propertyService.getOurListing().subscribe(
      data => {
        this.ourListingArr = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  };

  addCommas(nStr) {
    // console.log(nStr);
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? (parseInt(x[1]) == 0 ? '' : '.' + x[1]) : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  };

  // selAction(link): void {
  //   this.activeLink = link;
    
  //   if(link == "For Sale") {
  //     this.isForSale = true;
  //     this.isForRent = false;
  //     this.isCommercial = false;
  //   } else if (link == "For Rent") {
  //     this.isForSale = false;
  //     this.isForRent = true;
  //     this.isCommercial = false;
  //   } else {
  //     this.isForSale = false;
  //     this.isForRent = false;
  //     this.isCommercial = true;
  //   }
  // };

  // propertySearch() {
  //   console.log(this.property_search_input);

  //   window.location.href = SERVER_URL + 'property?PageAction=searchresult&city=' + this.property_search_input;
  // };

  // gotoSection(sel: string) {
  //   const el = document.getElementById(sel + '_section');
  //   console.log("scroll = ", el.offsetTop);

  //   window.scroll({ 
  //     top: el.offsetTop, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });
  // };

  gotoSearchList() {
    window.location.href = this.serverURL + "buyers/calgary-listing";
  }

  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.city = this.getCity(place);
    this.getLocation(place);
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
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
    this.router.navigate(['/sellers/property-found'], { queryParams: { 
      lat: this.lat, 
      lng: this.lng, 
      address: this.address,
      city: this.city
     } }
    );
  }
  
  gotoCalgaryList(tile_num: number) {
    // console.log(tile_num);
    this.router.navigate(['/home/property'], { queryParams: { 
      PageAction: "searchresult",
      tile_num: tile_num,
     } }
    );
  }

}