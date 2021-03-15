import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';

const MenuBar = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const handleItemClick = (e, { name }) => {
    if (name === 'login') {
      loginWithRedirect();
    } else if (name === 'logout') {
      logout({ returnTo: window.location.origin });
    }
  };

  const menuBar = (
    <Menu pointing secondary size="massive">
      {isLoading ? (
        <Menu.Item name="loading" />
      ) : user ? (
        <>
          <Menu.Item name={user.name} onClick={handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={handleItemClick} />
          </Menu.Menu>
        </>
      ) : (
        <Menu.Menu position="right">
          <Menu.Item name="login" onClick={handleItemClick} />
        </Menu.Menu>
      )}
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
