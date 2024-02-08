import { heroes } from '../data/heros'

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['Marvel Comics', 'DC Comics']
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} in not valid`)
  }

  return heroes.filter((heroe) => heroe.publisher === publisher)
}
