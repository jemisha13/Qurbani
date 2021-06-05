import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  sliderItem = [
    {
      id: "get-started",
      image: "./assets/images/slider-img1.svg",
      text: "An innovative way to fulfil your Qurbani obligation",
      button: "Get Started",
      bgcolor: "#E6D031"
    },
    {
      id: "check-livestock",
      image: "./assets/images/slider-img2.svg",
      text: "Real-time global inventory of livestock",
      button: "Check Livestock",
      bgcolor: "#36CC7C"
    },
    {
      id: "give-now",
      image: "./assets/images/slider-img3.svg",
      text: "3 step simple checkout with no sign up",
      button: "Give Now",
      bgcolor: "#EF716D"
    }
  ]

  ngOnInit(): void {

  }

}
