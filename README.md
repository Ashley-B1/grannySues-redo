# grannySues
![Hero](https://i.ibb.co/8sqtRLd/gs-header.png)

Granny Sues is a fake restaurant inspired my by grandmother's southern style recipes. It's 100% static and was built with React, Styled-Components (reactjs library), CSS, and React-Icons.

## Prep
- [Color Scheme](https://color.adobe.com/grannysues2-color-theme-19695488/)

## Screenshots
![Feature](https://i.ibb.co/c3jNH3f/gs-feature.png)
![sidebar](https://i.ibb.co/zsLFFsr/gs-sisebar1.png)

## Built With
  - React.js
  - CSS
  - Javascript
  - Node.js
  - React-Icons
  - Styled Components

## Technical Details
```js
import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #C2655D;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0..3s ease-in-out;
  right: ${({ isOpen }) =>(isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
```
