import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mortgageArr: any[] = [
    { title: "Mortgage Offer", img: "../../../assets/mortgage/mb_couple_highrise_img_444x280.jpg" },
    { title: "Types of mortgages", img: "../../../assets/mortgage/types_of_mortage.jpg" },
    { title: "Understanding mortgages", img: "../../../assets/mortgage/understandingfmortgages_444x280.jpg" },
    { title: "First-time home buyer", img: "../../../assets/mortgage/firsttimehomebuyer_444x280.jpg" },
    { title: "Buying your next property", img: "../../../assets/mortgage/movingup_444x280.jpg" },
    { title: "New to Canada Mortgage", img: "../../../assets/mortgage/ntc_444x280.jpg" },
    { title: "Switch to and Save", img: "../../../assets/mortgage/switchandsave_444x280.jpg" },
    { title: "Access my home equity", img: "../../../assets/mortgage/heloc_444x280.jpg" },
    { title: "Increase your Mortgage", img: "../../../assets/mortgage/increasingfmortgages_444x280.jpg" },
    { title: "Renew your Mortgage", img: "../../../assets/mortgage/renew_444x280.jpg" },
    { title: "Protect the ones your love", img: "../../../assets/mortgage/protecttheonesyoulove_444x280.jpg" },
    { title: "Mortgage Calculators", img: "../../../assets/mortgage/howmuchcaniafford_444x280.jpg" }
  ]

  applySubTitleClicked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  applySubTitleClick() {
    this.applySubTitleClicked = !this.applySubTitleClicked;
  }

}
