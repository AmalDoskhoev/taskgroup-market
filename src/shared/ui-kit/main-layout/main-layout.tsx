import React from 'react';

import { Footer, Header } from '@/widgets';

import { Container } from '../container/container';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
