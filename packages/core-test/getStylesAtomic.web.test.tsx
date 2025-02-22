import { beforeAll, expect, test } from 'vitest'

import config from '../config-default-node'
import { createTamagui, getStylesAtomic } from '../core/src'

beforeAll(() => {
  createTamagui(config.getDefaultTamaguiConfig())
})

test(`should expand webkit user-select`, () => {
  expect(
    getStylesAtomic({
      // @ts-ignore
      userSelect: 'none',
    })
  ).toMatchInlineSnapshot(`
    [
      {
        "identifier": "_ussel-none",
        "property": "userSelect",
        "pseudo": undefined,
        "rules": [
          "._ussel-none{user-select:none;-webkit-user-select:none;}",
        ],
        "value": "none",
      },
    ]
  `)
})

test(`should handle decimal placement differently`, () => {
  const out = getStylesAtomic({
    left: 1.11,
    right: 11.1,
  })

  expect(out[0].identifier).toBe(`_l-1d0t11px1a`)
  expect(out[1].identifier).toBe(`_r-11d0t1px1a`)
})

test(`should turn columnGap into gap-column`, () => {
  const out = getStylesAtomic({
    columnGap: 10,
  })
  expect(out[0].rules.includes(`column-gap:10px`))
})

// test(`should be fast`, () => {
//   // need to compare it in a cpu-insensitive way, so compare to common operations

//   const start0 = performance.now()

//   function baseline() {
//     return new Array().fill(1000).map(() => {
//       return [...new Set([`${Math.random() * Math.random() * Math.random()}`])]
//     })
//   }

//   for (let i = 0; i < 100; i++) {
//     baseline()
//   }

//   const end0 = performance.now() - start0

//   console.log('end0', end0)

//   const start = performance.now()

//   function run() {
//     getStylesAtomic({
//       backgroundColor: 'red',
//       width: 100,
//       height: 200,
//       scale: 2,

//       $gtLg: {
//         backgroundColor: 'green',
//       },

//       hoverStyle: {
//         margin: 20,
//         padding: 20,
//       },
//     })
//   }

//   for (let i = 0; i < 100; i++) {
//     run()
//   }

//   console.log('took', performance.now() - start)
// })
