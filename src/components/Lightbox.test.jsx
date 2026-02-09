import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Lightbox from './Lightbox';

const images = [{ src: 'a.jpg', alt: 'a' }, { src: 'b.jpg', alt: 'b' }];

test('opens and closes via click and escape', async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  render(<Lightbox open images={images} index={0} onClose={onClose} onNext={vi.fn()} onPrev={vi.fn()} />);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /close lightbox/i }));
  expect(onClose).toHaveBeenCalledTimes(1);
  await user.keyboard('{Escape}');
  expect(onClose).toHaveBeenCalledTimes(2);
});
