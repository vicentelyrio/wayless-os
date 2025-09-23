import Dayjs from 'dayjs/esm/index.js'

import 'dayjs/esm/locale/pt'
import 'dayjs/esm/locale/en'

import customParseFormat from 'dayjs/esm/plugin/customParseFormat'
import localizedFormat from 'dayjs/esm/plugin/localizedFormat'
import localeData from 'dayjs/esm/plugin/localeData'
import minMax from 'dayjs/esm/plugin/minMax'
import duration from 'dayjs/esm/plugin/duration'
import weekday from 'dayjs/esm/plugin/weekday'
import weekOfYear from 'dayjs/esm/plugin/weekOfYear'
import isBetween from 'dayjs/esm/plugin/isBetween'
import timezone from 'dayjs/esm/plugin/timezone'
import utc from 'dayjs/esm/plugin/utc'
import updateLocale from 'dayjs/esm/plugin/updateLocale'

export const dayjs = Dayjs

dayjs.extend(localizedFormat)
dayjs.extend(localeData)
dayjs.extend(minMax)
dayjs.extend(duration)
dayjs.extend(customParseFormat)
dayjs.extend(weekday)
dayjs.extend(weekOfYear)
dayjs.extend(isBetween)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(updateLocale)
dayjs.tz.guess()

dayjs().localeData()

dayjs.updateLocale('pt', {
  monthsShort: [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ]
})
