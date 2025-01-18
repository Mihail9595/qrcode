import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './qrCodeGenerator.css';

const QrCodeGenerator = () => {
    // для инпута
    const [value, setValue] = useState('');
    // 
    const [result, setResult] = useState('');

    const onClickHandler = (event) => {
        // при нажатии на кнопку происходит 
        setResult(value);
        setValue('');
    };
    const onChageHandler = (event) => {
        // записываем что то в инпут
        setValue(event.target.value);
        setResult('');

    };

console.log(result);


    return (
        <div className='wrapper'>
            <input className='input' type="text" value={value} onChange={onChageHandler} />
            <button className='btn' type='button' onClick={onClickHandler}>Сгенерировать QR</button>
            
            {result !== '' && (<QRCodeSVG value={result} />)}
        </div>
    );
}

export default QrCodeGenerator;