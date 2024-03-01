"use client";

import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_WALLET_ID ?? "" }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "DuelX",
  projectId: process.env.NEXT_PUBLIC_WALLET_ID ?? "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={midnightTheme({
          accentColor: "#EF2B3D",
          accentColorForeground: "#FFF",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default WalletProvider;
