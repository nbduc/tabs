import React from "react";
import PropTypes from 'prop-types';
import '../styles/TabContent.css';
function TabContent(props){
    return(
        <div className={props.isActive ? 'tab-pane active' : 'tab-pane'}>
            <h2>{props.header}</h2>
            <p>{props.content}</p>
        </div>
    );
}
TabContent.defaultProps = {
    header: '',
    content: '',
    isActive: false,
}
TabContent.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
}
export default TabContent;