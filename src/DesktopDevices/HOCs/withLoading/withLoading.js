import React from 'react';

export default function withLoading({ children, Spinner, isLoading }) {
  if (isLoading) {
    return <>{Spinner}</> || <span>Loading...</span>;
  } else {
    return children;
  }
}
