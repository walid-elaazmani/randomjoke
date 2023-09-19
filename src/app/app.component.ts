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

  constructor(private jokeGeneratorService: JokegeneratorService){}

  fetchJoke(): void{
    this.jokeGeneratorService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    })
  }
}
