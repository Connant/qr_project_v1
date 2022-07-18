import { QRCode } from 'react-qrcode-logo';
import { HexColorPicker } from "react-colorful";
import { useState } from 'react';
import './app.scss';

export default function App() {
  const [input, setInput] = useState('');
  const [radius, setRadius] = useState(10);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const [qrStyle, serQrStyle] = useState('squares')

  const handleChangeValue = event => {
    setInput(event.target.value);
  }

  const handleChangeRadius = event => {
    const el = parseInt(event.target.value, 10);
    setRadius(el)
  }

  const handleChangeStyle = () => {
    if (qrStyle === 'squares') {
      serQrStyle('dots');
    }
    if (qrStyle === 'dots') {
      serQrStyle('squares');
    }
  }


  return (
    <div className="app">

      <label className='label' htmlFor='meaning'>Content</label>
      <input id='meaning' className='meaning input' name='value' type='text' onChange={handleChangeValue} />

      <div className='color__block'>
        <div className='color__block--item'>
          <label htmlFor='bg_color'>BG</label>
          <HexColorPicker id='bg_color' className='bg_color' color={bgColor} onChange={setBgColor} />
        </div>

        <div className='color__block--item'>
          <label className='label' htmlFor='fg_color'>FG</label>
          <HexColorPicker id='fg_color' className='fg_logo' color={fgColor} onChange={setFgColor} />
        </div>
      </div>

      <div className='block__2'>

        <label className='label' htmlFor='radius'>Radius</label>
        <input id='radius' className='radius input' name='radius' type='number' min="0" max='99' onChange={handleChangeRadius} />

        <div className='styles__radio'>
          <label className='label' htmlFor='squares'>Squares</label>
          <input id='squares' className='radio' name='qrStyle' type='radio' onChange={handleChangeStyle} />

          <label className='label' htmlFor='dots'>Dots</label>
          <input id='dots' className='radio' name='qrStyle' type='radio' onChange={handleChangeStyle} />
        </div>
      </div>

      <QRCode qrStyle={qrStyle} fgColor={fgColor} bgColor={bgColor} eyeRadius={radius} value={input} />

    </div>
  );
}

