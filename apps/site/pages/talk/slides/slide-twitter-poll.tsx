import { Slide } from 'components/Slide'
import React from 'react'
import { memo } from 'react'

export default memo(() => {
  return (
    <Slide
      theme="purple"
      steps={[
        [
          {
            type: 'image',
            variant: 'centered',
            image: require('../images/twitter-poll.png').default,
          },
        ],
      ]}
    />
  )
})
