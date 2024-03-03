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
  articles = [
    { title: 'Test Title 1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', image: '/assets/imgs/animal.jpeg' },
    { title: 'Test Title 2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', image: '/assets/imgs/animal7.jpeg' },
    // Add more articles as needed
  ];
}

