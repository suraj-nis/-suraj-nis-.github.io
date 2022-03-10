import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
/* imports all of the variables we need from other files */

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './product-list.component.html', /* Uses html file that we created */

  styleUrls: ['./product-list.component.css'] /* Uses css file to get file we created*/
})
export class ProductListComponent implements OnInit, OnDestroy {
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
 
  pageTitle: string = 'Product List'; /* Creates all the variables we need to navigate the product page */

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;
  

  private _listFilter: string = '';

  get listFilter(): string { /* gets the sting we will use to make a filtered lsit */

    return this._listFilter;
  }
  set listFilter(value: string) { /* performs the filter method using the string */

    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = []; /* identifies filtered products as this data type we made */

  products: IProduct[] = []; /* identifies products as this data type we made */

  constructor(private productService: ProductService, private tutorialService: TutorialService ) {} /* creates a service we can use */

  performFilter(filterBy: string): IProduct[] { /* only displays which litter is used in the course names */
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void { /* toggles the image*/
    this.showImage = !this.showImage;
  }

  ngOnInit(): void { /* gets the products from the other cmpoenent by subscribing*/
    this.retrieveTutorials();
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  
  

  ngOnDestroy(): void { /* unsubscribes from database */
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void /* whenever the user clicks the stars it will give that information */{
    this.pageTitle = 'Product List: ' + message;
  }
}
