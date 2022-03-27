import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Author } from 'src/app/models/author.model';
import { MovieService } from 'src/app/services/movie.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: Movie = {
    title: '',
    description: '',
    author: {
      id: null,
      name: ''
    }
  };
  authors: Author[] = [];
  submitted = false;
  constructor(private movieService: MovieService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors() {
    this.authorService.getAll().subscribe({
      next: (res) => {
        console.log(res);        
      }, error: (err) => {
        console.error(err.message)
        throw new Error(err.message);
      }
    });
    
  }
  saveMovie(): void {
    this.submitted = false;
    const data = {
      title: this.movie.title,
      description: this.movie.description,
      author: this.movie.author
    }
    this.movieService.create(data)
      .subscribe(
        {
          next: (res) => {
            console.log(res)
          }, error: (err) => console.error(err)
        })
  }
  newMovie(): void {
    this.submitted = false;
    this.movie = {
      title: '',
      description: '',
      author: {
        name: ''
      }
    };
  }
}
