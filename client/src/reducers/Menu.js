const initialState = [
  {
    name: 'Chicken with too much sauce',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken with too much sauce',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken with too much sauce',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Children Chicken with too much sauce',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Children Chicken with too much sauce',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Children Chicken with too much sauce',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  }
];

export const MenuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
