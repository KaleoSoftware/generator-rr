import React from 'react'
import {connect} from 'react-redux'

const styles = {
  <%= name %>: {

  }
}

const <%= camelCasedName %> = () => (
  <div style={styles.<%= name %>}>
  </div>
)

const mapStateToProps = () => ({
})

export default connect(mapStateToProps)(<%= camelCasedName %>)
