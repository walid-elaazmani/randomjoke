import { Component } from '@angular/core';
import { JokesService } from './service/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomjokegenerator';
  joke: string = '';
  category : string = '';
  
  

  constructor(private jokeService: JokesService){}

  fetchJoke(): void{
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
      this.category = data.category;

      (document.getElementById("category") as HTMLInputElement).innerHTML =`category: ${this.category}`;
    })
  }
}

