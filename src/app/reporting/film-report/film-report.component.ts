import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Film } from 'src/app/shared/film/film.model';
import { FilmService } from 'src/app/shared/film/film.service';

@Component({
  selector: 'app-film-report',
  templateUrl: './film-report.component.html',
  styleUrls: ['./film-report.component.css']
})
export class FilmReportComponent {
  films: Film[] = [];
  dataSource;
  displayedColumns: string[] = ['film_id', 'title', 'rental_duration', 'rental_rate', 'replacement_cost', 'rating'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  today;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.today = new Date();
    this.filmService.getFilms().subscribe((res) => {
      this.films = res;
      this.dataSource = new MatTableDataSource<Film>(this.films);
      this.dataSource.paginator = this.paginator;
    });
  }

  printPage() {
    var a = window.open(''); 
    a.document.write('<html>'); 
    a.document.write('<body><p>' + this.today + '</p><table><tr><th>Film ID</th><th>Title</th><th>Rental Duration</th><th>Rental Rate</th><th>Replacement Cost</th><th>Rating</th><tr>'); 
    this.films.forEach(element => {
      a.document.write('<tr><th>' + element.film_id + '</th><th>' + element.title + '</th><th>' + element.rental_duration + '</th><th>' + element.rental_rate + '</th><th>' + element.replacement_cost + '</th><th>' + element.rating + '</th><tr>'); 
    });
    a.document.write('</table></body></html>'); 
    a.document.close(); 
    a.print(); 
  }

}
