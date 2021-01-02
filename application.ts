
export const add = (x: number, y: number) => {
  return x + y
}

export const addAll = (numbers: number[]) => {
  let result = 0
  numbers.forEach(number => {
    result = add(result, number)
  })
  return result
}
