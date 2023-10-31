import { ConfigProvider } from 'antd';
import React from 'react';
import { themes } from 'ui-kit';

export const withTheme = (component: () => React.ReactNode) => () => (
  <ConfigProvider theme={themes.lightTheme}>{component()}</ConfigProvider>
);
