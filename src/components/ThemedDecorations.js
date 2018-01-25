import React from 'react'

class ThemedDecoration extends React.Component{
  render() {

    const addChildProp = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            className: this.props.theme
          }))

    return (
      <div>
        {addChildProp}
      </div>
    )
  }
}

export default ThemedDecoration
