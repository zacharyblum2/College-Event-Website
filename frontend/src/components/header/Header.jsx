import React, { useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs'
import * as Icon from 'react-bootstrap-icons';
import './header.css';

const Header = () => {
    const [key, setKey] = useState('home');
    let user_data = JSON.parse(localStorage.getItem("user_data"));
  
    return (
        <>
            <div className="hText">
                <h2>EventsAt: {user_data.uni}</h2>
            </div>
            <div className="container">
                <div className="bot">
                    <div class='tabs'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab label="Day View">
                        </Tab>
                        <Tab label="Week View">
                        </Tab>
                    </Tabs>
                    </div>
                    <div class="input-group">
                        <div class="form-outline">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                        <button type="button" class="btn btn-primary">
                            <Icon.Search/>
                        </button>
                    </div>
                </div>
            </div>
            
            
        </>
  )
}

export default Header