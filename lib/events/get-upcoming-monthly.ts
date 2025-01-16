import {events} from '@/data/events'

import { filter, groupBy } from 'lodash'

export const getUpcomingMonthly = async () => {
  let eventData = events
  // Filter out events from previous months
  eventData = filter(
    events,
    (e:any) =>
      new Date(new Date(e.end.substring(0, 7)).toISOString().substring(0, 7)) >=
      new Date(new Date().toISOString().substring(0, 7))
  )
  return groupBy(events, (e:any) => e.start?.substring(0, 7))
}

export default (req:any, res:any) => getUpcomingMonthly().then(m => res.json(m))