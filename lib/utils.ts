import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUSDPrice(
  price: number,
  options = {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  }
) {
  let USDollar = new Intl.NumberFormat('en-US', options);

  return USDollar.format(price);
}
