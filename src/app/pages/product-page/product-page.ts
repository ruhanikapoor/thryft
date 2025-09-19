import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Listing } from '../../../interfaces/listing.interface';
import { MOCK_LISTINGS } from '../../data/mockData';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage implements OnInit{
  private route = inject(ActivatedRoute);
  productDetails! : Listing;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productDetails = MOCK_LISTINGS.find(p => p.id === productId)!;
    }
  }

}
