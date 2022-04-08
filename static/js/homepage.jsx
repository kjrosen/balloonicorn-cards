'use strict';

function Homepage() {
  return (
  <React.Fragment>
    Welcome, user! Would you like to play a game? :) <br/>
    <a href="/cards">Click here to go to the cards.</a> <br/>
    <img src="/static/img/balloonicorn.jpg"/>
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
