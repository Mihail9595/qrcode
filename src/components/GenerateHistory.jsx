import { GENERATE_DATA } from '../constants';
import './style.css';
import { QRCodeSVG } from 'qrcode.react';

const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className='scan'>
            {data.map((text) => {
                return (
                    <p key={text} >{text}  <QRCodeSVG value={text} size={100}/> </p>
                )
            })}
        </div>
    );
}

export default GenerateHistory;





