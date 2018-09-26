 import React, { Component } from 'react';
 import ReactDOM from 'react-dom'
 import Esix from './Esix';
 import Reactready from './Reactready';
 import Scss from './Scss';
 import Webpackcicon from './Webpackicon';
 import Lodash from './Lodash';
 import Autoprefixer from './Autoprefixer';
 import Uglifyjs from './Uglifyjs';
 import Eslint from './Eslint';
 import Scrollreveal from './Scrollreveal';

 class Features extends Component {
     render() {

         const iconStyle = {
            marginRight: '10px'
         }

         return (
             <div>
                <ul>
                    <li><Esix style={iconStyle}/>ES6</li>
                    <li><Reactready style={iconStyle}/>React ready!</li>
                    <li><Scss style={iconStyle}/>SCSS</li>
                    <li><Webpackcicon style={iconStyle}/>Webpack 4</li>
                    <li><Lodash style={iconStyle}/>lodash</li>
                    <li><Autoprefixer style={iconStyle}/>autoprefixer</li>
                    <li><Uglifyjs style={iconStyle}/>uglifyjs</li>
                    <li><Eslint style={iconStyle}/>eslint</li>
                    <li><Scrollreveal style={iconStyle}/>scrollReveal</li>
                </ul>
             </div>
         );
        }
 }

export default Features;

ReactDOM.render(<Features/>, document.getElementById('features'));