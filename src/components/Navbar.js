import { Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import logo from '../img/logo1.png';

const Navbar = () => {
  return (
    // <Menu>
    //   <MenuButton
    //     as={IconButton}
    //     aria-label="Options"
    //     icon={<HamburgerIcon />}
    //     variant="outline"
    //   />
    //   <MenuList>
    //     <MenuItem command="๐งช">ุชุนุฑู ุนูููุง</MenuItem>
    //     <MenuItem command="๐งช">ุงูุด ูุณููุ</MenuItem>
    //     <MenuItem command="๐งช">ููู ุญูุงุ</MenuItem>
    //     <MenuItem command="๐งช">ููููุง</MenuItem>
    //   </MenuList>
    // </Menu>
    <>
      <Image src={logo} alt="LOGO" w="100%" h="130px" />
    </>
  );
};

export default Navbar;
