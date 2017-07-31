import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';

//importing all of the action creators
//import * as actions from '../actions';
import authenticate from '../actions/index';

class Header extends Component{


    authButton() {
       if(this.props.authenticated){
           return <button onClick={()=>this.props.authenticate(false)}>Sign Out</button>
       }
        return <button onClick={()=>this.props.authenticate(true)}>Sign In</button>
    }
    render() {
        return (
          <div>
           <nav className="navbar navbar-light">
               <ul className="nav navbar-nav">
                   <li className="nav-item">
                       <Link to="/" >HOME</Link>
                   </li>

                   <li className="nav-item">
                       <Link to="/resources" >Resources</Link>
                   </li>

                   <li className="nav-item">
                       <Link  >{this.authButton()}</Link>
                   </li>


               </ul>
           </nav>
          </div>
        );
    }
}

function mapStatesToProps(state) {
    return {authenticated : state.authenticated}

}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({authenticate: authenticate},dispatch);

}

export default connect(mapStatesToProps,mapDispatchToProps)(Header)