var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');

var TripSaveLoad = React.createClass({
  getInitialState: function(event){
    return({
      viewMode: false,
      dummyTrip: [
       {name: "West Coast Trip", location: "CA"},
       {name: "Tex Mex", location: "TX"},
       {name: "Big Apple", location: "NY"}
   ]})
 },

  saveTrip: function(event){
    this.props.dispatch(actions.addTrip());
  },

  viewTrips: function(event){
    this.setState({
      viewMode: true
    });
  },

  loadTrip: function(event){
    this.setState({
      viewMode: false
    });
  },

  render: function(){
    if (this.state.viewMode == false){
    return (
    <div>
      <input type="button" name="save" value="Save Trip" />   <input onClick={this.viewTrips} type="button" name="load" value="View Saved Trips/Load" />
    </div>)}

    else {
      return (<div>
        <div>
          <input type="button" name="save" value="Save Trip" />   <input onClick={this.viewTrips} type="button" name="load" value="View Saved Trips/Load" />
        </div>
        <div className="saved-display">
          {this.state.dummyTrip.map((trip) =>
          {return <div className="saved-trips">
              <div className="trip-name">{trip.name}</div>
              <div className="trip-location">{trip.location}</div>
              <input type="button" name="load" value="Load" onClick={this.loadTrip} />
          </div>})}
        </div>
      </div>)
    }
  }
});

var mapStateToProps = function(state, props) {
    return {null:null
    };
};

var Container = connect(mapStateToProps)(TripSaveLoad);

module.exports = Container;
