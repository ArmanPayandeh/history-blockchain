import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Papers sidebar organized by historical eras
  papersSidebar: [
  'intro',
  '1955/index',  // SHARE, Inc. - Birth of Open Source
  '1968/index',  // UNIX Origins
  '1976/index',  // Diffie-Hellman Public-Key Cryptography
  '1977/index',  // RSA Algorithm
  '1979/index',  // Merkle Trees
  '1982/index',  // David Chaum's Digital Cash Vision
  '1983/index',  // GNU Project Announced
  '1985/index',  // Free Software Foundation
  '1991/index',  // Linux Kernel + Haber/Stornetta Timestamping
  '1993/index',  // Proof of Work Concept (Dwork & Naor)
  '1997/index',  // Hashcash (Adam Back)
  '1998/index',  // Bit Gold (Szabo) + B-money (Wei Dai)
  '1999/index',  // P2P Networks + "Proof of Work" term
  '2000/index',  // Cryptographically Secured Chains (Konst)
  '2004/index',  // Reusable PoW (Hal Finney)
  '2008/index',  // Bitcoin Whitepaper (Satoshi Nakamoto)
  '2009/index',  // Bitcoin Launch
  '2010/index',  // First Bitcoin Transaction (Pizza Day)
  '2011/index',  // Litecoin + Satoshi Disappears
  '2012/index',  // Bitcoin Magazine Founded
  '2013/index',  // Bitcoin Surpasses $1B Market Cap
  '2014/index',  // Ethereum Whitepaper
  '2015/index',  // Ethereum Launch + Hyperledger
  '2016/index',  // The DAO + ETH/ETC Split
  '2017/index',  // ICO Boom + Bitcoin $20K
  '2018/index',  // Crypto Winter Begins
  '2019/index',  // Enterprise Blockchain Growth
  '2020/index',  // DeFi Summer + ETH 2.0 Beacon Chain
  '2021/index',  // NFT Boom + Bitcoin ATH $69K
  '2022/index',  // Terra/Luna & FTX Collapse + The Merge
  '2023/index',  // Regulation & ETF Lawsuit Victory
  '2024/index',  // Bitcoin & Ethereum ETFs Approved
  ],
};

export default sidebars;