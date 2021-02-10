import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './App';


const mockStore = configureMockStore();
const store = mockStore({
  stockPrice: { stockSymbol: 'FACE' }
});

test('renders home page', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>);
  const header = screen.getByText(/Stocks for you/i);
  expect(header).toBeInTheDocument();
});
