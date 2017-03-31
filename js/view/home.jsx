"use strict";

var React = require('react');
var HomeState = require('../state/home.js');

var REFS = {
	name: "name",
	refNr: "refNr"
};

var Content = React.createClass({
	getInitialState:function(){
		return{
			hasErrors: false
		}
	},
	submit: function(){
		var name = this.refs[REFS.name].value;
		var refNr = this.refs[REFS.refNr].value;
		var isValid = HomeState.validate(name, refNr);
		if(isValid){
			this.setState({
				hasErrors: false
			});
			HomeState.submit(name, refNr);
		}
		else{
			this.setState({
				hasErrors: true
			});
		}
	},
	render: function() {
		var classname = this.state.hasErrors ? "row error" : "row";
		if(HomeState.getName()){
			return <Winner />;
		}
		return (
			<section className="home">
				<div></div>
				<div className="referenceBox">
					<span>
						<div className={classname}><input ref="name" placeholder="Fornavn"/></div>
						<div className={classname}><input ref="refNr" placeholder="Referansenummer"/> </div>
						<div className="row"><button onClick={this.submit}>OK</button></div>
					</span>
				</div>
				<div></div>
			</section>
			);
	}

});

var Winner = React.createClass({
	youtubelink: function(){
		HomeState.youtubelink();
	},
	render: function(){
		var fpf = <i className="material-icons">vpn_key</i>;
		return (
				<section className="home">
					<div></div>
					<div className="giftcard">
						<h1>
							<label>GAVEKORT!</label>
						</h1>
						<span className="whatitis">
							<label>{fpf} {fpf} &nbsp; FANGENE PÅ FORTET &nbsp;{fpf} {fpf}</label> <br/>
							inkl. eksklusiv middag i Fredensborgveien 41 <br/>
						</span>
						<span>
						<label>Dato: </label>
							åpent – vi finner en fredag som passer for alle <br/>
						</span>
						<span>
						<label>Antrekk: </label>
							trening og pent <br/>
							<i>(man kan bli litt varm under ‘øvelsene’ på fangene på fortet,
							så det lurt å ha på noe komfortabelt. Det er også lurt å ha med skift til middag og fezt etterpå.
							Det vil bli mulig å låne dusj (10 kr) og håndkle (350 kr) hos oss)</i> <br/>
						</span>
						<span>
						<label>Oppmøte: </label>
							Fangene på fortet (Nydalen – Nydalsveien 28)<br/>
						</span>
						<span>
							Les mer og forbered deg på <a href="http://www.fangenepafortet.no/" target="_blank">fangenepafortet.no<i className="material-icons">link</i></a><br/>
						</span>
						<span>
							VI SEES!
						</span>
						<span>
						<br/>
							<i>Se video av Halvard som demonstrerer øvelsene på
							<a onClick={this.youtubelink}> www.youtube.com/watch?v=A9sONfCDwnk<i className="material-icons">link</i> </a></i><br/>
						</span>
					</div>
					<div></div>
				</section>
			);
		}
});

module.exports = Content;