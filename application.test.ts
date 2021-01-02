import { add, addAll } from './application'

it ('add(x, y) should add two numbers together', () => {
  const x = 3
  const y = 9
  const answer = add(x, y)
  expect(answer).toEqual(12)
})


it ('addAll([a, b, c, d]) should add all the numbers provided', () => {
  const a = 2
  const b = 6
  const c = 8
  const d = 74

  const answer = addAll([a, b, c, d])
  
  expect(answer).toEqual(90)
})