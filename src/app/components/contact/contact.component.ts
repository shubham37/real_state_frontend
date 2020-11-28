import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formGroup;
  showLoader: boolean = false;
  message: String= '';

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      mobile: '',
      property_id: '',
      message: ''
    });
  }

  onSubmit(contactData) {
    this.showLoader= true;
    this.api.customerQuery(contactData).subscribe(
      data => {
        this.showLoader = false;
        console.log(data)
        this.message="You got an mail."
      },
      error => {
        this.showLoader = false;
        console.log(error);
      }
    )
    // this.route.navigate(['/search'], { queryParams: { value: 'popular' } });
  }


}
