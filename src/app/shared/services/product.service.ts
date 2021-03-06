import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {GenericService} from "./generic.service";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }
  getAllProducts(): Observable<Array<Product>> {
    const url = environment.baseUrl + '/products/all';
    return this.http.get<Array<Product>>(url);
  }
  getProductById(id): Observable<Product> {
    const url = environment.baseUrl + '/products/' + id;
    return this.http.get<Product>(url);
  }
  addProduct(product: Product) {
     const url = environment.baseUrl + '/products/add';
     return this.http.post(url, product);
  }
  deleteProductById(id) {
    const url = environment.baseUrl + '/products/delete/' + id;
    return this.http.delete(url, id);
  }
}
