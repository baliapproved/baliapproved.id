import type { Places } from './places.schema'

export function getLastVisited(place: Places[number]) {
  return place.visitedAt?.reduce<string | undefined>(
    (latest, date) => (!latest || date > latest ? date : latest),
    undefined,
  )
}

export function sortByLastVisited(places: Places) {
  return places
    .map((place) => ({ place, lastVisited: getLastVisited(place) }))
    .sort((a, b) => {
      if (a.lastVisited === b.lastVisited) return 0
      if (!a.lastVisited) return 1
      if (!b.lastVisited) return -1
      return a.lastVisited < b.lastVisited ? 1 : -1
    })
    .map(({ place }) => place)
}
