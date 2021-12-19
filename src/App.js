import React from 'react';
import PropTypes from 'prop-type';

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} width="20%" height="20%" alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.seriouseats.com/thmb/mANmBYm-pJfwrwHksChVWur6w9w=/1500x1125/filters:fill(auto,1)/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://cf.creatrip.com/original/blog/8937/166lv4gz4u0ei0nv8oykcq5t61w2zdtf.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'http://gdimg.gmarket.co.kr/2095588051/still/600?ver=1624507986',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbab',
    image: 'https://lh3.googleusercontent.com/proxy/rxPsPGZaTjXd5C_OOZ4egP5LDhLGfrRSyjCSnNTm3pbNZIqn7jBFC-ygmTNn-FE1pZkleZ7M9KMc7b3g6mgkxxoTmOQ5aTcHRO8Qqw9fr4w6xOkDCxE',
    rating: 4.6,
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food id={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
    // <div className="App" />;
}

/*Food.PropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};*/

export default App;
