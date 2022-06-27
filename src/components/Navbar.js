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
    //     <MenuItem command="🧪">تعرف علينا</MenuItem>
    //     <MenuItem command="🧪">ايش نسوي؟</MenuItem>
    //     <MenuItem command="🧪">مين حنا؟</MenuItem>
    //     <MenuItem command="🧪">كلمنا</MenuItem>
    //   </MenuList>
    // </Menu>
    <>
      <Image src={logo} alt="LOGO" w="100%" h="130px" />
    </>
  );
};

export default Navbar;
