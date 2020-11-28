import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroup;
  public reviews: Object[] = [];

  constructor(private route: Router, private formBuilder: FormBuilder, private api: ApiService) { 
    this.formGroup = this.formBuilder.group({
      query: '',
    });
  }

  ngOnInit(): void {
    this.api.getReviews().subscribe(
      data => {
        this.reviews= data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
  counter(i: number) {
    return new Array(i);
}

  onSearch(queryData) {
    this.route.navigate(['/search'], { queryParams: { value: queryData.query } });
  }

}
