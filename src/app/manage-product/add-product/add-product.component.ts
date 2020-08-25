import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

form = {
  label: null,
  description: null ,
  quantity: null,
  price: null
};
  constructor() { }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.form);
  }


}
