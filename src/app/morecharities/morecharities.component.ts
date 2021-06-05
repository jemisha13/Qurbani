import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morecharities',
  templateUrl: './morecharities.component.html',
  styleUrls: ['./morecharities.component.scss']
})
export class MorecharitiesComponent implements OnInit {
 
  constructor() { }

  charitysItem = [
    {
      id: "human-appeal",
      image: "./assets/images/charity-img1.png",
      name: "Human Appeal",
      leftGivers: "1600",
      rightGivers: "1400",
      bgcolor: "#7332AA",
      progressbar: "90"
    },
    {
      id: "islamic-help",
      image: "./assets/images/charity-img2.png",
      name: "Islamic Help",
      leftGivers: "400",
      rightGivers: "50",
      bgcolor: "#DF3144",
      progressbar: "60"
    },
    {
      id: "muslim-aid",
      image: "./assets/images/charity-img3.png",
      name: "Muslim Aid",
      leftGivers: "1024",
      rightGivers: "1030",
      bgcolor: "#93C23E",
      progressbar: "50"
    },
    {
      id: "islamic-relief",
      image: "./assets/images/charity-img4.png",
      name: "Islamic Relief",
      leftGivers: "4482",
      rightGivers: "3610",
      bgcolor: "#3C9CD9",
      progressbar: "25"
    },
    {
      id: "skt-welfare",
      image: "./assets/images/charity-img5.png",
      name: "SKT Welfare",
      leftGivers: "287",
      rightGivers: "123",
      bgcolor: "#E22929",
      progressbar: "40"
    }
  ]

  ngOnInit(): void { 
    $(document).ready(function() {
      $(".progress-bar").width(0);
      var ariaValuenow = $(".progress").attr('data-value');
      ariaValuenow = ariaValuenow+"%";
        $(".progress-bar").animate({ width: ariaValuenow }, 'slow');
     });
  }

}
