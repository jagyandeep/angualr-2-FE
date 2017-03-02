import{Component, OnInit} from '@angular/core';
import{NgFor} from '@angular/common';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import{orderForm} from './orderForm.interface';
import{productService} from './product.service';
// import{ProductDetailComponent} from './productDetails/product.detail.component';

@Component({
  selector:'order-form',
  templateUrl:'./order-form.component.html',
  providers:[productService]
})

export class orderFormComponent implements OnInit{
  public myForm: FormGroup // Form Model
  constructor(
    private _productService : productService,
    private _fb: FormBuilder
  ){}


  title = 'Order Form';
  custName_label = "Customer Name : ";
  custEmail_label = "Customer Email";
  dob_label = "Date of birth";
  addItems_label = "AddItems";

  ngOnInit(){
    // Initialize form here
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.myForm = this._fb.group({
      cstName:['',[Validators.required]],
      cstEmail:['',[Validators.required,Validators.pattern(emailRegex)]],
      cstDob:[''],
      ordersList: this._fb.array([
        this.initOrders(),
      ])

    });
  //  this._productService.getProducts().subscribe(data=>this.response = data);
  }
  initOrders(){
    //initialize our Products
    return this._fb.group({
      order_product:['',[Validators.required]],
      product_qty:['',[Validators.required]]
    });
  }
  addItems(){
    // add order list to the list
   const control = <FormArray>this.myForm.controls['ordersList'];
   control.push(this.initOrders());
    /*const len = this.products.length+1;
    this.products.push(len);*/
  }
  save(model: orderForm) {
        // call API to save customer
        console.log();
  }
}
