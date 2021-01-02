import { add } from './application'

it ('add(x, y) should add two numbers together', () => {
  const x = 3
  const y = 9
  const answer = add(x, y)
  expect(answer).toEqual(12)
})

// TODO: Write test for adding multiple values