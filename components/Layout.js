import React from "react";
import MainNav from "./MainNav";
import { Container } from 'react-bootstrap';

const layoutStyle = {
  backgroundImage: 'url("https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <div style={layoutStyle}>
        <Container>
          {props.children}
        </Container>
      </div>
    </>
  );
}
