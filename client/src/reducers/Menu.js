const initialState = [
  {
    name: 'Chicken w/ Provencal',
    variant: 'adult',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken w/ Applesauce',
    variant: 'adult',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken Natuur(Nature)',
    variant: 'adult',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken w/ Curry',
    variant: 'adult',
    price: '17',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken w/ Provencal',
    variant: 'children',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken w/ Applesauce',
    variant: 'children',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken Natuur(Nature)',
    variant: 'children',
    price: '11',
    image: 'http://via.placeholder.com/250x300'
  },
  {
    name: 'Chicken w/ Curry',
    variant: 'children',
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
