import React, { Component } from "react";
import '../styles/App.css';

import Tab from './Tab';

class App extends Component {
    render() {
        const tabItems = [
            {link: 'React', content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.', icon: 'fas fa-code'},
            {link: 'Angular', content: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', icon: 'fas fa-cog'},
            {link: 'Ember', content: 'Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.', icon: 'fas fa-plus-circle'},
            {link: 'VueJS', content: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.', icon: 'fas fa-pen-nib'}
        ];
        return (
            <div className='app'>
                <h1 className='app-header'>Tabs with React!</h1>
                <Tab items={tabItems}></Tab>
            </div>
        );
    }
}

export default App;