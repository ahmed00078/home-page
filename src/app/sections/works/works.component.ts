import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  categories = ['Veterinaire', 'Gardien'];
  selectedCategory = 'Veterinaire';

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
