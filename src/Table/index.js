import React from 'react';
import styled from 'styled-components';
import {
  themeGet,
  height,
  fontFamily,
  boxShadow
} from 'styled-system';

import Box from '../Box';
import defaultTheme from '../theme';

const Table = styled(Box)`
  & {
    table-layout: fixed;
    border-collapse: collapse;
  }

  th,
  td {
    border: solid;
    border-width: 1px 0;
    border-color: inherit;
    font-weight: inherit;
  }

  tbody tr {
    height: ${themeGet('height[3]', '4rem')};
  }

  thead tr,
  tfoot tr {
    height: ${themeGet('height[2]', '3rem')};
  }

  ${fontFamily}
  ${height}
  ${boxShadow}
`

Table.defaultProps = {
  theme: defaultTheme,
  as: 'table',
  width: 1,
  border: 1,
  borderColor: 'grey',
  fontSize: 1,
  fontWeight: 2,
  fontFamily: 'sansSerif',
  color: 'dark-gray',
  boxShadow: 1
};

Table.displayName = 'Table';

export default Table;
