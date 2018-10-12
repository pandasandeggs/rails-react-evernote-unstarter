import React, { Component } from 'react';

class Note extends Component {


  render() {
    console.log("passed to Note", this.props)
    return (
      <div className="col-sm-9">
        <h3 ClassName="note-title">{this.props.title} Find the title</h3>
        <p ClassName="note-body">{this.props.body}
        Gummies apple pie pastry sesame snaps soufflé. Toffee halvah jelly I love I love halvah chupa chups. Toffee fruitcake toffee caramels biscuit liquorice. Toffee powder gingerbread wafer bonbon jelly beans.
        Croissant cotton candy candy canes I love I love cake jelly. Oat cake icing biscuit I love toffee soufflé candy marshmallow dragée. I love I love gummi bears.
        Lemon drops halvah liquorice pastry marshmallow donut I love. Candy canes carrot cake carrot cake lemon drops dessert lollipop halvah croissant tootsie roll. Gingerbread I love I love cotton candy soufflé gummies. Tootsie roll sweet I love chocolate sweet.
        Gummies apple pie pastry sesame snaps soufflé. Toffee halvah jelly I love I love halvah chupa chups. Toffee fruitcake toffee caramels biscuit liquorice. Toffee powder gingerbread wafer bonbon jelly beans.
        Croissant cotton candy candy canes I love I love cake jelly. Oat cake icing biscuit I love toffee soufflé candy marshmallow dragée. I love I love gummi bears.
        Lemon drops halvah liquorice pastry marshmallow donut I love. Candy canes carrot cake carrot cake lemon drops dessert lollipop halvah croissant tootsie roll. Gingerbread I love I love cotton candy soufflé gummies. Tootsie roll sweet I love chocolate sweet.
        Gummies apple pie pastry sesame snaps soufflé. Toffee halvah jelly I love I love halvah chupa chups. Toffee fruitcake toffee caramels biscuit liquorice. 

        </p>
        <br/>
        <button className="main-button1">Edit</button>
        <button className="main-button2">Share</button>
      </div>
    )
  }
}

export default Note;
