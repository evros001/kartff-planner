import React from 'react';
import StandardLayout from '../../LayoutComponents/StandardLayout/StandardLayout';
import Navagation from '../../Navagation/Navagation';
import ContentContainer from '../../LayoutComponents/ContentContainer/ContentContainer';

const Welcome = (props) => {
  const { display } = props
  return (
    <StandardLayout>
      <Navagation />
      <ContentContainer display={display}/> 
    </StandardLayout>
  )
}

export default Welcome