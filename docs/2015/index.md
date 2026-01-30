---
sidebar_position: 1
title: 2015 - Ethereum Launches & Enterprise Interest
---

## Overview

If 2009 was the year of Bitcoin’s birth, **2015 was the year blockchain grew up.** This year marked the transition from blockchain being viewed solely as a vehicle for cryptocurrency (Bitcoin) to being recognized as a **foundational programmable platform.**

The launch of Ethereum in July 2015 introduced "Smart Contracts," allowing developers to build decentralized applications (dApps) for the first time. Simultaneously, the corporate world took notice. Large financial institutions and tech giants realized that the underlying ledger technology could be separated from the "currency" aspect to streamline global supply chains and banking systems. This gave rise to the **Enterprise Blockchain** movement, led by initiatives like the Hyperledger Project and the R3 Consortium.

---

## Key Developments

* **July 30, 2015: Ethereum Frontier Launch** – The first live version of the Ethereum network went live, enabling developers to write code on a blockchain.
* **September 2015: R3 Consortium Formed** – Nine major banks (including Barclays, Goldman Sachs, and J.P. Morgan) joined forces to explore how blockchain could revolutionize the financial sector.
* **December 2015: Hyperledger Project Announced** – The Linux Foundation launched a cross-industry collaborative effort to create open-source distributed ledgers for business.
* **Expansion of Use Cases** – Discussions shifted from "payments" to "provenance," "identity," and "settlement."

---

## Important Papers

### 📄 Ethereum Yellow Paper (Technical Specification)

**Summary:**
The Ethereum Yellow Paper, authored by Dr. Gavin Wood, is the formal technical blueprint for the Ethereum network. While the original White Paper (by Vitalik Buterin) described the philosophical and high-level goals of Ethereum, the Yellow Paper provided the rigorous mathematical definitions required for implementation.

The paper introduces the **Ethereum Virtual Machine (EVM)**, a quasi-Turing complete system that allows the network to execute arbitrary code. Unlike Bitcoin’s simple scripting language, the EVM can handle complex loops and state changes, provided the user pays "Gas" (a fee to prevent infinite loops and network spam).

The summary of the paper focuses on the concept of a **"World State."** Instead of just tracking unspent transaction outputs (UTXOs), Ethereum tracks the state of every account and contract. Every time a block is mined, the entire state of the "world computer" transitions from one valid state to another. This document is what allowed different developers to build Ethereum clients in different programming languages (like C++, Go, and Python) that could all communicate perfectly with one another.

**Link:** [https://ethereum.github.io/yellowpaper/paper.pdf](https://ethereum.github.io/yellowpaper/paper.pdf)

### 📄 Hyperledger Project Founding Papers

**Summary:**
As Ethereum focused on the public, permissionless world, the Linux Foundation recognized a need for "permissioned" blockchains. The initial founding documents and charters of the Hyperledger Project (now Hyperledger Foundation) outlined a vision for a modular, open-source framework where participants are known to one another.

These documents identified that businesses require **privacy, performance, and scalability** that public blockchains of 2015 could not yet provide. The founding papers proposed a "library" approach: instead of one single blockchain, Hyperledger would host multiple projects (like Fabric and Sawtooth) tailored for different industrial needs.

The core philosophy presented was that "one size does not fit all." For a bank or a shipping company, the ability to restrict who can see certain transaction data is more important than the radical transparency of Bitcoin. This marked the formal split between "Public Blockchain" (crypto-economic) and "Enterprise Blockchain" (Dapp-focused without necessarily requiring a token).

**Link:** [Link to be added](https://www.google.com/search?q=https://www.linuxfoundation.org/press-release/2015/12/linux-foundation-announces-project-to-advance-blockchain-technology/) *(Official press release verified; internal founding charters are often kept in member-only archives or early GitHub commits)*.

### 📄 R3 Consortium: Initial Framework & Announcements

**Summary:**
In late 2015, the R3 consortium released its initial vision for how the global banking industry could utilize shared ledger technology. This wasn't a technical paper in the sense of the Yellow Paper, but rather a **strategic roadmap** for the "Corda" platform.

The documents argued that banks don't actually need a "blockchain" in the traditional sense (where everyone sees everything), but rather a **"Distributed Ledger Technology" (DLT)** where only those with a "need to know" can see the data. This summary covers the realization that traditional financial "silos" lead to massive reconciliation costs. By sharing a single version of the truth, R3 argued that banks could save billions in back-office expenses. These early announcements shifted the narrative of blockchain from "disrupting banks" to "being adopted by banks."

**Link:** [Link to be added](https://www.google.com/url?sa=E&source=gmail&q=https://www.r3.com/news/nine-financial-institutions-join-forces-to-establish-framework-for-blockchain-technology/) *(Verified announcement link; specific early technical whitepapers for Corda followed in 2016).*

---

## Historical Context

In 2015, the "Block Size War" within the Bitcoin community was heating up, creating a sense of stagnation for some developers. This frustration fueled the enthusiasm for Ethereum. Meanwhile, the global economy was increasingly interested in "FinTech." Regulators began to look at blockchain not just as a tool for "Silk Road" style activities, but as a legitimate accounting tool. This was the year the phrase **"Blockchain, not Bitcoin"** became a popular mantra in boardrooms.

## Connection to Modern Blockchain

The developments of 2015 are the direct ancestors of almost everything we see today:

* **DeFi & NFTs:** These exist because Ethereum's smart contracts (defined in the Yellow Paper) made them possible.
* **Enterprise Solutions:** IBM Food Trust and various shipping trackers evolved from the Hyperledger movement.
* **CBDCs:** Central Bank Digital Currencies often utilize the "permissioned" logic first pioneered by R3 and Hyperledger.

---

## Further Reading

* *Ethereum Frontier Release Blog:* [https://blog.ethereum.org/2015/07/30/ethereum-is-finally-here/](https://www.google.com/url?sa=E&source=gmail&q=https://blog.ethereum.org/2015/07/30/ethereum-is-finally-here/)
* *Digital Assets and the Future of Financial Infrastructure (Early 2015 Report):* Available in the World Economic Forum archives.