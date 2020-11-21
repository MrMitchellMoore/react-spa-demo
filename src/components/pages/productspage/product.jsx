import React, {useState} from 'react';
import Options from './options';

import './styles.css';

export default function Product({name, sizes, styles, colors, image}) {
  const [selectedSizes, setSelectedSizes] = useState (sizes[0]);
  const [selectedStyle, setSelectedStyle] = useState (styles[0]);
  const [selectedColor, setSelectedColor] = useState (colors[0]);

  const stylePrice = selectedStyle.price;
  const sizePrice = selectedSizes.price;

  function totalPrice () {
    const result = stylePrice * sizePrice;
    return result.toFixed (2);
  }
  return (
    <div className="product">
      <span className="name"><h2>{name}</h2></span>
      <Options
        label="Available sizes"
        options={sizes}
        selectedOption={selectedSizes}
        setSelectedOption={setSelectedSizes}
      />
      <Options
        label="Available styles"
        options={styles}
        selectedOption={selectedStyle}
        setSelectedOption={setSelectedStyle}
      />
      <Options
        label="Available colors"
        options={colors}
        selectedOption={selectedColor}
        setSelectedOption={setSelectedColor}
      />
      <div className="price">
        <h3>
          Price: ${totalPrice ()}
        </h3>
      </div>
      <img width="250" src={selectedColor.image} alt={name} />
    </div>
  );
}
