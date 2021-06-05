import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaltab',
  templateUrl: './animaltab.component.html',
  styleUrls: ['./animaltab.component.scss']

})
export class AnimalTabComponent implements OnInit {

  constructor() { }
  selectedanimalItem = -1;

  animalItem = [
    {
      name: "Large",
      image: "./assets/images/animal1.svg",
    },
    {
      name: "Small",
      image: "./assets/images/animal2.svg",
    },
    {
      name: "Share",
      image: "./assets/images/animal3.svg",
    },
    {
      name: "Bands",
      image: "./assets/images/animal4.svg",
    }
  ]

  selectecountryItem = -1;
  countryItem = [
    {
      name: "India",
      shares: "7 Shares • Sheep",
      size: "",
      basket: "",
      price: "110.00",
      image: "./assets/images/india-flag.png",
    },
    {
      name: "Iraq",
      shares: "7 Shares • Sheep",
      price: "110.00",
      size: "",
      basket: "",
      image: "./assets/images/iraq-flag.png",
    },
    {
      name: "India",
      shares: "",
      size: "Small",
      basket: "Added to basket",
      price: "110.00",
      image: "./assets/images/india-flag.png",
    },
    {
      name: "Pakistan",
      shares: "",
      size: "Large",
      basket: "Added to basket",
      price: "110.00",
      image: "./assets/images/pakistan-flag.png",
    }
  ]

  ngOnInit(): void {

  }


}
