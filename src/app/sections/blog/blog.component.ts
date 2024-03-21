import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  categories = ['santé', 'formation', 'comportement', 'nutrition']; 
  selectedCategory = 'santé';

  articles = [
    { category: 'santé', title: 'Article 1 Santé', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 1 sur la santé.', image: '/assets/imgs/cat-01.jpg' },
    { category: 'santé', title: 'Article 2 Santé', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 2 sur la santé.', image: '/assets/imgs/cat-02.jpg' },
    { category: 'santé', title: 'Article 3 Santé', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 3 sur la santé.', image: '/assets/imgs/cat-03.jpg' },
    { category: 'formation', title: 'Article 1 Formation', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 1 sur la formation.', image: '/assets/imgs/cat-04.jpg' },
    { category: 'formation', title: 'Article 2 Formation', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 2 sur la formation.', image: '/assets/imgs/cat-05.jpg' },
    { category: 'formation', title: 'Article 3 Formation', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 3 sur la formation.', image: '/assets/imgs/cat-06.jpg' },
    { category: 'comportement', title: 'Article 1 Comportement', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 1 sur le comportement.', image: '/assets/imgs/cat-07.jpg' },
    { category: 'comportement', title: 'Article 2 Comportement', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 2 sur le comportement.', image: '/assets/imgs/cat-08.jpg' },
    { category: 'comportement', title: 'Article 3 Comportement', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 3 sur le comportement.', image: '/assets/imgs/cat-05.jpg' },
    { category: 'nutrition', title: 'Article 1 Nutrition', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 1 sur la nutrition.', image: '/assets/imgs/cat-01.jpg' },
    { category: 'nutrition', title: 'Article 2 Nutrition', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 2 sur la nutrition.', image: '/assets/imgs/cat-07.jpg' },
    { category: 'nutrition', title: 'Article 3 Nutrition', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi mollitia est Contenu de l\'article 3 sur la nutrition.', image: '/assets/imgs/cat-04.jpg' },
  ];

  get filteredArticles() {
    return this.articles.filter(article => article.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
  
}

