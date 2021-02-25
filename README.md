# NY Times Most Popular
The New York Times Latese News 

## Installation
```bash
git clone https://github.com/MNoumanImran/NyTimes.git
```
```bash
cd NyTimes
```
```bash
npm install
```
```bash
npm start
```

## Screenshots

<img src="https://github.com/MNoumanImran/NyTimes/blob/main/screenshots/nyTimes1.jpeg">


## Testing

```bash
npm run test
```


```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
```


