import { usePostHog } from '@posthog/react'

import { actions, placements } from './actions'

type ActionId = keyof typeof actions
type PlacementId = keyof typeof placements

export function useWebsiteAction() {
  const posthog = usePostHog()

  return (actionId: ActionId, placement?: PlacementId) => {
    try {
      posthog.capture('website_action', {
        action_id: actionId,
        action_name: actions[actionId],
        ...(placement && {
          breakdowns: [
            {
              key: 'placement',
              label: 'Placement',
              value_id: placement,
              value_name: placements[placement],
            },
          ],
        }),
      })
    } catch {
      // Analytics must never change an accepted action's result.
    }
  }
}
