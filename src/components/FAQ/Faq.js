import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { subpageContents } from '../../data/dataStore';

const title = subpageContents.faq.title;
const imageUrl = subpageContents.faq.image;
const description = subpageContents.faq.content;

const Faq = () => (
  <Container>
    <Hero titleText={title} image={imageUrl} />
    <p>{description}</p>
  </Container>
);

export default Faq;
