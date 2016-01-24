import { Base } from 'yeoman-generator'
import ejs from 'ejs'

export default class ReactReduxGenerator extends Base {
  constructor(...args) {
    super(...args)

    this.conflicter.force = true

    this.argument('name', {type: String, required: true})
    this.argument('actionGroup', {type: String, required: true})
    this.argument('action', {type: String, required: true})
  }

  writing() {
    try {
      let reducerTests = this.fs.read(this.destinationPath('test/reducers/'+this.name+'.spec.js'))
      let headersTemplate = this.fs.read(this.templatePath('headers.js'))
      let testTemplate = this.fs.read(this.templatePath('index.js'))

      // If the actionsGroup is not imported yet, add the import
      if (!reducerTests.match(RegExp('actions\/'+this.actionGroup))) {
        let numberOfImports = reducerTests.match(/from\s\'.+\'/g).length
        let i = 0
        reducerTests = reducerTests.replace(/from\s\'.+\'(?!from\s\'.+\')/g, (match) => {
          if (++i < numberOfImports) return match
          return match +
            '\n' +
            ejs.render(headersTemplate, {actionGroup: this.actionGroup})
        })
      }

      this.fs.write(
        this.destinationPath('test/reducers/'+this.name+'.spec.js'),
        reducerTests + ejs.render(testTemplate, {
          name: this.name,
          actionGroup: this.actionGroup,
          action: this.action
        })
      )
    } catch (e) {
      this.log(e)
    }
  }
}
