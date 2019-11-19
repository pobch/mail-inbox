# E-mail Inbox

## Result

You can see the result in this link: https://mail-inbox.netlify.com/

## How to run in localhost

1. `yarn install`
2. `yarn start`

## How to run all tests

- `yarn test`

## Features

- Clicking a mail item will toggle its `background-color` and its mail icon
- Clicking a trash icon will remove the mail item from the list

## Resposive design details

- The breakpoint is `576px` screen width. All screens more than this breakpoint are considered Desktop. Otherwise, they are considered Mobile.
- The Desktop layout has max-width limitation, i.e. all elements in the page will not expand more than `768px` width.
- The difference between Desktop and Mobile are the following.
  - Header's `color`, `background-color`, `font-size` and `box-shadow`
  - `font-weight` of each mail's subject
  - Icon size, `margin` and `padding`

## Extra notes

- This project uses TypeScript with React.js framework
- There are both unit test and integration test, e.g. `App.test.tsx` is an integration test whereas `initialState.test.ts` is a unit test
- Data from backend is mocked in `data.json` file
