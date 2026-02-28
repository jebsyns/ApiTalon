// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiTalon title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiTalon/i);
    expect(titleElement).toBeInTheDocument();
});
