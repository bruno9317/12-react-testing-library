import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();

  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeLink);
  expect(history.location.pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');
});

test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;', () => {
  const { history } = renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(favoriteLink);
  expect(history.location.pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/xablau');
  });
  const image = screen.getByRole('img', { name: 'Pikachu crying because the page requested was not found' });
  expect(image).toBeInTheDocument();
});
