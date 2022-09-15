import { Ul, Li } from './Shops.styled';

const Shops = ({ onShop, shops }) => {
  return (
    <Ul>
      <Li onClick={() => onShop('')}>All shops</Li>
      {shops?.map((item, i) => {
        return (
          <Li key={i} onClick={() => onShop(item)}>
            {' '}
            {item}
          </Li>
        );
      })}
    </Ul>
  );
};

export default Shops;
