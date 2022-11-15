export const filterNumbers = (array, largerThan) => {
  const smallerThan = (value) => value <= largerThan;
  return array.filter(smallerThan) 
}

/* all above 25 removed*/
