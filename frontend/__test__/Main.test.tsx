import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'node-fetch';
import Main from '../src/Components/Main';

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ message: [2, 3, 5, 7] })
})));

describe('Main', () => {
  it('should render loading when data is being fetched', () => {
    const { getByText,getByTestId, queryByTestId } = render(<Main />);
    
    fireEvent.change(getByTestId('enter-number'), { target: { value: 10 } });
    fireEvent.click(getByTestId('get-data'));

    expect(queryByTestId('loading')).toBeInTheDocument();
  });

  it('should render median of prime numbers when data is fetched successfully', async () => {
    const { getByText, findByText, getByTestId, queryByTestId } = render(<Main />);

    fireEvent.change(getByTestId('enter-number'), { target: { value: 10 } });
    fireEvent.click(getByTestId('get-data'));

    const median = await findByText('Median of Prime numbers are: 2,3,5,7');
    console.log('median', median);
    expect(median).toBeInTheDocument();
  });

  it('should render error message when there is an error fetching data', async () => {
    jest.resetModules();
    jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ error: 'Some error' })
    })));

    const { getByText, findByText } = render(<Main />);

    fireEvent.change(getByText('Enter the number limit:'), { target: { value: 10 } });
    fireEvent.click(getByText('Get data'));

    const error = await findByText('Error: Some error');
    expect(error).toBeInTheDocument();
  });
});
