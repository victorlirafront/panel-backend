import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieItem from '../../src/components/MovieItem';

describe('Profile Component', () => {
  it('renders a Details text', () => {
    render(
      <MovieItem
        average="5"
        id="3"
        image=""
        onClick={() => 1 + 1}
        title="test"
        vote={4}
      />,
    );

    const heading = screen.getByText('Details');
    expect(heading).toBeInTheDocument();
  });
});
