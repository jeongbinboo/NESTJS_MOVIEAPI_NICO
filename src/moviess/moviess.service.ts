import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/createMovie.dto';
import { UpdateMovieDTO } from './dto/updateMovie.dto';
import { Movie } from './entities/moviess.entity';

@Injectable()
export class MoviessService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    console.log(typeof id);
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException();
    }
    return movie;
  }

  deleteOne(id: number): Movie[] {
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return this.movies;
  }

  createOne(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDTO) {
    const target: Movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...target, ...updateData });
  }
}
