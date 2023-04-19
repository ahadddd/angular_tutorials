import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular!';
  password = '';
  correctPass = 'test';
  color = 'green';

  products = [
    {
      sku: 'T-2139',
      name: 'Bottle',
      price: 23
    },
    {
      sku: 'T-4267',
      name: 'Scarf',
      price: 23
    },
  ];




  checkPassword(): boolean {
    if (this.password == this.correctPass) {
      return true;
    }
    else {
      return false;
    }
  }

  addProduct(){
    let prod = {
      sku: 'T-'+Math.floor(Math.random()* 5000).toString(),
      name: 'Dummy Product',
      price: Math.floor(Math.random()* 100)
    }
    this.products.push(prod);
  }

  remove(i: number) {
    this.products.splice(i, 1);
  }

}
