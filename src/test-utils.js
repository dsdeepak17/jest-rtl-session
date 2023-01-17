import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => { },
    removeListener: () => { },
  }),
});

export function render(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
