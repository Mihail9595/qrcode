import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './qrCodeGenerator.css';

import { GENERATE_DATA } from '../../constants'

const QrCodeGenerator = () => {
    // для инпута
    const [value, setValue] = useState('');
    //для qr кода
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        // при нажатии на кнопку сгенерировать код 
        setResult(value);
        setValue('');

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    };


    const onChageHandler = (event) => {
        // записываем что то в инпут
        setValue(event.target.value);
        setResult('');

    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            generation();
        }

        function generation() {
            setResult(value);
            setValue('');

            const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
        }

    }



    return (
        <div className='wrapper'>
            <input placeholder='Введите текст ...' className='input' type="text" value={value}
                onKeyPress={handleKeyPress} onChange={onChageHandler} />
            <button className='btn' type='button' onClick={onClickHandler}>Сгенерировать QR</button>

            {result !== '' && (<QRCodeSVG value={result} />)}
        </div>
    );
}

export default QrCodeGenerator;