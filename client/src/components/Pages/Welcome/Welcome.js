import React from 'react';
import StandardLayout from '../../LayoutComponents/StandardLayout/StandardLayout';
import Navagation from '../../Navagation/Navagation';
import ContentContainer from '../../LayoutComponents/ContentContainer/ContentContainer';

const Welcome = () => {
  return (
    <StandardLayout>
      <Navagation />
      <ContentContainer /> 
    </StandardLayout>
  )
}

export default Welcome