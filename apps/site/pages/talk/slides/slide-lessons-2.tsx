import { Slide } from 'components/Slide'
import React from 'react'
import { memo } from 'react'

export default memo(() => {
  return (
    <Slide
      title="Takeaways"
      theme="pink"
      steps={[
        [
          {
            type: 'callout',
            content: (
              <>
                We shouldn't make our API surfaces more complex in the name of
                performance.
              </>
            ),
          },
          // {
          //   type: 'split-horizontal',
          //   content: [
          //     {
          //       type: 'image',
          //       image: require('../images/popover.jpg').default,
          //     },
          //   ],
          // },
        ],
      ]}
    />
  )
})
