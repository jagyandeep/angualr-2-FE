import { Component,Input,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{productService} from '../product.service';
@Component({
  selector: 'product-detail',
  templateUrl: './product.detail.component.html'
})

export class ProductDetailComponent{
  productLabel = "Products";
  productQtyLabel = "Quantity";
  constructor(
    private _productService : productService
  ){}
  response = {};
  @Input('group')
  public productForm: FormGroup;
  ngOnInit(){
    this._productService.getProducts().subscribe(data=>this.response = data);
  }
}
