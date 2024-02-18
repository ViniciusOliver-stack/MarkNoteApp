/* eslint-disable prettier/prettier */
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dataFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'America/Sao_Paulo',
})

export const formtDateFromMS = (ms: number) => dataFormatter.format(ms)
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
