import { Base } from 'yeoman-generator'

export default class ReactReduxGenerator extends Base {
  constructor(...args) {
    super(...args)

    this.argument('name', {type: String, required: true})
    this.argument('group', {type: String, required: false})

    this.camelCasedName = this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  writing() {
    const destinationPath = !this.group ?
      'src/components' :
      'src/components/'+this.group
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(destinationPath+'/'+this.camelCasedName+'.js'),
      {name: this.name}
    )
  }
}
