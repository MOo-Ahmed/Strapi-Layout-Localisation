import styled from 'styled-components';
import PropTypes from 'prop-types';


/*
const width = props.theme.main.sizes.leftMenu.width;
const margin_right = direction == 'ar'? width : 0;
const margin_left = direction == 'ar'? 0 : width;
*/
const direction = localStorage.getItem('strapi-admin-language');

const Content = styled.div`
  min-height: calc(100vh - ${props => props.theme.main.sizes.header.height});
  width: calc(100vw - ${props => props.theme.main.sizes.leftMenu.width});
  margin-top: ${props => props.theme.main.sizes.header.height};
  margin-right: ${props => direction == 'ar' ? props.theme.main.sizes.leftMenu.width : 0};
  margin-left: ${props => direction == 'ar' ? 0 : props.theme.main.sizes.leftMenu.width};
  background: ${props => props.theme.main.colors.content['background-alpha']};
`;

Content.defaultProps = {
  theme: {
    main: {
      colors: {
        content: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Content.propTypes = {
  theme: PropTypes.object,
};

export default Content;
