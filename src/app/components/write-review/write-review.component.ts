import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {

  reviewFormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewFormGroup = this.formBuilder.group({
      name: '',
      number: '',
      comment: ''
    });
  }

  onSubmit(reviewData) {
    let propertyid = window.location.pathname.split('/')[2]
    console.log(reviewData);
    console.log(propertyid);
    this.api.writeReview(propertyid, reviewData).subscribe(
      data => {
        console.log(data)
        window.location.reload(true);
      },
      error => {
        console.log(error);
      }
    )
  }

}
