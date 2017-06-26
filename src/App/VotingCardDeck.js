import React from 'react';
import Reflux from 'reflux';
import VotingCard from './VotingCard';

class VotingCardDeck extends Reflux.Component {
  render() {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-12">
          <div className="card-deck">
            <VotingCard imgSrc="img/burger.jpg" imgAlt="Burger" title="Burger" description="Burger, beacon, cheese and fries!" />
            <VotingCard imgSrc="img/chasiu.jpg" imgAlt="Cha Siu" title="Cha Siu" description="Barbecued pork in Cantonese cuisine." />
            <VotingCard imgSrc="img/noodles.jpg" imgAlt="Noodles" title="Noodles" description="Traditional wanton noodles in soup." />
            <VotingCard imgSrc="img/pizza.jpg" imgAlt="Pizza" title="Pizza" description="Pizza! I want more pizza and cheese!" />
          </div>
        </div>
      </div>
    );
  }
};

export default VotingCardDeck;
