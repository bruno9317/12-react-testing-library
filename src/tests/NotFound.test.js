import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('É exibido na tela um h2 com o texto Page requested not found;', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/xablau');
  });
  const mensagem = screen.getByRole('heading', { level: 2 });
  expect(mensagem.innerHTML).toBe('Page requested not found');
});

test('É exibido na tela um h2 com o texto Page requested not found;', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/xablau');
  });
  const image = screen.getByRole('img', { name: 'Pikachu crying because the page requested was not found' });
  console.log(image.src);
  expect(image).toBeInTheDocument();
  expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
