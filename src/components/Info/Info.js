import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { subpageContents } from '../../data/dataStore';

const title = subpageContents.info.title;
const imageUrl = subpageContents.info.image;
const description = subpageContents.info.content;

const Info = () => (
  <Container>
    <Hero titleText={title} image={imageUrl} />
    <p>{description}</p>
  </Container>
);

export default Info;
