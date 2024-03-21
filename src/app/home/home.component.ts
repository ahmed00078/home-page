import { Component } from '@angular/core';
import {HeroComponent} from "../sections/hero/hero.component";
import {ContactComponent} from "../sections/contact/contact.component";
import {NumbersComponent} from "../sections/numbers/numbers.component";
import {ServicesComponent} from "../sections/services/services.component";
import {BlogComponent} from "../sections/blog/blog.component";
import {TestimonialsComponent} from "../sections/testimonials/testimonials.component";
import {GalleryComponent} from "../sections/gallery/gallery.component";
import { WorksComponent } from "../sections/works/works.component";
import { GardComponent } from "../sections/gard/gard.component";
import { CardComponent } from "../sections/card/card.component";
import { Blog0Component } from "../sections/blog0/blog0.component";
import { Contact0Component } from "../sections/contact0/contact0.component";
import { ProductComponent } from "../sections/product/product.component";
import { HeaderComponent } from "../sections/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeroComponent,
        ContactComponent,
        NumbersComponent,
        ServicesComponent,
        BlogComponent,
        TestimonialsComponent,
        GalleryComponent,
        WorksComponent,
        GardComponent,
        CardComponent,
        Blog0Component,
        Contact0Component,
        ProductComponent,
        HeaderComponent
    ]
})
export class HomeComponent {
    focus: any;
    focus1: any;
    constructor() { }
  
    ngOnInit() {
    }
}
