import { useState } from 'react';
import { Ul, Li } from './Shops.styled';

const Shops = ({ onShop, shops }) => {
  const [activeId, setIsActive] = useState(-1);

  const activeStyle = {
    background: ' rgba(150, 150, 150, 0.5)',
  };

  const handleClick = id => {
    setIsActive(id);
  };
  return (
    <Ul>
      <Li
        style={-1 === activeId ? activeStyle : {}}
        onClick={() => {
          handleClick(-1);
          onShop('');
        }}
      >
        All shops
      </Li>
      {shops?.map((item, i) => {
        return (
          <Li
            key={i}
            style={i === activeId ? activeStyle : {}}
            onClick={() => {
              handleClick(i);
              onShop(item);
            }}
          >
            {' '}
            {item}
          </Li>
        );
      })}
    </Ul>
  );
};

export default Shops;
