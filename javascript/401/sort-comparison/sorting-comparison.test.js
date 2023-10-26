'use strict';

const { Movies } = require('./movies');
const { sortTitle, sortYear, compareYear, compareTitle } = require('./sort-comparisons');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can can compare movies by year', () => {
    const a = Movies[0];
    const b = Movies[1];

    expect(compareYear(a,b)).toEqual(14);
  });

  it('can can compare movies by title', () => {
    const a = Movies[0];
    const b = Movies[1];

    expect(compareTitle(a,b)).toEqual(-1);
  });
});
