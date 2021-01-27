import React from "react";
import PropTypes from 'prop-types';
import '../styles/TabLink.css';
function TabLink(props){
    return(
        <div className={props.isActive ? 'tab-link active' : 'tab-link'} onClick={props.onClick}>
            <i className={'tab-icon '+props.icon}></i>
            {props.link}
        </div>
    );
}
TabLink.defaultProps = {
    icons: '',
    link: '',
    isActive: false,
}
TabLink.propTypes = {
    icons: PropTypes.string,
    link: PropTypes.string,
    isActive: PropTypes.bool,
}
export default TabLink;