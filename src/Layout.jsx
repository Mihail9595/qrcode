import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import ScanHistory from "./components/ScanHistoty";
import GenerateHistory from "./components/GenerateHistory";


const Layuot = () => {
    return (
        <div>
            <Navigation/>
    
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>}/>
                <Route path="/scan" element={<QrCodeScanner/>}/>
                <Route path="/generate/History" element={<GenerateHistory/>}/>
                <Route path="/scanHistory" element={<ScanHistory/>}/>
            </Routes>
        </div>
    );
}

export default Layuot;