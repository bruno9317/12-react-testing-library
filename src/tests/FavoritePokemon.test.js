import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { addPokemonToFavorites } from '../services/pokedexService';

test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
  renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(favoriteLink);
  const mensagem = screen.getByText('No favorite Pokémon found');
  expect(mensagem).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de Pokémon favoritados.', () => {
  addPokemonToFavorites(25);
  addPokemonToFavorites(143);
  renderWithRouter(<App />);
  localStorage.setItem('favoritePokemonIds', 25);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(favoriteLink);
  const PokemonName = screen.getByText('Pikachu');
  const PokemonName2 = screen.getByText('Snorlax');
  expect(PokemonName).toBeInTheDocument();
  expect(PokemonName2).toBeInTheDocument();
});
