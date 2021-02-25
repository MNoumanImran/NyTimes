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
npm i
```
```bash
npm start
```


## Testing

```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

