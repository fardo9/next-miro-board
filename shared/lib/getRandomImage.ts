const IMAGES = [
  '/placeholders/01.svg',
  '/placeholders/02.svg',
  '/placeholders/03.svg',
  '/placeholders/04.svg',
  '/placeholders/05.svg',
  '/placeholders/06.svg',
  '/placeholders/07.svg',
  '/placeholders/08.svg',
  '/placeholders/09.svg',
  '/placeholders/10.svg',
]

export const getRandomImage = () =>
  IMAGES[Math.floor(Math.random() * IMAGES.length)]
