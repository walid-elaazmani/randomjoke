import { Component } from '@angular/core';
import { JokegeneratorService } from './joke/jokegenerator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomjokegenerator';
  joke: string = '';
  category : string = '';
  
  

  constructor(private jokeService: JokegeneratorService){}

  fetchJoke(): void{
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
      this.category = data.category;

      (document.getElementById("category") as HTMLInputElement).innerHTML =`category: ${this.category}`;
    })
  }
}

