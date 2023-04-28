import React from 'react';

function PermsContainer(props) {

    if(!props.userPerms) {
        console.warn('WARNING', "You didn't set user permissions.");
        return props.children;
    }
    if(!props.children) {
        console.warn('WARNING', "You don't have any children components.");
        return props.children;
    }
    return (
        <div id="permsContainer">
            {React.Children.map(props.children, (child) => {
                const permsValues = child.props['data-perms'].split(':');
                const entity = permsValues[0];
                const requirement = permsValues[1];

                Object.keys(props.userPerms).forEach(function (item) {
                    //console.log(item); // key
                    //console.log(props.userPerms[item]); // value
                });

                console.log(props.userPerms[entity]?.[requirement]);

                let style = {};

                // Apply CSS styles based on the attribute value
                if (props.userPerms[entity]?.[requirement] == 0) {
                    return null;
                }
                // Add more conditions as needed for different attribute values

                // Apply the style object as inline styles
                return React.cloneElement(child, { style });
            })}
        </div>
    );
}

export default PermsContainer;