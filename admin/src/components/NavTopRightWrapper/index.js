import styled from 'styled-components';

const direction = localStorage.getItem('strapi-admin-language');
const dir = direction == 'ar'? 'left' : 'right';

const NavTopRightWrapper = styled.div`
  position: fixed;
  top: 0;
  ${dir}: 0;
  display: flex;
  z-index: 1050;
`;

export default NavTopRightWrapper;
