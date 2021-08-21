import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LoadingWrapper } from './PageLoadingElements';

library.add(fab, fas);

export default function PageLoading() {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={['fas', 'circle-notch']} spin size="6x" />
    </LoadingWrapper>
  );
}
