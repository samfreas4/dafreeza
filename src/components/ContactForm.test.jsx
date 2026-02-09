import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('blocks empty submit and succeeds on valid input', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.click(screen.getByRole('button', { name: /send request/i }));
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();

  await user.type(screen.getByLabelText(/name/i), 'Jordan');
  await user.type(screen.getByLabelText(/phone or email/i), 'jordan@example.com');
  await user.type(screen.getByLabelText(/message/i), 'Need cleanup and small repairs.');
  await user.click(screen.getByRole('button', { name: /send request/i }));
  expect(await screen.findByRole('status')).toHaveTextContent(/quote request has been received/i);
});
