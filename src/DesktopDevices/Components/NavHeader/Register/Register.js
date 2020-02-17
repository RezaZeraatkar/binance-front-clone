import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

// ******************** import Custom Styled Components ********************

// ******************** Register Component ********************
export default function Register() {
  return (
    <Button size="default" type="danger">
      <Link to="/register">Register</Link>
    </Button>
  );
}
