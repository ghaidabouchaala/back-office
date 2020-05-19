import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/product";
import swal from 'sweetalert';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = new Product();
  product_id;
  edit = false;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('id');
    if (this.product_id > 0) {
      this.productService.getProductById(this.product_id).subscribe(
        data => {
          this.product = data;
          this.edit = true;
        },
        error => this.router.navigateByUrl('/products')
      );
    }
  }
  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      data => {
        if (this.product_id > 0) {
          swal("Good job!", "Product was edited", "success");
        } else {
          swal("Good job!", "Product was added", "success");
        }
      },
      error => swal("Error!", "The request failed!", "error")
  );
  }


}
