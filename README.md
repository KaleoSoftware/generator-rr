generator-react-redux
==========

## Install
Yo (command line tool) is required. Install it by running this command:
`npm install yo --global`

Install Generator RR
`npm install generator-rr --save-dev`

## Commands

###Create an action

`yo rr:action GROUP NAME`

Example:
`yo rr:action tags create_tag`

will create this action:
```javascript
import * as types from '../constants/ActionTypes'

export function create() {
  return {
    type: types.CREATE_TAG
  }
}
```

And this constant in ActionTypes.js:
`export const CREATE_TAG = 'CREATE_TAG'`

### Create Component

`yo rr:component NAME [GROUP]`

Example:
`yo rr:action TagDescription tags`

will create this component in the components/tags folder:
```javascript
import React from 'react'

const style = {
  TagDescription: {
  }
}

export default () => (
  <div style={styles.TagDescription}>
  </div>
)
```

### Create Container

`yo rr:container NAME`

### Create Reducer

`yo rr:reducer NAME`

### Create Reducer Test

`yo rr:reducer-test NAME ACTION_GROUP ACTION`


## Motivation

## Composition

## Thanks!! :)

## License
MIT
