const getFixedTariff = (value: string) => {
  return value ? value.replace(/0+(?=.)/, '') : ''
}

export default getFixedTariff
