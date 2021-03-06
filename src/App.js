import React, { Component } from 'react';
// import { TweenLite } from 'gsap';
import Swipeable from 'react-swipeable';
import Imager from './components/Imager';

class App extends Component {

	constructor() {
		super();
		this.state = {
			zoomFactor: 1,
      isiPhone: false,
		}
	}

  componentDidMount() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('iPhone')) {
      this.setState({ isiPhone: true });
    }

    document.addEventListener('contextmenu', event => event.preventDefault());
  }

	handelTouchZoomIn(e) {

    console.log('zoomin');

		if (this.state.zoomFactor >= -16100) {

			const newZoomFactor = this.state.zoomFactor - 100;

			this.setState({
				zoomFactor: newZoomFactor,
			});
		}
	}

	handelTouchZoomOut(e) {

		console.log('zoomout');

		if (this.state.zoomFactor <= 100) {

			const newZoomFactor = this.state.zoomFactor + 100;

			this.setState({
				zoomFactor: newZoomFactor
			});
		}
	}

	handelMouseZoomIn() {
			console.log('in');
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.handelTouchZoomIn();
      }, 30);
	}

	handelMouseZoomOut() {
			console.log('out');
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.handelTouchZoomOut();
      }, 30);
	}

  handelMouseUp() {
    console.log('mouseUp');
    clearInterval(this.interval);
  }

  render() {

  	const image1P = 600 + this.state.zoomFactor;
    const image2P = 1100 + this.state.zoomFactor;
    const image3P = 3100 + this.state.zoomFactor;
    const image4P = 5100 + this.state.zoomFactor;
    const image5P = 7100 + this.state.zoomFactor;
    const image6P = 9100 + this.state.zoomFactor;
    const image7P = 11100 + this.state.zoomFactor;
    const image8P = 13100 + this.state.zoomFactor;
    const image9P = 15100 + this.state.zoomFactor;
    const image10P = 17100 + this.state.zoomFactor;

    const opacity = 0.85;
    const top = 0;
    const left = '-15%';
    const right = '-15%';

  	const css = {
  		wrapper: {
  			perspective: 1900,
  			transformStyle: 'preserve-3d',
  			position: 'relative',
        width: '100%',
  			height: (this.state.isiPhone) ? screen.availHeight * .80 : screen.availHeight * .80 - 80
  		},
  		image1: {
        opacity,
        width: 200,
        height: 'auto',
        right,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image1P +'px)',
        display: (image1P <= 1) ? 'none' : 'block',
      },
      image2: {
        opacity,
        width: 200,
        height: 'auto',
        left,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image2P +'px)',
        display: (image2P <= 1) ? 'none' : 'block',
      },
      image3: {
        opacity,
        width: 200,
        height: 'auto',
        right,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image3P +'px)',
        display: (image3P <= 1) ? 'none' : 'block',
      },
      image4: {
        opacity,
        width: 200,
        height: 'auto',
        left,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image4P + 'px)',
        display: (image4P <= 1) ? 'none' : 'block',
      },
      image5: {
        opacity,
        width: 200,
        height: 'auto',
        right,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image5P +'px)',
        display: (image5P <= 1) ? 'none' : 'block',
      },
      image6: {
        opacity,
        width: 200,
        height: 'auto',
        left,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image6P +'px)',
        display: (image6P <= 1) ? 'none' : 'block',
      },
      image7: {
        opacity,
        width: 200,
        height: 'auto',
        right,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image7P +'px)',
        display: (image7P <= 1) ? 'none' : 'block',
      },
      image8: {
        opacity,
        width: 200,
        height: 'auto',
        left,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image8P + 'px)',
        display: (image8P <= 1) ? 'none' : 'block',
      },
      image9: {
        opacity,
        width: 200,
        height: 'auto',
        right,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image9P +'px)',
        display: (image9P <= 1) ? 'none' : 'block',
      },
      image10: {
        opacity,
        width: 200,
        height: 'auto',
        left,
        top,
        position: 'absolute',
        transform: 'translateZ(-' + image10P + 'px)',
        display: (image10P <= 1) ? 'none' : 'block',
      },
      backposition:{
        backgroundImage:'url(http://assets.myntassets.com/w_480,fl_progressive/v1488455382/radium/roadster-3d/road.jpg)',
        width:'100%',
        height: (this.state.isiPhone) ? screen.availHeight * .80 : screen.availHeight * .80 - 80,
        backgroundSize:'cover',
        overflow:'hidden',
        color: 'white',
				position: 'relative'
        // backposition:'fixed',
        // top: 0,
        // left: 0,
        // minWidth: '100%',
        // minHeight: '100%',
      },
      bike: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto'
      },
			plus: {
				position: 'absolute',
        bottom: 0,
        left: 0,
        width: 64,
        height: 'auto'
			},
			minus: {
				position: 'absolute',
        bottom: 0,
        right: 0,
        width: 64,
        height: 'auto'
			}

  	}
    return (
				<div>
      	<Swipeable
          style={css.backposition}
      		onSwipingLeft={this.handelTouchZoomIn.bind(this)}
      		onSwipingRight={this.handelTouchZoomOut.bind(this)}
      	  >
        	<div style={css.wrapper} ref="wrapper">
  	      		<Imager
                style={css.image1}
                href="http://www.myntra.com/skirts"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image2}
                href="http://www.myntra.com/shirts"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image3}
                href="http://www.myntra.com/Pants"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image4}
                href="http://www.myntra.com/shoes"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image5}
                href="http://www.myntra.com/skirts"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image6}
                href="http://www.myntra.com/shirts"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image7}
                href="http://www.myntra.com/Pants"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image8}
                href="http://www.myntra.com/shoes"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image9}
                href="http://www.myntra.com/Pants"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
              <Imager
                style={css.image10}
                href="http://www.myntra.com/shoes"
                src="http://assets.myntassets.com/v1488450563/radium/roadster-3d/gift.gif"
              />
        	</div>
            <Imager
              style={css.bike}
              src="http://assets.myntassets.com/w_480,fl_progressive/assets/images/lookbook/2017/3/14/11489493121998-new-bike2.png"
            />
						<img
              onTouchEnd={this.handelMouseUp.bind(this)}
							onTouchStart={this.handelMouseZoomIn.bind(this)}
              style={css.plus}
              alt="zoomin"
              src="http://placehold.it/64/648/fff?text=P"
            />
						<img
              onTouchEnd={this.handelMouseUp.bind(this)}
							onTouchStart={this.handelMouseZoomOut.bind(this)}
              style={css.minus}
              alt="zoomOut"
              src="http://placehold.it/64/648/fff?text=M"
            />
      	</Swipeable>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				<h1>More content</h1>
				</div>
    );
  }
}

export default App;
