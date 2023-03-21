const getFixedTariff = (value: string) => {
  return value.replace(/^0+/, '0')
}

export default getFixedTariff
