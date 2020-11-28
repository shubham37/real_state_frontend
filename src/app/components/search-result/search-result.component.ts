import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public properties: Object[];
  query: String='';
  size_range: Object[];
  bhk_range: Object[];
  price_range: Object[];

  default_size = 0;
  default_price = 0;
  default_bhk = 0;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { 
    this.properties = [];
    this.size_range = [
      {'id':1, 'value':'Under 1000 Sq ft.'},
      {'id':2, 'value':'1000 - 1500 Sq ft.'},
      {'id':3, 'value':'Above 1500 Sq ft.'}
    ];

    this.bhk_range = [
      {'id':1, 'value':'1 BHK'},
      {'id':2, 'value':'2 BHK'},
      {'id':3, 'value':'3 BHK'}
    ];

    this.price_range = [
      {'id':1, 'value':'Under 100000 Rs.'},
      {'id':2, 'value':'100000 - 150000 Rs.'},
      {'id':3, 'value':'Above 150000 Rs.'}
    ];

  }

  ngOnInit(): void {
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    this.query = urlParameters.value;
    this.api.SearchQuery(urlParameters).subscribe(
      data => {
        this.properties = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );

    if (urlParameters.size != undefined && urlParameters.size != null) {
      this.default_size = urlParameters.size
    }

    if (urlParameters.price != undefined && urlParameters.price != null) {
      this.default_price = urlParameters.price
    }

    if (urlParameters.bhk != undefined && urlParameters.bhk != null) {
      this.default_bhk = urlParameters.bhk
    }

  }

  sizeChange(size) {
    this.default_size = size;
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    urlParameters.size = size;
    this.router.navigate(['/search'], { queryParams: urlParameters }).then(
      () => window.location.reload()
    );
  }

  priceChange(price) {
    this.default_price = price;
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    urlParameters.price = price;
    this.router.navigate(['/search'], { queryParams: urlParameters }).then(
      () => window.location.reload()
    );
  }


  bhkChange(bhk) {
    this.default_bhk = bhk;
    const urlParameters = Object.assign({}, this.route.snapshot.queryParams); 
    urlParameters.bhk = bhk;
    this.router.navigate(['/search'], { queryParams: urlParameters }).then(
      () => window.location.reload()
    );
  }

  onChange(event) {
    this.router.navigate(['/search'], { queryParams: { value: event.target.value } }).then(
      () => window.location.reload()
    );
  }
}
