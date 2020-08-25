import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log("zz",data);
      });
  }

}
