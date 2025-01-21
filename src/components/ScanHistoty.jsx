import { SCAN_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
import './style.css'

const ScanHistory = () => {
   const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return ( 
        <div className='scan'>
            {data.map((text) => {
                return(
                    <p key={text}>  {text}  <QRCodeSVG value={text} size={100}/></p>
                )
            })}
        </div>
     );
}
 
export default ScanHistory;