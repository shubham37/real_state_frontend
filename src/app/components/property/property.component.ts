import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property: Object= {};
  reviews: Object[];

  constructor(private api: ApiService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.property_id;
    this.api.getProperty(id).subscribe(
      data => {
        this.property = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );

    this.api.getPropertyReview(id).subscribe(
      data => {
        console.log(data);
        this.reviews = data;
      },
      error => {
        console.log(error);
      }
    )

  }

  onClick(id) {
    localStorage.setItem('id', id);
  }

}
