import{Component, OnInit} from '@angular/core';
import{NgFor} from '@angular/common';
import{orderForm} from './orderForm';
import{productService} from './product.service';
// import{ProductDetailComponent} from './productDetails/product.detail.component';

@Component({
  selector:'order-form',
  templateUrl:'./order-form.component.html',
  providers:[productService]
})

export class orderFormComponent implements OnInit{
  title = 'Order Form';
  custName_label = "Customer Name : ";
  custEmail_label = "Customer Email";
  dob_label = "Date of birth";
  addItems_label = "AddItems";
  productLabel = "Products";
  productQtyLabel = "Quantity";
  products = [1];
  response = {};
  validEmail={};
  constructor(
    private _productService : productService
  ){}

  ngOnInit(){
    this._productService.getProducts().subscribe(data=>this.response = data);
  }
  addItems(){
    const len = this.products.length+1;
    this.products.push(len);
  }
  /*validateEmail(email:string){
    this._productService.validateEmail(email).subscribe(data=>this.validEmail = data);
  }*/

}
