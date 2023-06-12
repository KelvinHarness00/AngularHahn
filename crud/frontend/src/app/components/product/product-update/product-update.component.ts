import { Component, OnInit , NgModule} from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  product: Product={
    id:null,
    name:'',
    price:null
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.productService.readById(id).subscribe(product =>{
        this.product = product;
      },
      (error) => {
        console.log('Erro ao ler produto:', error);
      })
      }
      console.log(this.product);
  }

  updateProduct(): void {

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
