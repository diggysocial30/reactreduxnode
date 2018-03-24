import {Menu} from "semantic-ui-react";
import React,{ Component }  from 'react' ;
import ToggleDisplay from 'react-toggle-display';


const TabBar = (props) => {
    const {tabs, currentTab, onTabClick, ...otherProps} = props;

    const tabItems = tabs.map(tabInfo => { /*.....*/ });

   const tabPanels = tabs.map(tabInfo => {
       const {name, component : TabComponent} = tabInfo;

       return (
           <ToggleDisplay show={name === currentTab} key={name}>
               <TabComponent />
           </ToggleDisplay>
       )
   });

    return (
        <div>
            <Menu tabular attached="top" {...otherProps}>
                {tabItems}
            </Menu>

            {tabPanels}
        </div>
    );
}
export default TabBar;