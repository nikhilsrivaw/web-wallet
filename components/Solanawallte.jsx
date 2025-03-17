import {useState} from 'react'

export function SolanWallet({mnemonic}){
    const [currentIndex,setCurrentIndex] = useState(second);
    const [publickeys,setPublickeys] = useState([]);

    return <div>
        <button onClick={function(){
            const seed = mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path , seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex+1);
            setPublickeys([...publickeys , keypair.publickey]);
        }}>

        </button>
    </div>

}