import React, { useState } from 'react'
import '../input/input.css'
import QRCode from 'qrcode'

function Input() {
    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')

    const GenerateQRCode = (e) => {
        e.preventDefault();
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
                dark: '#335383ff'
            }
        }, (err, url) => {
            if (err) return console.log(err)
            setQrcode(url)
        })
    }


    return (
        <>
            <h1>QR Code Generator</h1>
            <input type="text" placeholder='e.g. https://www.google.com' value={url} onChange={(url) => setUrl(url.target.value)} /><br />
            <br />
            <button onClick={GenerateQRCode}>Generate</button>
            {
                qrcode &&
                <>
                    <img src={qrcode} />
                    <a href={qrcode} download='qrcode.png' >Download</a>
                </>
            }
        </>
    )
}

export default Input