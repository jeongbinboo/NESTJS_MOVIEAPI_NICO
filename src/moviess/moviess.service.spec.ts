import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviessService } from './moviess.service';

describe('MoviesService', () => {
  let service: MoviessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviessService],
    }).compile();

    service = module.get<MoviessService>(MoviessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GetAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('GetOne', () => {
    it('should return a movie', () => {
      service.createOne({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('DeleteOne', () => {
    it('deletes a movie', () => {
      service.createOne({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const beforeDel = service.getAll();
      service.deleteOne(1);
      const afterDel = service.getAll();
      expect(afterDel.length).toBeLessThan(beforeDel.length);
    });
  });
});
