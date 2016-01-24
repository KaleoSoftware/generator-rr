import test from 'tape-catch'
import {reducerTest} from 'tape-redux'

import <%= name %> from '../../src/reducers/<%= name %>'

test('<%= name %> reducer', reducerTest(
  <%= name %>,
  {},
  () => ({type: null}),
  {},
  'An empty action should return inital state'
))