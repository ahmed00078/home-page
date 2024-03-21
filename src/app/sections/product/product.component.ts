import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  categories = ['chien', 'chat', 'poisson', 'accessoires', 'pharmacie', 'tous'];
  selectedCategory = 'chien';
  products = [
    // Add 5 products for each category
    { category: 'chien', name: 'Product 1', price: 20.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chien', name: 'Product 2', price: 25.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chien', name: 'Product 3', price: 15.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chien', name: 'Product 4', price: 30.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chien', name: 'Product 5', price: 35.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chat', name: 'Product 6', price: 22.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chat', name: 'Product 7', price: 27.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chat', name: 'Product 8', price: 18.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chat', name: 'Product 9', price: 33.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'chat', name: 'Product 10', price: 28.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'poisson', name: 'Product 11', price: 24.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'poisson', name: 'Product 12', price: 19.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'poisson', name: 'Product 13', price: 28.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'poisson', name: 'Product 14', price: 32.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'poisson', name: 'Product 15', price: 21.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'accessoires', name: 'Product 16', price: 26.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'accessoires', name: 'Product 17', price: 31.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'accessoires', name: 'Product 18', price: 23.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'accessoires', name: 'Product 19', price: 29.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'accessoires', name: 'Product 20', price: 17.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'pharmacie', name: 'Product 21', price: 30.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'pharmacie', name: 'Product 22', price: 20.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'pharmacie', name: 'Product 23', price: 25.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'pharmacie', name: 'Product 24', price: 22.00, imageUrl: '/assets/imgs/product.jpg' },
    { category: 'pharmacie', name: 'Product 25', price: 27.00, imageUrl: '/assets/imgs/product.jpg' },
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  filterByCategory(products: any[], category: string): any[] {
    if (!category || category === '') {
      return products;
    }
    return products.filter((product) => product.category === category);
  }
}
