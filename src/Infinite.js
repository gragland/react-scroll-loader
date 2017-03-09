import React from 'react';
import throttle from 'lodash/throttle';
import loadingIcon from './loading.svg';

const LOGGING = true;

class Infinite extends React.PureComponent {

   constructor(props){
    super(props);

    this.addScrollListener = this.addScrollListener.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.scrollListenerThrottled = throttle(this.checkScroll.bind(this), 500);
  }

  componentDidMount(){
    this.addScrollListener();
    // Delay the initial check so that child elements are rendered first
    setTimeout(() => this.checkScroll(), 50);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollListenerThrottled);
  }

  addScrollListener(){
    window.addEventListener('scroll', this.scrollListenerThrottled);
  }

  componentDidUpdate(nextProps){
    // If component updated (prop/state change higher in the chain)
    // We want to check scroll position since DOM may have changed
    this.checkScroll();
  }

  checkScroll(trailing){

    const { atEnd, requestHandler } = this.props;

    const minDistanceFromBotton = 50;

    const body = document.body;
    const html = document.documentElement;

    const totalHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    const clientHeight = (window.innerHeight || document.documentElement.clientHeight);
    const scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);
    const scrollDistance = scrollTop + clientHeight;
    const distanceFromBottom = totalHeight - scrollDistance;

    logger(`Total height: ${totalHeight}`);
    logger(`Client height: ${clientHeight}`);
    logger(`Scroll top: ${scrollTop}`);
    logger(`Distance from bottom: ${distanceFromBottom}`);

    const reachedBottom = (distanceFromBottom < minDistanceFromBotton);

    if (atEnd){
      logger('No more pages');
    }else
    if (reachedBottom) {
      logger('Requesting next page');
      requestHandler();
    }
  }

  render(){

    const { atEnd, children, loadingIcon } = this.props;

    var loadingsStyle = {
      display: 'block',
      width: '3em',
      margin: '2em auto 2em auto'
    };

    return (
      <div>

        {!atEnd && loadingIcon   &&
          <img src={loadingIcon} style={loadingsStyle} />
        }

        {!atEnd && children &&
          <span>
            {children}
          </span>
        }

      </div>
    );
  }
  
};

function logger(message, object){
  if (LOGGING === false) return;
  if (object){
    console.log(`[INFINITE] ${message}`, object);
  }else{
    console.log(`[INFINITE] ${message}`);
  }
}

Infinite.defaultProps = {
  atEnd: false,
  // Could we do a conditional require of our bundled svg ...
  // ... so that it gets removed by webpack if user specifies a different icon?
  loadingIcon: loadingIcon
}

Infinite.propTypes = {
  requestHandler: React.PropTypes.func,
  atEnd: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Infinite;
