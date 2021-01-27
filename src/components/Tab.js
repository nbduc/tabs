import React, { useState, useEffect } from "react";
import TabContent from './TabContent';
import TabLink from './TabLink';
import PropTypes from 'prop-types';
import '../styles/Tab.css';
function Tab(props){
    const [activeTab, setActiveTab] = useState(0);
    function changeActiveTab(e, index){
        setActiveTab(index);
    }
    // useEffect: componentDidMount, componentDidUpdate
    useEffect(() => {
        const line = document.querySelector(".tabs .line");
        const tabActive = document.querySelector(".tab-link.active");
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";
    }, [activeTab]);
    const TabLinks = props.items.map((item, index) => {
        return (
            <TabLink link={item.link} icon={item.icon} isActive={activeTab===index ? true : false} key={index} onClick={(event) => changeActiveTab(event, index)}></TabLink>
        );
    });
    const TabContents = props.items.map((item, index) => {
        return (
            <TabContent header={item.link} content={item.content} isActive={activeTab===index ? true : false} key={index}></TabContent>
        );
    });
    return(
        <div>
            <div className='tabs'>
                {TabLinks}
                <div className="line"></div>
            </div>
            <div className='tab-content'>
                {TabContents}
            </div>
        </div>
    )
}
Tab.defaultProps = {
    items: []
}
Tab.propTypes = {
    items: PropTypes.array
}
export default Tab;