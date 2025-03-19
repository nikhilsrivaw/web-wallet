import React from 'react'
import  { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdop } from './Airdop.jsx';


const App = () => {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/IF-W-XzlR581F0nDpU2twOmd1r3hq-lD"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>

                  
                   <Airdop></Airdop>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App

