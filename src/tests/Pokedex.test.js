import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading.innerHTML).toBe('Encountered Pokémon');
});

test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
  renderWithRouter(<App />);
  const buttonNext = screen.getByRole('button', { name: 'Próximo Pokémon' });

  const PokemonName1 = screen.getByText('Pikachu');
  expect(PokemonName1).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName2 = screen.getByText('Charmander');
  expect(PokemonName2).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName3 = screen.getByText('Caterpie');
  expect(PokemonName3).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName4 = screen.getByText('Ekans');
  expect(PokemonName4).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName5 = screen.getByText('Alakazam');
  expect(PokemonName5).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName6 = screen.getByText('Mew');
  expect(PokemonName6).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName7 = screen.getByText('Rapidash');
  expect(PokemonName7).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName8 = screen.getByText('Snorlax');
  expect(PokemonName8).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName9 = screen.getByText('Dragonair');
  expect(PokemonName9).toBeInTheDocument();
  userEvent.click(buttonNext);

  const PokemonName10 = screen.getByText('Pikachu');
  expect(PokemonName10).toBeInTheDocument();
  userEvent.click(buttonNext);
});

test('Teste se é mostrado apenas um Pokémon por vez;', () => {
  renderWithRouter(<App />);
  const PokemonName1 = screen.getAllByTestId('pokemon-name');
  expect(PokemonName1).toHaveLength(1);
});
test('Teste se é mostrado apenas um Pokémon por vez;', () => {
  renderWithRouter(<App />);
  const filterButtons = screen.getAllByTestId('pokemon-type-button');
  expect(filterButtons).toHaveLength(7);
  expect(filterButtons[0].innerHTML).toBe('Electric');
  expect(filterButtons[1].innerHTML).toBe('Fire');
  expect(filterButtons[2].innerHTML).toBe('Bug');
  expect(filterButtons[3].innerHTML).toBe('Poison');
  expect(filterButtons[4].innerHTML).toBe('Psychic');
  expect(filterButtons[5].innerHTML).toBe('Normal');
  expect(filterButtons[6].innerHTML).toBe('Dragon');
});

test('Teste se a Pokédex contém um botão para resetar o filtro.', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: 'All' });
  const buttonNext = screen.getByRole('button', { name: 'Próximo Pokémon' });

  expect(buttonAll.innerHTML).toBe('All');

  userEvent.click(buttonAll);
  userEvent.click(buttonNext);

  expect(screen.getByText('Charmander')).toBeInTheDocument();
});
