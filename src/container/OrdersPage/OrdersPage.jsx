import React from 'react';
import OrderPageHeader from './components/OrderPageHeader';
import OrderDetails from './components/OrderDetails';
import OrderContent from './components/OrderContent';

import styled from 'styled-components';

const ContentDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`

const OrdersPage = () => {
  return (
    <div className='mt-31'>
      <OrderPageHeader />
      <ContentDiv>
        <OrderDetails />
        <OrderContent />
      </ContentDiv>
    </div>
  );
};

export default OrdersPage;