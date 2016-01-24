import { Base } from 'yeoman-generator'

export default class ReactReduxGenerator extends Base {
  constructor(...args) {
    super(...args)

    this.argument('name', {type: String, required: true})
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/reducers/'+this.name+'.js'),
      {name: this.name}
    )

    this.fs.copyTpl(
      this.templatePath('test.js'),
      this.destinationPath('test/reducers/'+this.name+'.spec.js'),
      {name: this.name}
    )
  }
}
