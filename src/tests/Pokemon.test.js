import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getByText('Pikachu');
  const pokemonType = screen.getByTestId('pokemon-type');
  const pokemonWeight = screen.getByTestId('pokemon-weight');
  const pokemonImage = screen.getByRole('img', { alt: 'Pikachu Sprite' });

  expect(pokemonName.innerHTML).toBe('Pikachu');
  expect(pokemonType.innerHTML).toBe('Electric');
  expect(pokemonWeight.innerHTML).toBe('Average weight: 6.0 kg');
  expect(pokemonImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(pokemonImage.alt).toBe('Pikachu sprite');
});

test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
  const { history } = renderWithRouter(<App />);
  const detailLink = screen.getByRole('link', { name: 'More details' });
  userEvent.click(detailLink);
  expect(history.location.pathname).toBe('/pokemon/25');
});

test('Teste se existe um ícone de estrela nos Pokémon favoritados.', () => {
  const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemonIds')) || [];
  const newFavoritePokemon = [...favoritePokemon, 25];
  const newFavoritePokemon2 = [...newFavoritePokemon, 143];
  localStorage.setItem('favoritePokemonIds', JSON.stringify(newFavoritePokemon2));

  renderWithRouter(<App />);
  const detailLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(detailLink);

  const starPokemon1 = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
  const starPokemon2 = screen.getByRole('img', { name: 'Snorlax is marked as favorite' });

  expect(starPokemon1.alt).toBe('Pikachu is marked as favorite');
  expect(starPokemon1.src).toBe('http://localhost/star-icon.svg');

  expect(starPokemon2.alt).toBe('Snorlax is marked as favorite');
  expect(starPokemon2.src).toBe('http://localhost/star-icon.svg');
});
