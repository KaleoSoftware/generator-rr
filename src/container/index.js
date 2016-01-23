import { Base } from 'yeoman-generator'

export default class ReactReduxGenerator extends Base {
  constructor(...args) {
    super(...args)

    this.argument('name', {type: String, required: true})

    this.camelCasedName = this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/containers/'+this.camelCasedName+'.js'),
      {name: this.name, camelCasedName: this.camelCasedName}
    )
  }
}
