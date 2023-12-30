import React from 'react'

export default function SignIn() {
    return (
        <div className='container'>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(148deg, rgba(255, 255, 255, 0.50) 2%, black 27%)' }}>
                <img style={{ width: 101, height: 101, left: 1291, top: 11, position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50 }} src="https://s3-alpha-sig.figma.com/img/23c8/5ffa/56cd5f4d81f5a54bcb681b19fadbb420?Expires=1704672000&Signature=QSdZOEtMD23-RG78lGjvDS6SiKYEF~-EI7aGV5-MBm5UQzlMdSpJ9~dJJzj3rjowHepLKWmbXBQB0wy~igY5WqSthgtP01H1b303pe20uFI0d2XoMI4lMdNolzJGvz3pwcPpxkIUbUctlj93l-UGAHGLs-9YDONFS9MAga7O~VnS8EYibGQif8KxmHcBzAhVyQnDI0Z7Kof1a77U8JLyOERu~Z45Lo-d6kLW3X51NPPkPa8J5yL5cIFf~dwTZ-efk1qY7W0MM9e~cl9kt2c8w9y3MokrcnKOzvAlPPhJHTAx1eNmqHjk5BMAm6sJTDAShCp57srrQNjvNl2I5t0zCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <img style={{ width: 693, height: 1024, left: 0, top: 0, position: 'absolute', boxShadow: '10px 10px 10px ', filter: 'blur(10px)' }} src="https://s3-alpha-sig.figma.com/img/b6eb/fa64/a0f4bb43ed6605b4e2ca4b289d0ed3a8?Expires=1704672000&Signature=ihfU6h2aGdNJmR~wLsqzNBv-eteBs85PrgP7WNXdGMQS8EMe~dY5Z1zN1cTl0tF7xeIYsaxDAUvybobiXDq0RW0n3e17n90CcbgKurwnhfB5g3ZEH1yRj6wtRbS3Q74NkUbPkQKvFL3ZauTDT7I~FxKDDK3e~aU~8o~~9GloKyn6lcOpe1bIRvOX0Yr3a3WTxSpPoeIL~yZMVWKmpUUARmh4fnhsnKMTgs~RxfkQJarU~YZ8Ds5GvftLGJDhlMCgKNxQAknhdcPwHFKKebYrn2AAEsaGUA-DRInb5A2KMRPP4J21VzDiWVDJI0mvpssHKM-nbn76tw92HNF~uozYtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div style={{ width: 414, height: 40, left: 829, top: 272, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Sign in to your account</div>
                <div style={{ width: 348, height: 165, left: 895, top: 504, position: 'absolute' }}>
                    <div style={{ width: 348, height: 48, left: 0, top: 29, position: 'absolute', background: '#F5F5F5', borderRadius: 10 }} />
                    <div style={{ width: 348, height: 48, left: 0, top: 117, position: 'absolute', background: '#F5F5F5', borderRadius: 10 }} />
                    <div style={{ left: 0, top: 0, position: 'absolute', opacity: 0.50, textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Email*</div>
                    <div style={{ left: 0, top: 88, position: 'absolute', opacity: 0.50, textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Password*</div>
                </div>
                <div style={{ width: 284, height: 24, left: 933, top: 696, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Forget Password?</div>
                <div style={{ width: 252, paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 30, left: 933, top: 328, position: 'absolute', background: '#F5F5F5', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ width: 13.25, height: 14.12, position: 'relative' }}>
                        <div style={{ width: 13.25, height: 14.12, left: 0, top: 0, position: 'absolute', background: '#FFC107' }}></div>
                        <div style={{ width: 10.37, height: 5.48, left: 0.76, top: 0, position: 'absolute', background: '#FF3D00' }}></div>
                        <div style={{ width: 10.34, height: 5.63, left: 0.73, top: 8.49, position: 'absolute', background: '#4CAF50' }}></div>
                        <div style={{ width: 6.62, height: 6.65, left: 6.62, top: 5.65, position: 'absolute', background: '#1976D2' }}></div>
                    </div>
                    <div style={{ width: 211, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Sign in with Google</div>
                </div>
                <div style={{ width: 252, paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 30, left: 934, top: 388, position: 'absolute', background: '#F5F5F5', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ width: 11.87, height: 14.12, background: 'black' }}></div>
                    <div style={{ width: 211, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Sign in with Apple</div>
                </div>
                <div style={{ width: 72, height: 0, left: 935, top: 472, position: 'absolute', border: '1px black solid' }}></div>
                <div style={{ width: 85, height: 0, left: 1101, top: 472, position: 'absolute', border: '1px black solid' }}></div>
                <div style={{ width: 84, left: 1012, top: 464, position: 'absolute', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 0.30, wordWrap: 'break-word' }}>or continue with </div>
                <div style={{ padding: 10, left: 1012, top: 743, position: 'absolute', background: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'right', color: '#F5F5F5', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Continue</div>
                </div>
                <div style={{ width: 324, height: 16, left: 836, top: 832, position: 'absolute', textAlign: 'right' }}><span style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Not a Member? </span><span style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word' }}>Create Account</span></div>
            </div>
        </div>
    )
}
