import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders about us section', () => {
  render(<App />);
  const aboutUsElement = screen.getByText(/about us/i);
  expect(aboutUsElement).toBeInTheDocument();
});

test('renders popular features section', () => {
  render(<App />);
  const featuresElement = screen.getByText(/popular features/i);
  expect(featuresElement).toBeInTheDocument();
});

test('renders our team section', () => {
  render(<App />);
  const teamElement = screen.getByText(/our team/i);
  expect(teamElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  const footerElement = screen.getByText(/all rights reserved/i);
  expect(footerElement).toBeInTheDocument();
});
