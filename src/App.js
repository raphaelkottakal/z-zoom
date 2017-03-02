import React, { Component } from 'react';
// import { TweenLite } from 'gsap';
import Swipeable from 'react-swipeable';
import Imager from './components/Imager';

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			zoomFactor: 1
		}
	}

	handelTouchZoomIn(e) {

		if (this.state.zoomFactor >= -3000) {

			const newZoomFactor = this.state.zoomFactor - 40;

			this.setState({
				zoomFactor: newZoomFactor
			});
		}
	}

	handelTouchZoomOut(e) {

		if (this.state.zoomFactor <= 100) {

			const newZoomFactor = this.state.zoomFactor + 40;

			this.setState({
				zoomFactor: newZoomFactor
			});
		}
	}

  render() {

  	const image1P = 3100 + this.state.zoomFactor;
  	const image2P = 2100 + this.state.zoomFactor;
  	const image3P = 1100 + this.state.zoomFactor;
  	const image4P = 400 + this.state.zoomFactor;
    

  	const css = {
  		wrapper: {
  			perspective: 1900,
  			transformStyle: 'preserve-3d',
  			position: 'reletive',
  			height:screen.availHeight
  		},
  		image1: {
  			right: '-25%',
        top:'10%', position: 'absolute',
  			transform: 'translateZ(-' + image1P +'px)', display: (image1P <= 1) ? 'none' : 'block',
  		},
  		image2: {
  			left: '-8%',
        top:'10%',
  			position: 'absolute',
  			transform: 'translateZ(-' + image2P +'px)',
  			display: (image2P <= 1) ? 'none' : 'block',
  		},
  		image3: {
  			right: '-25%',
        top:'10%',
  			position: 'absolute',
  			transform: 'translateZ(-' + image3P +'px)',
  			display: (image3P <= 1) ? 'none' : 'block',
  		},
  		image4: {
  			left: '-8%',
        top:'10%',
  			position: 'absolute',
  			transform: 'translateZ(-' + image4P + 'px)',
  			display: (image4P <= 1) ? 'none' : 'block',
  		},
      backposition:{
        backgroundImage:'url(http://assets.myntassets.com/assets/images/lookbook/2017/2/28/11488262826060-bike.jpg)',
        width:'100%',
        backgroundSize:'cover',
        overflow:'hidden',
        backposition:'fixed',
        top: 0, 
        left: 0,
        minWidth: '100%',
        minHeight: '100%',
      }

  	}
    return (

      	<Swipeable
          style={css.backposition}
      		onSwipingUp={this.handelTouchZoomIn.bind(this)}
      		onSwipingDown={this.handelTouchZoomOut.bind(this)}
      	  >
        	<div style={css.wrapper} ref="wrapper">
  	      		<Imager
  	      			style={css.image1}
  	      			href="http://www.myntra.com/skirts"
  	      			src="http://placehold.it/200x300?text=Skirts"
  	      		/>
  	      		<Imager
  	      			style={css.image2}
  	      			href="http://www.myntra.com/shirts"
  	      			src="http://placehold.it/200x300?text=Shirts"
  	      		/>
  	      		<Imager
  	      			style={css.image3}
  	      			href="http://www.myntra.com/Pants"
  	      			src="http://placehold.it/200x300?text=Pants"
  	      		/>	
  	      		<Imager
  	      			style={css.image4}
  	      			href="http://www.myntra.com/shoes"
  	      			src="http://placehold.it/200x300?text=Shoes"
  	      		/>
        	</div>
      	</Swipeable>
    );
  }
}

export default App;
