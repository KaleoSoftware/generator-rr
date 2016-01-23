import { Base } from 'yeoman-generator'
import ejs from 'ejs'

export default class ReactReduxGenerator extends Base {
  constructor(...args) {
    super(...args)

    this.conflicter.force = true

    this.argument('group', {type: String, required: true})
    this.argument('name', {type: String, required: true})

    this.type = this.name.replace(/([A-Z])/g, (x) => ('_'+x.toLowerCase())).toUpperCase()
  }

  writing() {
    try {
      let actionTests = this.fs.read(this.destinationPath('test/actions/'+this.group+'.spec.js'))
      let actions = this.fs.read(this.destinationPath('src/actions/'+this.group+'.js'))

      let actionTestTemplate = this.fs.read(this.templatePath('test.js'))
      let actionTemplate = this.fs.read(this.templatePath('action.js'))

      this.fs.write(
        this.destinationPath('test/actions/'+this.group+'.spec.js'),
        actionTests + ejs.render(actionTestTemplate, {
          group: this.group,
          name: this.name,
          type: this.type
        })
      )

      this.fs.write(
        this.destinationPath('src/actions/'+this.group+'.js'),
        actions + ejs.render(actionTemplate, {
          name: this.name,
          type: this.type
        })
      )
    } catch (e) {
      this.fs.copyTpl(
        this.templatePath('newTest.js'),
        this.destinationPath('test/actions/'+this.group+'.spec.js'), {
          group: this.group,
          name: this.name,
          type: this.type
        }
      )

      this.fs.copyTpl(
        this.templatePath('newAction.js'),
        this.destinationPath('src/actions/'+this.group+'.js'), {
          name: this.name,
          type: this.type
        }
      )
    }

    let actionTypes = this.fs.read(this.destinationPath('src/constants/ActionTypes.js'))
    let newActionTemplate = this.fs.read(this.templatePath('actionType.js'))
    this.fs.write(
      this.destinationPath('src/constants/ActionTypes.js'),
      actionTypes + ejs.render(newActionTemplate, {
        type: this.type
      })
    )
  }
}
