---
sidebar_position: 1
title: 2016 - DAOs & Blockchain Matures
---

## Overview

2016 was a pivotal year that tested blockchain's fundamental principles and accelerated its evolution from experimental technology to enterprise infrastructure. The year began with unprecedented enthusiasm around decentralized autonomous organizations (DAOs) but was soon marked by one of cryptocurrency's most significant crises: The DAO hack and the contentious Ethereum hard fork that followed. These events sparked fundamental debates about code as law, blockchain immutability, and governance that continue to shape the industry today.

Simultaneously, 2016 marked blockchain's transition into the corporate mainstream. Major technology companies and financial institutions moved beyond research papers to actual pilot projects. The Linux Foundation launched Hyperledger in early 2016, IBM committed significant resources to enterprise blockchain development, and the R3 consortium expanded to over 70 financial institutions. The term "blockchain" itself became standardized as a single word, reflecting the technology's maturation from Bitcoin's underlying mechanism into a distinct technological category.

This year demonstrated both blockchain's vulnerability to human error in smart contract development and its resilience as a technology platform. The lessons learned from The DAO fundamentally changed how developers approach smart contract security, while the successful Ethereum hard fork proved that blockchain communities could coordinate rapid responses to existential threats—even if such coordination came at the cost of ideological purity.

## Key Developments

### The DAO Launch and Vision (April-May 2016)

The Decentralized Autonomous Organization, known simply as "The DAO," launched on April 30, 2016, representing the most ambitious experiment in decentralized governance and crowdfunding to date. Created by the German startup Slock.it and based on code written by Christoph Jentzsch, The DAO was designed to operate as a decentralized venture capital fund running entirely on Ethereum smart contracts.

During its 28-day token sale, The DAO raised an unprecedented 12.7 million ETH (approximately $150 million at the time) from over 11,000 participants, making it the largest crowdfunding campaign in history. By mid-May 2016, The DAO controlled roughly 14% of all ether in circulation, giving it enormous influence over the nascent Ethereum ecosystem.

The vision was revolutionary: token holders would propose and vote on investment opportunities, and the smart contract would automatically execute approved proposals, distributing returns to investors proportionally. The DAO aimed to eliminate traditional venture capital's inefficiencies, gatekeeping, and conflicts of interest by encoding governance directly into code. The project embodied the "code is law" philosophy—the belief that software should execute exactly as written without human intervention, regardless of intent or consequence.

### The Security Crisis (June 2016)

Even during The DAO's token sale, security researchers identified vulnerabilities in its code. On May 27, 2016, developers published a detailed analysis warning of "recursive call bugs" that could allow attackers to drain funds. Stephan Tual, one of The DAO's creators, publicly reassured investors that "no DAO funds are at risk," stating that similar vulnerabilities in other contracts had been addressed.

This reassurance proved catastrophically wrong. On June 17, 2016, an unknown attacker began exploiting a reentrancy vulnerability in The DAO's splitDAO function. The attack leveraged a flaw in how the contract handled withdrawals: it would send ether to the requester before updating their balance. By recursively calling the withdrawal function, the attacker could drain funds repeatedly before the balance was updated.

Over the next few hours, the attacker siphoned approximately 3.6 million ETH (worth about $50-70 million) into a "child DAO"—a separate entity created through The DAO's splitting mechanism. The funds couldn't be immediately withdrawn due to a 27-day holding period, giving the Ethereum community time to respond but also creating intense pressure for a solution.

A group calling themselves the Robin Hood Group (RHG) used the same exploit to secure approximately 70% of The DAO's remaining funds, successfully protecting them from the attacker. This white-hat response saved millions but also highlighted the severity of the vulnerability—if security researchers could access these functions, so could malicious actors.

### The Hard Fork Debate (June-July 2016)

The hack triggered one of blockchain history's most contentious debates. With 14% of all ether locked in a compromised contract and the attacker potentially controlling millions in stolen funds, the Ethereum community faced an existential crisis. The options were stark: accept the loss and maintain blockchain immutability, or intervene to recover the stolen funds.

Initially, developers proposed a "soft fork" that would blacklist the attacker's address, preventing them from ever moving the stolen funds. However, security researchers discovered this approach created a denial-of-service vulnerability that could crash Ethereum nodes, forcing its abandonment.

The alternative—a hard fork that would alter Ethereum's state to return all DAO funds to a recovery contract—was philosophically divisive. Proponents argued that:
- The attack exploited a bug, not legitimate functionality
- Letting the attacker keep $50M+ would damage Ethereum's credibility
- The majority of the community wanted recovery
- Blockchain's purpose was serving users, not blind adherence to code

Opponents countered that:
- "Code is law" meant accepting outcomes, even if unintended
- Altering blockchain history set a dangerous precedent
- Centralized intervention contradicted blockchain's core value
- The community couldn't distinguish legitimate "bugs" from intended features

A controversial carbon vote was held July 15-16, 2016, with only 5.5% of ETH holders participating. Of those who voted, 87% supported the fork—though critics noted that a single address controlled 25% of pro-fork votes, raising questions about the vote's legitimacy.

### The Ethereum/Ethereum Classic Split (July 20, 2016)

On July 20, 2016, at block 1,920,000, Ethereum executed the hard fork. The fork implemented an "irregular state change" that moved all DAO funds to a recovery contract where investors could withdraw their original ETH contributions. The fork succeeded in returning the stolen funds, but created an unexpected consequence: a permanent blockchain split.

Miners and users who opposed the fork continued running the pre-fork software, creating Ethereum Classic (ETC). Initially dismissed as a protest that would quickly die, Ethereum Classic gained legitimacy when Poloniex exchange listed it on July 24, 2016. This created a unique situation: anyone holding ETH before the fork now possessed equivalent amounts of both ETH (on the new chain) and ETC (on the original chain).

The split created immediate technical challenges, particularly "replay attacks" where transactions on one chain could be replayed on the other. Users had to carefully split their coins using specialized smart contracts to safely transact on both chains. This problem wasn't fully resolved until January 13, 2017, when Ethereum Classic implemented changes to make the chains functionally independent.

The philosophical divide between the chains remained stark. Ethereum (ETH) embraced the idea that the community could coordinate to reverse "clearly wrong" outcomes. Ethereum Classic (ETC) maintained that immutability was absolute—code executed as written, regardless of consequences. The attacker retained approximately $8 million worth of ETC from the original theft, though these funds were never conclusively traced or recovered.

### Enterprise Blockchain Emergence

While The DAO crisis dominated headlines, 2016 also marked blockchain's entrance into enterprise computing. The Linux Foundation launched Hyperledger in February 2016 with founding members including IBM, Intel, Cisco, Digital Asset, and R3. Unlike public blockchains, Hyperledger focused on developing permissioned frameworks for business use cases where participants are known and trusted.

IBM became enterprise blockchain's most aggressive advocate, contributing its OpenBlockchain codebase to Hyperledger (which became Hyperledger Fabric). The company launched blockchain pilot projects across industries—supply chain tracking with Walmart and Maersk, trade finance platforms with major banks, and food safety initiatives. IBM recognized that enterprises needed privacy, permissioning, and performance characteristics that public blockchains couldn't provide.

R3, which had formed a banking consortium in 2015, expanded to over 70 member institutions by 2016 and began developing Corda—a distributed ledger specifically designed for financial services. Unlike Ethereum's global state machine, Corda focused on bilateral agreements and regulatory compliance, recognizing that banks needed to share some data while keeping most transactions private.

The enterprise blockchain movement signaled a fundamental split in blockchain's evolution: public, permissionless networks pursuing decentralization at all costs versus private, permissioned networks optimizing for enterprise requirements. This dichotomy would define blockchain development for years to come, with each approach serving different use cases and philosophical commitments.

### Standardization of "Blockchain" as a Term

Before 2016, the technology was often called "the blockchain," "blockchain technology," or "distributed ledger technology (DLT)." During 2016, "blockchain" emerged as the standard single-word term, reflecting the technology's maturation into a distinct category. This linguistic shift coincided with blockchain's expansion beyond cryptocurrency into enterprise applications, supply chain management, digital identity, and other domains.

Academic institutions began offering blockchain courses, major consulting firms published blockchain strategy reports, and governments worldwide initiated blockchain working groups. The technology had evolved from Bitcoin's obscure underlying mechanism into a recognizable innovation category worthy of independent study and investment.

## Important Papers and Documents

### 📄 Decentralized Autonomous Organization to Automate Governance (The DAO Whitepaper)

**Author:** Christoph Jentzsch (Founder & CTO, Slock.it)  
**Published:** 2016  
**Status:** Final Draft - Under Review

This technical whitepaper describes the first implementation of a Decentralized Autonomous Organization designed to automate organizational governance and decision-making through smart contracts on the Ethereum blockchain. Written by Christoph Jentzsch before The DAO's launch, the document outlines both the promise and technical implementation of code-based governance.

The paper introduces the DAO concept as a solution to two fundamental problems in traditional organizations: (1) people don't always follow rules, and (2) people don't always agree on what rules mean. By encoding governance rules directly into Ethereum smart contracts, The DAO aimed to eliminate ambiguity, reduce costs, and empower small investors through transparent, automated decision-making.

Key technical components described include:

**Token Creation and Funding:** The whitepaper details how ether contributions during a creation phase would generate DAO tokens proportional to the amount invested. These tokens granted both voting rights and ownership stakes, with token prices varying over time to reward early participants who accepted greater risk.

**Proposal and Voting Mechanisms:** Any token holder could submit proposals for how to spend DAO funds. Proposals required a minimum deposit to prevent spam, voting periods of at least two weeks (one week for curator changes), and a minimum quorum calculated as a percentage of total tokens. If quorum was reached and a majority approved, the proposal would automatically execute.

**The Curator System:** To prevent malicious proposals, The DAO employed a "Curator" who maintained a whitelist of addresses that could receive funds. This gave the Curator significant power, but token holders could propose changing the Curator, enabling democratic checks on central authority.

**The Split Function:** The most innovative feature was the "split" mechanism designed to protect minority rights. If token holders disagreed with a proposal, they could split off into a new DAO, taking their proportional share of funds and rewards. This prevented the majority from robbing the minority—a common problem in traditional organizations. Ironically, this split function contained the reentrancy vulnerability that the attacker exploited.

**Reward Token System:** The whitepaper explains how "reward tokens" would track returns from successful investments. When DAO-funded projects sent profits back, these would be distributed to token holders based on their original contributions, even if they had since split into separate DAOs. This ensured that early investors who helped fund successful projects would benefit from those investments even after leaving the original organization.

The document explicitly acknowledges legal uncertainty: "The legal status of DAOs remains the subject of active and vigorous debate and discussion." This prescient warning would prove significant when The DAO attack raised questions about whether the hacker committed theft or simply exploited code that functioned exactly as written.

Perhaps most tragically, the whitepaper includes detailed technical specifications for preventing attacks. Section 4 discusses the "Majority Robbing the Minority Attack" and proposes the split function as a solution. The very mechanism designed to protect users became the attack vector that nearly destroyed the project.

The document represents both blockchain's ambitious vision and its early naivety. The authors understood governance challenges deeply enough to encode protections into code but underestimated the difficulty of writing bug-free smart contracts that handle millions of dollars. The DAO proved that "code is law" philosophy requires perfect code—an impossibly high standard given software development's inherent complexity.

**Link:** Link to be added (Original whitepaper available in archived repositories)

### 📄 Analysis of the DAO Exploit

**Author:** Phil Daian (Hacking, Distributed)  
**Published:** June 18, 2016

This detailed technical analysis, published just one day after the attack began, provided the first comprehensive explanation of how the DAO hack worked. Phil Daian, a blockchain security researcher, breaks down the exploit's mechanics for both technical and general audiences, helping the Ethereum community understand the severity of the vulnerability.

The analysis explains the recursive send pattern that made The DAO vulnerable: the splitDAO function would transfer ether before updating user balances and totals. By calling splitDAO again within the same transaction (through a fallback function), the attacker could repeatedly withdraw funds before the contract updated to reflect previous withdrawals. This "reentrancy attack" became one of the most studied vulnerabilities in smart contract security.

Daian notes the particular irony of the exploit: The DAO's developers had recently fixed the exact same vulnerability in the withdrawReward function, as documented in their blog posts claiming victory over security issues. While they secured one function, they missed the identical pattern in splitDAO—demonstrating how reviewing functions in isolation can miss systemic vulnerabilities.

The post details the attack's execution: the hacker paid for substantial gas to enable deep recursive calls, allowing the attack to continue "with a vengeance." Daian estimates the attacker could have drained the entire DAO if they had continued, but they stopped after securing approximately one-third of the funds—possibly to avoid detection or because they achieved their target.

The analysis also addresses the "Code is Law" debate head-on. Daian argues that while the code executed exactly as written, calling this "legitimate" ignores that the DAO's intended purpose was investment decision-making, not enabling unlimited withdrawals through recursive calls. The exploit worked because smart contracts can call other contracts in unexpected ways, and secure subroutines can render parent functions vulnerable when combined incorrectly.

This analysis became essential reading for understanding both the technical specifics of the attack and the broader implications for smart contract development. It demonstrated that even heavily audited code (The DAO had undergone multiple security reviews) could contain catastrophic vulnerabilities, fundamentally changing how developers approached blockchain security.

**Link:** https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/

### 📄 CRITICAL UPDATE Re: DAO Vulnerability (Ethereum Foundation Blog Post)

**Published:** June 17, 2016  
**Ethereum Foundation**

This emergency blog post from the Ethereum Foundation, published as the attack was actively draining funds, represents one of blockchain's most critical crisis communications. The post explains that an attack exploiting a recursive calling vulnerability in The DAO's split function is currently siphoning ether into a child DAO.

Critically, the post reassures the community: "This is an issue that affects the DAO specifically; Ethereum itself is perfectly safe." This distinction was essential for preventing panic across the entire Ethereum ecosystem. The vulnerability existed in The DAO's smart contract code, not in Ethereum's underlying protocol.

The announcement details the timeline: the leaked ether is in a child DAO with a 27-day creation window, meaning the attacker cannot immediately withdraw funds. This time constraint gave the community a window to respond, though it also created intense pressure to find a solution before the period expired.

The post proposes a software fork with "NO ROLLBACK"—a soft fork that would blacklist transactions interacting with specific contract addresses. The proposal emphasizes that this would not reverse any transactions or blocks, only prevent future transactions that would let the attacker withdraw funds. Miners and mining pools are urged to download and run the soft fork code if they agree with this approach.

However, this soft fork approach was soon abandoned when researchers discovered it created a denial-of-service vulnerability. The post's quick obsolescence demonstrates the challenge of coordinating rapid technical responses during crisis situations when every hour matters.

The communication also addresses the broader ecosystem: exchanges should resume trading ETH, contract authors should be careful about recursive call bugs, and DAO token holders should "sit tight and remain calm." This multifaceted messaging attempted to maintain confidence across different stakeholder groups while the community debated solutions.

**Link:** https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability

### 📄 Onward from the Hard Fork (Ethereum Foundation Blog Post)

**Published:** July 26, 2016  
**Ethereum Foundation**

Published six days after the hard fork execution, this post addresses the reality that had emerged: two separate Ethereum chains now existed. Users holding ETH before block 1,920,000 now possessed both ETH (on the fork chain) and ETC (on the no-fork chain).

The post clarifies the technical situation: most Ethereum clients default to the fork chain (ETH), including those developed by the Ethereum Foundation and third parties like Parity. Users wanting to interact with the no-fork chain would need to specifically select that option.

Critically, the post addresses replay attacks—a major security concern when transactions on one chain could be replayed on the other. The Foundation provides a splitter contract address (0xaBbb6bEbFA05aA13e908EaA492Bd7a8343760477) that users could employ to separate their ETH and ETC into different addresses, preventing unintended transactions on both chains.

The post also encourages the ETC community to implement their own hard fork to change transaction formats, making replay attacks technically impossible. This suggestion reflects a pragmatic recognition that the chain split was permanent and both communities needed to protect their users.

The communication's measured tone reflects the Foundation's difficult position: they had supported the fork but needed to acknowledge the legitimate existence of Ethereum Classic. The post avoids declaring one chain "correct" or the other "wrong," instead focusing on practical guidance for users navigating this unprecedented situation.

**Link:** https://blog.ethereum.org/2016/07/26/onward-from-the-hard-fork

### 📄 Report of Investigation Pursuant to Section 21(a): The DAO (SEC Report)

**Published:** July 25, 2017 (Released in 2017 but analyzing 2016 events)  
**U.S. Securities and Exchange Commission**

Though published in 2017, this SEC investigative report analyzes The DAO's 2016 token sale and concludes that DAO tokens constituted securities under U.S. law. This landmark determination had far-reaching implications for the blockchain industry, establishing that token sales could be subject to securities regulations regardless of their decentralized or automated nature.

The report details The DAO's structure and operation based on publicly available information, including the whitepaper, website, and forum discussions. It describes how investors purchased DAO tokens with ether, expecting profits from the organization's investments, and had voting rights on proposals but relied on The DAO's creators and curators for success.

Applying the Howey Test (the legal standard for determining whether something is an investment contract), the SEC concluded that DAO tokens were securities because they involved:
1. An investment of money (ether)
2. In a common enterprise (The DAO)
3. With an expectation of profits
4. Derived from the efforts of others (The DAO's developers and curators)

The report emphasizes that Christoph Jentzsch and Slock.it actively promoted The DAO through blog posts and social media, encouraged investment, and touted their expertise—all factors suggesting centralized promotion despite the decentralized technical structure.

Importantly, the SEC chose not to bring charges against The DAO's creators, citing the novel technology, quick response to the hack, and absence of significant investor harm after the hard fork. However, the report served as formal notice to the blockchain industry: token sales could be securities offerings requiring registration or exemptions under securities law.

This determination reshaped the entire ICO (Initial Coin Offering) market. Projects launching after the report needed to carefully structure their token sales to avoid securities classification or comply with securities regulations. The report established that automation and decentralization don't exempt projects from securities law if the economic reality suggests an investment contract.

**Link:** https://www.sec.gov/files/litigation/investreport/34-81207.pdf

## Historical Context

The events of 2016 must be understood against blockchain's rapid evolution from theoretical concept to mainstream technology. Bitcoin had proven that decentralized consensus was possible, and Ethereum had demonstrated that blockchains could execute programmable logic beyond simple transactions. The question facing the industry in early 2016 was whether these capabilities could support real-world applications and organizations.

The DAO represented the logical culmination of "code is law" philosophy. If smart contracts could automate transactions, why not automate entire organizations? If blockchain enabled trustless value transfer, why not trustless governance? These questions drove serious technical talent and enormous capital toward an experiment in autonomous organization.

The hack exposed the gap between blockchain's theoretical promise and practical reality. Writing bug-free code is difficult enough for traditional applications; for immutable smart contracts controlling millions of dollars, a single vulnerability becomes catastrophic. The DAO demonstrated that "code is law" requires perfect code—a standard that software engineering cannot guarantee.

The hard fork debate revealed deep philosophical divisions within the blockchain community. Ethereum's decision to fork prioritized pragmatism and user protection over ideological purity. Ethereum Classic's continued existence proved that immutability remained a compelling value proposition for some users. The split demonstrated that blockchain governance isn't just technical—it's fundamentally social and political.

The parallel emergence of enterprise blockchain showed how different constituencies valued different blockchain properties. Public blockchain advocates prioritized decentralization, censorship resistance, and permissionless participation. Enterprise users cared more about privacy, regulatory compliance, and transaction throughput. These divergent priorities would drive blockchain evolution in multiple directions.

The year also marked the beginning of smart contract security as a distinct discipline. Before The DAO, security research focused primarily on consensus mechanisms and cryptographic primitives. After The DAO, the industry recognized that application-layer vulnerabilities could be just as catastrophic as protocol-level attacks. This spawned an entire industry of smart contract auditors, formal verification tools, and security best practices.

## Connection to Modern Blockchain

The DAO's influence on modern blockchain development cannot be overstated. Its failure fundamentally changed how developers approach smart contract security:

**Security Tooling and Best Practices:** Modern smart contract development emphasizes security from the start. Tools like MythX, Slither, and Echidna automatically detect vulnerabilities. Formal verification mathematically proves contract correctness. Security audits by specialized firms are standard before mainnet deployment. OpenZeppelin provides battle-tested, auditable smart contract libraries that developers can use instead of building from scratch.

**Design Patterns:** The reentrancy vulnerability that destroyed The DAO is now thoroughly studied and understood. Modern contracts use checks-effects-interactions patterns, ensuring state updates occur before external calls. Reentrancy guards prevent recursive calls entirely. Developers learn these patterns in their first smart contract tutorials, with The DAO serving as the canonical cautionary tale.

**DAO Evolution:** Despite The DAO's failure, the concept of decentralized autonomous organizations survived and thrived. MakerDAO, launched in 2017, successfully governs a multi-billion dollar stablecoin system using lessons learned from The DAO's mistakes. Modern DAOs like Compound, Uniswap, and Aave demonstrate that decentralized governance can work when properly designed and incrementally deployed.

Modern DAO frameworks address The DAO's weaknesses through:
- Timelock mechanisms that delay execution, allowing stakeholders to exit before harmful proposals execute
- Emergency pause functions that can freeze operations if vulnerabilities are discovered
- Gradual decentralization, starting with centralized control and progressively transferring power to token holders
- Multi-signature requirements for critical operations, preventing single points of failure
- Bug bounty programs that incentivize security researchers to report vulnerabilities responsibly

**Governance Precedents:** The Ethereum hard fork established that blockchain communities can coordinate to reverse clearly harmful outcomes. This precedent has been invoked repeatedly—sometimes successfully (Parity wallet freeze, 2017), sometimes unsuccessfully (DAO hack attempts on other chains). The debate over when intervention is justified versus when immutability must be preserved continues in every blockchain community.

The fork also demonstrated blockchain governance's inherently political nature. Technical decisions about protocol changes can't be separated from questions about stakeholder interests, philosophical values, and economic consequences. Modern blockchain governance research studies The DAO fork as a case study in decentralized decision-making under crisis conditions.

**Enterprise Blockchain Maturation:** The enterprise blockchain movement that accelerated in 2016 has produced significant real-world applications. IBM Food Trust tracks food from farm to table. TradeLens digitizes global shipping documentation. JPMorgan's Quorum processes billions in daily transactions. These applications validate the enterprise blockchain premise: that permissioned networks can solve specific business problems even if they sacrifice some decentralization.

However, enterprise blockchain has also faced criticism that it's "blockchain in name only"—using distributed ledger technology while abandoning core blockchain properties like permissionless participation and censorship resistance. The tension between public and private blockchains that emerged in 2016 continues to define debates about what "blockchain" truly means.

**Regulatory Frameworks:** The SEC's DAO report established that token sales can be securities offerings, fundamentally changing how blockchain projects raise capital. Modern projects carefully structure tokens as utility tokens (providing access to a platform) rather than securities (promising investment returns). Security token offerings (STOs) emerged as a compliant alternative for projects explicitly offering investment contracts.

The regulatory attention The DAO attracted contributed to broader government engagement with blockchain technology. Regulatory sandboxes, guidance on token classification, and blockchain-specific legislation all emerged partly in response to The DAO's demonstration that decentralized systems could have centralized consequences.

**Research and Development:** The DAO hack catalyzed research into smart contract verification, blockchain security, and decentralized governance. Academic conferences now regularly feature papers on formal verification of smart contracts, mechanism design for DAOs, and governance models for decentralized systems. The insurance industry emerged to offer smart contract coverage, recognizing that even audited contracts carry residual risk.

## Further Reading

### Academic Papers on Smart Contract Security
- "Making Smart Contracts Smarter" (Luu et al., 2016) - Presents Oyente, the first tool for automatic analysis of smart contract security
- "A Survey of Attacks on Ethereum Smart Contracts" (Atzei et al., 2017) - Comprehensive taxonomy of smart contract vulnerabilities
- "Formal Verification of Smart Contracts" (Bhargavan et al., 2016) - Introduces formal methods for proving contract correctness

### Enterprise Blockchain Resources
- "Blockchain Technology Overview" (NIST, 2018) - U.S. government assessment of blockchain capabilities and limitations
- "Hyperledger Architecture, Volume 1" (Linux Foundation, 2017) - Technical reference for enterprise blockchain platforms
- "Enterprise Ethereum Alliance Specification" (EEA, 2019) - Standards for enterprise use of Ethereum technology

### Historical and Economic Analysis
- "The Meaning of Decentralization" (Buterin, 2017) - Vitalik Buterin's post-fork analysis of what decentralization truly means
- "Blockchain Governance: Programming Our Future" (Zamfir, 2017) - Explores governance challenges revealed by The DAO fork
- "Regulating Blockchain" (De Filippi & Wright, 2018) - Legal and regulatory implications of decentralized systems

### DAO Governance and Evolution
- "Decentralizing Decentralization" (Schneider, 2018) - Sociological analysis of blockchain governance
- "The DAO to DeFi: The Evolution of Decentralized Governance" (Arruñada & Garicano, 2019)
- MakerDAO Governance Documentation - Practical implementation of lessons learned from The DAO