import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  render() {
    const { cards } = this.props;
    console.log(this.props);
    return (
      <section className={styles.component}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;
