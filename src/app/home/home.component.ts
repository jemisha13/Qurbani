import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'QG-home';
  constructor() { }
  selectedCharityItem=-1;
  countriesItem = [
    {
      name: "Countries",
      number: "24"
    },
    {
      name: "Meals",
      number: "4000"
    },
    {
      name: "Qurbani",
      number: "700"
    },
  ]
  charitysItem = [
    {
      id: "human-appeal",
      image: "./assets/images/charity-img1.png",
      activeImage: "./assets/images/charity-img1-active.png",
    },
    {
      id: "islamic-help",
      image: "./assets/images/charity-img2.png",
      activeImage: "./assets/images/charity-img2-active.png",
    },
    {
      id: "grt",
      image: "./assets/images/charity-img3.png",
      activeImage: "./assets/images/charity-img3-active.png",
    },
    {
      id: "muslim",
      image: "./assets/images/charity-img4.png",
      activeImage: "./assets/images/charity-img4-active.png",
    },
    {
      id: "skt-welfare",
      image: "./assets/images/charity-img5.png",
      activeImage: "./assets/images/charity-img5-active.png",
    },
    {
      id: "ummah",
      image: "./assets/images/charity-img6.png",
      activeImage: "./assets/images/charity-img6-active.png",
    }
  ]


  ngOnInit(): void {
    
  }
  
}
