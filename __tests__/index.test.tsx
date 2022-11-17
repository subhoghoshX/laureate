import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom'

describe('Home', () => {
	render(<Home />);

	it('renders header input', () => {
		const input = screen.getByPlaceholderText('Paste tweet link here')

		expect(input).toBeInTheDocument();
	})
})