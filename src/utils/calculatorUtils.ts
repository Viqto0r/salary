export const calculateSalary = (tariff: number, hours: 165 | 176 | 154) => {
  return +(tariff * hours).toFixed(2)
}

export const calculateNight = (tariff: number, hours: 49 | 56) => {
  return +(tariff * 0.4 * hours).toFixed(2)
}

export const calculateTax = (summ: number) => {
  return +(summ * 0.13).toFixed(2)
}

export const calculateHarmfulness = (summ: number, harmfulness: number) => {
  return +(summ * harmfulness).toFixed(2)
}

export const calculateDirty = (
  tariff: number,
  hours: 165 | 176 | 154,
  nightsHours: 49 | 56,
  harmfulnessPercent: number
) => {
  const salary = calculateSalary(tariff, hours)
  const night = calculateNight(tariff, nightsHours)
  const harmfulness = calculateHarmfulness(salary, harmfulnessPercent)
  return salary + night + harmfulness
}

export const calculateTotal = (summ: number, tax: number) => {
  return summ - tax
}
