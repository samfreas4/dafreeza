import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

test('header renders all nav links and footer has tel/mail links', () => {
  render(<BrowserRouter><Header /><Footer /></BrowserRouter>);
  ['Home', 'Services', 'Gallery', 'About', 'Contact'].forEach((label) => expect(screen.getByRole('link', { name: label })).toBeInTheDocument());
  expect(screen.getByRole('link', { name: '(850) 555-0123' })).toHaveAttribute('href', expect.stringContaining('tel:'));
  expect(screen.getByRole('link', { name: /powellspropertyservices@example.com/i })).toHaveAttribute('href', expect.stringContaining('mailto:'));
});
