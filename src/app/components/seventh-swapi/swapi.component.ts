import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'swapi',
  templateUrl: './swapi.component.html',
})
export class SwapiComponent implements OnInit {
    films!: any[];

    constructor(private swapiService: SwapiService) { }

    ngOnInit() {
      this.swapiService.getFilms().subscribe((data) => {
        this.films = data.results;
        console.log(this.films)
      });
    }
}



