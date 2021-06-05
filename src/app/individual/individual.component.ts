import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $(".progress-bar").width(0);
      var ariaValuenow = $(".progress").attr('data-value');
      ariaValuenow = ariaValuenow+"%";
        $(".progress-bar").animate({ width: ariaValuenow }, 'slow');
     });
  }

}
