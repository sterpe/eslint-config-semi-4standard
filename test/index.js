var eslint = require('eslint')
var test = require('tape')
var path = require('path')

var linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, '..', 'eslintrc.json')
})

test('api: lintText', function (t) {
  t.plan(2)
  var result = linter.executeOnText("console.log('hi there')\n\n")
  t.equals(result.results[0].messages[0].message, 'Missing semicolon.')
  result = linter.executeOnText('(function () {\n  return 0;\n}());\n\n')
  t.equals(result.results[0].messages[0].message, 'Expected indentation of 4 space characters but found 2.')
})
