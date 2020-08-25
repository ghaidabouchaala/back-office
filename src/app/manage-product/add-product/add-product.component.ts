import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/product";
import swal from 'sweetalert';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      data => swal("Good job!", "Product was added", "success"),
      error => swal("Error!", "The request failed!", "error")
  );
  }


}
