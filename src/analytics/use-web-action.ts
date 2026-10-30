import { usePostHog } from '@posthog/react'

import { actions, placements, type ActionId, type PlacementId } from './actions'

export interface WebsiteActionPlace {
  _id: string
  name: string
}

export function useWebsiteAction() {
  const posthog = usePostHog()

  return (
    actionId: ActionId,
    placement?: PlacementId,
    options?: { place?: WebsiteActionPlace },
  ) => {
    try {
      const breakdowns = [
        // Links about a place carry its immutable _id so clicks stay grouped if its name changes.
        ...(options?.place
          ? [
              {
                key: 'place',
                label: 'Place',
                value_id: options.place._id,
                value_name: options.place.name,
              },
            ]
          : []),
        ...(placement
          ? [
              {
                key: 'placement',
                label: 'Placement',
                value_id: placement,
                value_name: placements[placement],
              },
            ]
          : []),
      ]

      // Send right away: link clicks may leave the page or open another app.
      posthog.capture(
        'website_action',
        {
          action_id: actionId,
          action_name: actions[actionId],
          ...(breakdowns.length > 0 && { breakdowns }),
        },
        { transport: 'sendBeacon', send_instantly: true },
      )
    } catch {
      // Analytics must never change an accepted action's result.
    }
  }
}
