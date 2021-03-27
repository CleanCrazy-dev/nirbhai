import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { PropertyService } from '../../_services/property.service';
import { RESOURCE_URL } from '../../_services/endPoint';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  providers: [
    NgbCarouselConfig
  ]
})
export class PropertyDetailComponent implements OnInit {

  resourceURL = RESOURCE_URL;
  errMsg: string;

  City: string;
  ListingKeyNumeric: string;

  public propertyArr = {};
  public resourceArr = [];

  currentIndex: any = -1;
  showFlag: any = false;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService, config: NgbCarouselConfig) { 
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.City = this.route.snapshot.paramMap.get('City');
    this.ListingKeyNumeric = this.route.snapshot.paramMap.get('ListingKeyNumeric');

    if(this.ListingKeyNumeric != null)
      this.getPropertyById();
  }

  ngAfterViewInit() {}

  getPropertyById() {
    this.propertyService.getPropertyById(this.City, this.ListingKeyNumeric).subscribe(
      data => {
        this.propertyArr = data[0];

        for(var i = 1; i <= this.propertyArr['PhotosCount']; i++) {
          this.resourceArr.push({image: this.resourceURL + 'large/' + this.propertyArr['ListingKeyNumeric'] + "_" + i + ".jpeg"});
        }
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? (parseInt(x[1]) == 0 ? '' : '.' + x[1]) : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }
  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
