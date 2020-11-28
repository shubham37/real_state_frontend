import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-read-review',
  templateUrl: './read-review.component.html',
  styleUrls: ['./read-review.component.css']
})
export class ReadReviewComponent implements OnInit {
  reviews: Object[];

  constructor(private api: ApiService, private route: ActivatedRoute) { 
    this.reviews = [
      1,2,3,1,2,3,1,2,3
    ];
    console.log('in cinsn');
  }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    console.log('sin onit')
  }

  onShow(event: any) {
    debugger
    console.log(event);
  }


}
