import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdop() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendAirdopToUser() {

        await connection.requestAirdrop(wallet.publicKey,10)
        alert("aridoped sol")

    }

    
    return (
        <div>
            hii mrs {wallet.publicKey.toString()}
            <input type="text" placeholder="Amount"></input>
            <button onClick={sendAirdopToUser}>Send Airdop  </button>
        </div>
    )
}