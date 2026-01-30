---
sidebar_position: 1
title: 2023 - Regulation & Recovery
---

## Overview
2023 was a pivotal year of reconstruction and regulatory confrontation for the blockchain industry. Following the catastrophic collapse of FTX in late 2022, the industry spent much of 2023 in a "crypto winter," characterized by depressed asset prices and diminished public trust. However, beneath the surface, the year was defined by a maturing relationship between digital assets and the traditional financial (TradFi) establishment.

The narrative shifted from unbridled speculation to institutional adoption and legal clarity. While U.S. regulators launched aggressive enforcement actions against major exchanges, the judicial system provided crucial checks and balances, most notably in Grayscale's victory over the SEC. Simultaneously, the Bitcoin network experienced an unexpected renaissance of innovation with the emergence of "Ordinals," proving that the oldest blockchain could still evolve. The year concluded not with a whimper, but with the conviction of Sam Bankman-Fried and the unprecedented filing by BlackRock for a spot Bitcoin ETF, signaling the start of a new institutional era.

## Key Developments

### ⚖️ The Courts vs. The Regulators
The regulatory environment in the United States became adversarial. The SEC sued major exchanges (Binance and Coinbase) for operating as unregistered securities exchanges. However, the industry found relief in the courts. The D.C. Circuit Court of Appeals ruled in favor of Grayscale Investments, stating the SEC's denial of their spot Bitcoin ETF application was "arbitrary and capricious," a ruling that effectively forced the SEC's hand for future approvals.

### 🏛️ Institutional Giants Enter
In June, BlackRock—the world's largest asset manager—filed an application for a spot Bitcoin ETF. This was a watershed moment; while other firms had filed previously, BlackRock’s entry (given their near-perfect approval record) signaled to the market that Bitcoin was becoming an investable asset class for Wall Street.

### 🟧 Bitcoin Ordinals and BRC-20
Technological innovation returned to the Bitcoin base layer. The "Ordinals" protocol allowed users to inscribe data (images, text, code) directly onto individual satoshis (the smallest unit of Bitcoin). This brought "NFTs" to Bitcoin without smart contracts, sparking a fierce debate about block space usage while simultaneously generating millions in miner fees.

### 👨‍⚖️ The Fall of SBF
In November, Sam Bankman-Fried, the founder of the collapsed FTX exchange, was found guilty on all seven criminal counts, including wire fraud and conspiracy to commit money laundering. The verdict closed a dark chapter of fraud and mismanagement, allowing the industry to psychologically move past the wreckage of 2022.

---

## Important Papers & Documents

### 📄 Grayscale Investments, LLC v. Securities and Exchange Commission (Opinion)

**Date:** August 29, 2023
**Type:** U.S. Court of Appeals Opinion
**Link:** [Link to be added] (Due to variable PDF hosting on court sites, search: D.C. Cir. No. 22-1142)

**Summary:**
This legal opinion is arguably the most critical document of 2023 regarding cryptocurrency market structure. It details the decision by the United States Court of Appeals for the District of Columbia Circuit to vacate the SEC's order denying Grayscale's application to convert its Grayscale Bitcoin Trust (GBTC) into a spot Bitcoin Exchange-Traded Product (ETP).

The document outlines the core legal argument: Grayscale contended that the SEC acted arbitrarily by approving Bitcoin *futures* ETPs while denying Bitcoin *spot* ETPs, despite the two markets being 99.9% correlated. The SEC had argued that the spot market was uniquely susceptible to fraud and manipulation and that Grayscale lacked a "surveillance-sharing agreement" with a regulated market of significant size.

Judge Rao, writing for the court, dismantled the SEC's argument. The opinion highlights that the SEC failed to adequately explain why it treated these two similar products differently. The court noted that because the spot and futures markets are so tightly correlated, any manipulation in the spot market would inevitably reflect in the futures market—which the SEC had already deemed safe enough for ETPs. The court famously stated, "The Commission’s unexplained discounting of the obvious financial and mathematical relationship between the spot and futures markets falls short of the standard for reasoned decisionmaking."

This document is essential reading because it reined in "regulation by enforcement." It established that federal regulators are bound by the Administrative Procedure Act to treat like cases alike. The ruling did not automatically approve the ETF, but it removed the legal obstacles the SEC was using to block it, directly paving the way for the historic ETF approvals that would follow in early 2024.

### 📄 The Ordinals Theory Handbook

**Date:** January 2023 (Initial Release)
**Author:** Casey Rodarmor
**Link:** https://docs.ordinals.com/

**Summary:**
The *Ordinals Theory Handbook* serves as the technical documentation and manifesto for one of the most disruptive innovations in Bitcoin's history. Unlike Ethereum NFTs, which typically point to off-chain data (like an image hosted on a server), Ordinals allow for digital artifacts to be inscribed directly onto the Bitcoin blockchain.

The documentation explains the numbering scheme for satoshis. "Ordinal Theory" assigns a specific number to every single satoshi ever mined, based on the order in which they were mined and transferred. This creates a system of rarity and identity for fungible tokens without requiring a hard fork or a sidechain. Rodarmor classifies satoshis by rarity levels: Common (any sat in a block), Uncommon (the first sat of a block), Rare (the first sat of a difficulty adjustment period), Epic (the first sat of a halving epoch), and so on.

The technical breakdown explains how the protocol utilizes the "Witness" data field in Bitcoin transactions—a space expanded by the 2017 SegWit upgrade and the 2021 Taproot upgrade. By storing arbitrary data in the witness section, users can "inscribe" content. The Handbook details how these inscriptions are immutable, on-chain, and uncensorable, distinguishing them from smart-contract-based NFTs on other chains.

This document is historically significant because it sparked a "civil war" of ideology within the Bitcoin community. Purists argued that the blockchain should be used solely for financial transactions, while proponents argued that block space is a commodity to be bought by the highest bidder. The Handbook marks the moment Bitcoin transitioned from a purely monetary network to a platform for immutable data storage.

### 📄 iShares Bitcoin Trust Registration Statement (Form S-1)

**Date:** June 15, 2023
**Filer:** BlackRock (via iShares Delaware Trust Sponsor LLC)
**Link:** https://www.sec.gov/Archives/edgar/data/1980994/000143774923017574/bit20230608_s1.htm

**Summary:**
The S-1 Registration Statement filed by BlackRock is a dense, technical financial disclosure, but it represents a massive shift in the geopolitical landscape of cryptocurrency. As the world's largest asset manager (managing over $9 trillion), BlackRock's submission of this document validated Bitcoin as an institutional-grade asset class.

The document details the mechanics of the proposed Trust. It explains how the Trust intends to issue shares that represent fractional undivided beneficial interest in its net assets (Bitcoin). Crucially, the filing addresses the SEC's historical concerns regarding market manipulation. It outlines a proposed "Surveillance-Sharing Agreement" with the Nasdaq stock exchange and likely a spot crypto exchange (later revealed to be Coinbase), aiming to provide the transparency the SEC had previously claimed was missing.

The "Risk Factors" section of the S-1 is particularly illuminating for historians. It provides a comprehensive snapshot of the risks perceived by Wall Street in 2023, including regulatory uncertainty, the potential for hard forks, the volatility of mining fees, and the environmental concerns regarding Proof-of-Work energy consumption.

Unlike previous attempts by smaller firms (like VanEck or Winklevoss Capital), the BlackRock S-1 was viewed differently due to the firm's political weight and near-perfect record of ETF approvals (575 approvals to 1 denial at the time of filing). This document effectively marks the "beginning of the end" of the era where Bitcoin was considered solely a retail or "cypherpunk" asset.

---

## Historical Context
2023 must be viewed through the lens of the "Post-FTX PTSD." The year began with deep skepticism. Banks that serviced the crypto industry (Silvergate, Signature, Silicon Valley Bank) collapsed in early 2023, severing fiat on-ramps and causing a temporary de-pegging of the USDC stablecoin.

In this vacuum of trust, the industry bifurcated. "Offshore" unregulated entities faced existential threats, while "Onshore" regulated paths (like ETFs and compliant stablecoins) gained traction. It was the year the "Wild West" began to be fenced in.

## Connection to Modern Blockchain
* **The ETF Era:** The legal and filing work done in 2023 resulted in the Spot Bitcoin ETFs, which now hold billions of dollars in AUM.
* **Bitcoin L2s:** The success of Ordinals exposed the limitations of Bitcoin's main layer for high-throughput data, accelerating the development of Bitcoin Layer 2 solutions (like Stacks or BitVM) which are prominent today.
* **Regulatory Precedent:** The Grayscale ruling continues to be cited in legal battles regarding Ethereum ETFs and other digital asset classifications.

## Further Reading
* *Going Infinite* by Michael Lewis (Book regarding the rise and fall of SBF)
* *The Bitcoin Standard* (For context on why institutional adoption was debated)
* DOJ Press Release on SBF Conviction: [Link to be added] (Search: "United States Attorney Announces Verdict In Samuel Bankman-Fried Trial")