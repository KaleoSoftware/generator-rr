

test('<%= group %> action <%= name %>', actionTest(
  actions.<%= name %>,
  {type: types.<%= type %>},
  '<%= name %>() should have <%= type %> as type'
))