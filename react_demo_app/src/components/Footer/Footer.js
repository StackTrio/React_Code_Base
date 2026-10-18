import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    ©{new Date().getFullYear()} StackTrio. All rights reserved.
  </Footer>
);

export default AppFooter;
