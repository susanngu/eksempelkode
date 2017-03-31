"use strict";

var React = require('react');
var NavigationState = require('../state/navigation.js');

var MainView = React.createClass({
    getInitialState: function(){
        return{
            isCV: NavigationState.getIsCS()
        }
    },
    componentDidMount: function(){
        NavigationState.on('navigate', this.updateState);
    },
    componentWillUnmount: function(){
        NavigationState.removeListener('navigate', this.updateState);
    },
    updateState:function(){
        //window.scrollTo(0, 0);
        this.setState({
            isCV: NavigationState.getIsCS()
        });
    },

	render: function() {
/*		<img src="dest/images/bodylotion_riktigstr.pdf"/>
        <img src="dest/images/bodyscrub_riktigstr.pdf"/>
            <img src="dest/images/drabant.jpg"/>
            <img src="dest/images/drabantbyenkomme.jpg"/>
            <img src="dest/images/Jazz-f_susanneg.pdf"/>
            <img src="dest/images/KL_inng_ferdig2.pdf"/>
            <img src="dest/images/Kompetanseb A4 brosj.pdf"/>
            <img src="dest/images/mysost_SusanneG.pdf"/>
            <img src="dest/images/selvebrosjyren.pdf"/>*/
		var content = null;

		if(this.state.isCV){
			content = (<div className="cvwrapper">
				<CV/>
				<Footer/>
			</div>);
		} else{
            content =
				(<div className="portifolioElements">
					<div className="jkljkl">
						<PortFolio tumb={"dest/images/tumbs/1.png"} largeImg={"dest/images/are_plakat.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/5.png"} largeImg={"dest/images/Kompetanseb A4 brosj.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/3.png"} largeImg={"dest/images/invitasjon.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/8.png"} largeImg={"dest/images/svarkort.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/9.png"} largeImg={"dest/images/fri_komposisjon SusanneG2.psd"}/>
						<PortFolio tumb={"dest/images/tumbs/2.png"} largeImg={"dest/images/bodylotion_riktigstr.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/6.png"} largeImg={"dest/images/mysost_SusanneG.pdf"}/>
						<PortFolio tumb={"dest/images/tumbs/7.png"} largeImg={"dest/images/selvebrosjyren.pdf"}/>
					</div>
				<Footer/>
			</div>);
		}
		return (
			<section className="main">
				{content}
			</section>
			);
	}

});
var PortFolio = React.createClass({
	getInitialState: function(){
		return{
			viewLarge: false
		}
	},
	onMouseEnter: function(){
		this.setState({
            viewLarge: true
		});
	},
	onMouseLeave: function(){
        this.setState({
            viewLarge: false
        });
	},
	render: function(){
		var className = this.state.viewLarge ? "portfolioImage active": "portfolioImage";
		return(
			<div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className={className}>
				<a href={this.props.largeImg} target="_blank">
					<img src={this.props.tumb}/>
				</a>
			</div>

		);
	}
});

var CV = React.createClass({



    render: function(){
        return(
			<div className="curriculumVitae">
				<div className="cvElement">
					<div className="titleText"> <span> Work Experience </span> </div>
					<CVElement name="Sopra Steria" date="August 2015 - present" link="http://www.soprasteria.no" description="Software Engineer"/>
					<CVElement name="Sit Idrett" date="September 2011 - July 2015" description="Receptionist"/>
					<CVElement name="NTNU" date="January 2015 - June 2015" link="http://www.ntnu.no/"  description="Student Assistant in the Human-Computer Interaction Course"/>
					<CVElement name="Sopra Steria" date="June 2014 - August 2014" link="http://www.soprasteria.no" description="Summer Intern"/>
					<CVElement name="ICA" date="August 2006 - September 201" description="Employee"/>
				</div>
				<div className="cvElement">
					<div className="titleText"> <span> Education </span> </div>
					<CVElement name="Norwegian University of Science and Technology (NTNU)" date="2013 - 2015" link="http://www.ntnu.no/" description="Master's degree, Information resource management"/>
					<CVElement name="University of California, Santa Barbara" date="2013 - 2014" link="http://www.ucsb.edu/" description="Exchange Student, Computer Science"/>
					<CVElement name="Norwegian University of Science and Technology (NTNU)" date="2010 - 2013" link="http://www.ntnu.no/" description="Bachelor's degree, Computer Science"/>
					<CVElement name="Elvebakken VGS." date="2006 - 2009" description="Communication and Media Studies"/>
				</div>
				<div className="cvElement">
					<div className="titleText"> <span> Volunteering Experience </span> </div>
					<CVElement name="Linjeforeningen Online" date="October 2014 - June 2015" link="https://online.ntnu.no/" description="Member of the Senior comittee"/>
					<CVElement name="Informatikernes IT-Ekskursjon" date="July 2014 - March 2015" description="Board Member"/>
					<CVElement name="Linjeforeningen Online" date="March 2011 - June 2013" link="https://online.ntnu.no/" description="Editorial Staff of the student magazine Offline"/>
					<CVElement name="Linjeforeningen Online" date="August 2010 - June 2013" link="https://online.ntnu.no/" description="Member of the Design and Publication committee"/>
				</div>
				<div className="cvElement">
					<div className="titleText"> <span> Certifications </span> </div>
					<CVElement name="UXQB® Certified Professional for Usability and User Experience Foundation Level" date="2016" description="International Software Quality Institute"/>
					<CVElement name="Programming in HTML5 with JavaScript and CSS3" date="2015" description="Global Knowledge Norway License 70-480"/>
				</div>
				<div className="cvElement">
					<div className="titleText"> <span> Skills </span> </div>
					<CVElement name="HTML5" />
					<CVElement name="JavaScript" />
					<CVElement name="React.js" />
					<CVElement name="JQuery" />
					<CVElement name="CSS3" />
					<CVElement name="LESCSS" />
					<CVElement name="Java" />
					<CVElement name="PostgreSQL" />
					<CVElement name="MySQL" />
					<CVElement name="Git" />
					<CVElement name="Photoshop, Illustrator, InDesign" />
					<CVElement name="LatTeX" />
					<CVElement name="Scrum" />
				</div>
			</div>

        );
    }
});

var CVElement = React.createClass({

    render: function(){
    	var link = this.props.link ? this.props.link : "https://www.google.no/?gfe_rd=cr&ei=O5qAWOz8J4HFYK7tmMgO#safe=off&q=" + this.props.name;
        return(
			<div className="cvContent">
				<div>
				<a className="name" target="_blank" href={link}>{this.props.name}</a>
				<div className="description">{this.props.description}</div>
				</div>
				<div className="date">{this.props.date}</div>
			</div>

        );
    }
});

var Footer = React.createClass({
    render: function(){
        return(
			<footer>
				<div></div>
				<ProfileHeader/>
				<div></div>
			</footer>

        );


    }
});

var ProfileHeader = React.createClass({

    render: function(){
        //<a href="#" onClick={this.props.addWorkout}><i className="material-icons">add_circle_outline</i></a>

        return (

			<div className="profileHeader">
				<div className="profilePic">
					<img src="dest/images/sg.png"/>
				</div>

				<div className="leftContent">
					<div className="top">
						<span className="userName">susanne</span>
					</div>
					<div>susanne(at)tubbene.no / susanne.g90(at)gmail.com</div>
				</div>
				<div>
				</div>

			</div>
        );
    }

});

module.exports = MainView;