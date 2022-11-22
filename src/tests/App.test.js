import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém um heading h2 com o texto About Pokédex;', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });

  expect(aboutLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se a página contém as informações sobre a Pokédex;', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading.innerHTML).toBe('About Pokédex');
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);

  const paragraph1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  const paragraph2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
  expect(paragraph1).toBeInTheDocument();
  expect(paragraph2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex.', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);

  const imageDoAbout = screen.getByRole('img');
  expect(imageDoAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
