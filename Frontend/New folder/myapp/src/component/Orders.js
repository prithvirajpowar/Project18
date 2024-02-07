import React from 'react'

export default function
    () {
    return (
        <div className='container'>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.71) 40%, rgba(255, 255, 255, 0.71) 40%)' }}>
                <img style={{ width: 368, height: 145, left: 0, top: 0, position: 'absolute' }} src="https://via.placeholder.com/368x145" />
                <div style={{ width: 368, height: 859, left: 0, top: 151, position: 'absolute' }}>
                    <div style={{ width: 368, height: 64, padding: 10, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Dashboard</div>
                    </div>
                    <div style={{ width: 368, height: 64, padding: 10, left: 0, top: 159, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Inventory</div>
                    </div>
                    <div style={{ width: 368, height: 64, padding: 10, left: 0, top: 318, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Account</div>
                    </div>
                    <div style={{ width: 368, height: 64, padding: 10, left: 0, top: 477, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Order Details</div>
                    </div>
                    <div style={{ width: 368, left: 0, top: 646, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Store Details</div>
                    <div style={{ width: 368, height: 64, padding: 10, left: 0, top: 795, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Delivery</div>
                    </div>
                </div>
                <div style={{ width: 1024, height: 0, left: 368, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid' }}></div>
                <div style={{ width: 1072, height: 1024, left: 368, top: 0, position: 'absolute', background: 'linear-gradient(142deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.23) 50%)' }} />
                <div style={{ left: 419, top: 88, position: 'absolute', color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Total Orders</div>
                <div style={{ left: 419, top: 520, position: 'absolute', color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Past Orders</div>
                <div style={{ width: 970, height: 338, left: 419, top: 590, position: 'absolute', background: '#D9D9D9' }} />
                <div style={{ width: 970, height: 338, left: 419, top: 152, position: 'absolute', background: '#D9D9D9' }} />
            </div>

        </div>
    )
}
