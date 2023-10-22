# Design-Project

<b>What Is a Blockchain?</b>

A blockchain is a distributed database or ledger shared among a computer network's nodes. They are best known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record of transactions, but they are not limited to cryptocurrency uses. Blockchains can be used to make data in any industry immutable—the term used to describe the inability to be altered.

<b>How Does a Blockchain Work?</b>

A blockchain consists of programs called scripts that conduct the tasks you usually would in a database: Entering and accessing information and saving and storing it somewhere. A blockchain is distributed, which means multiple copies are saved on many machines, and they must all match for it to be valid.

<b>Transaction Process</b>

In Bitcoin, your transaction is sent to a memory pool, where it is stored and queued until a miner or validator picks it up. Once it is entered into a block and the block fills up with transactions, it is closed and encrypted using an encryption algorithm. Then, the mining begins.

The entire network works simultaneously, trying to "solve" the hash. Each one generates a random hash except for the "nonce," short for number used once.

Every miner starts with a nonce of zero, which is appended to their randomly-generated hash. If that number isn't equal to or less than the target hash, a value of one is added to the nonce, and a new block hash is generated. This continues until a miner generates a valid hash, winning the race and receiving the reward.

Once a block is closed, a transaction is complete. However, the block is not considered to be confirmed until five other blocks have been validated. Confirmation takes the network about one hour to complete because it averages just under 10 minutes per block (the first block with your transaction and five following blocks multiplied by 10 equals about 60 minutes).

Not all blockchains follow this process. For instance, the Ethereum network randomly chooses one validator from all users with ether staked to validate blocks, which are then confirmed by the network. This is much faster and less energy intensive than Bitcoin's process.

<b>Blockchain Decentralization</b>

A blockchain allows the data in a database to be spread out among several network nodes—computers or devices running software for the blockchain—at various locations. This not only creates redundancy but maintains the fidelity of the data. For example, if someone tries to alter a record at one instance of the database, the other nodes would prevent it from happening. This way, no single node within the network can alter information held within it.

<b>Where to use blockchain technology</b>

Insurance - Coverage Proof – Nationwide insurance
Health - MedRec – Patient information share permission
Land Registry
Voting
Donation – BitGive
Finance – Bitcoin, Ripple
Supply Chain – IBM Blockchain
Social Media – Matchpool
Ticket Sale – Guts


Some companies experimenting with blockchain include Walmart, Pfizer, AIG, Siemens, and Unilever, among others. For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations.4

Why do this? The food industry has seen countless outbreaks of E. coli, salmonella, and listeria; in some cases, hazardous materials were accidentally introduced to foods. In the past, it has taken weeks to find the source of these outbreaks or the cause of sickness from what people are eating.

Using blockchain allows brands to track a food product’s route from its origin, through each stop it makes, to delivery. Not only that, but these companies can also now see everything else it may have come in contact with, allowing the identification of the problem to occur far sooner—potentially saving lives. This is one example of blockchain in practice, but many other forms of blockchain implementation exist.

<b>Smart Contracts</b>

A smart contract is a computer code that can be built into the blockchain to facilitate a contract agreement. Smart contracts operate under a set of conditions to which users agree. When those conditions are met, the terms of the agreement are automatically carried out.
Say, for example, that a potential tenant would like to lease an apartment using a smart contract. The landlord agrees to give the tenant the door code to the apartment as soon as the tenant pays the security deposit. The smart contract would automatically send the door code to the tenant when it was paid. It could also be programmed to change the code if rent wasn't paid or other conditions were met.


<b>What’s the Difference Between a Private Blockchain and a Public Blockchain?</b>

A public blockchain, also known as an open or permissionless blockchain, is one where anybody can join the network freely and establish a node. Because of their open nature, these blockchains must be secured with cryptography and a consensus system like proof of work (PoW). A private or permissioned blockchain, on the other hand, requires each node to be approved before joining. Because nodes are considered to be trusted, the layers of security do not need to be as robust.
 
Decentralization should be applied where it makes sense. Just because it’s a blockchain application doesn’t mean it needs to be 100% decentralized. The goal of any blockchain solution is to deliver what the users of that solution need, and this may or may not include certain levels of decentralization. To better understand decentralized networks, the table below breaks out how decentralized networks compare to the more common centralized and distributed networks.
 


<b>Farkların olduğu tablo:</b>

https://aws.amazon.com/tr/blockchain/decentralization-in-blockchain/

Each network architecture has its benefits and tradeoffs. For example, decentralized blockchain systems, unlike distributed systems, typically prioritize security over performance. So, when a blockchain network scales up or out, the network becomes more secure, but performance slows down because each member node must validate all data being added to the ledger. Adding members to a decentralized network can make it safer, but not necessarily faster.

https://mlsdev.com/blog/156-how-to-build-your-own-blockchain-architecture

![](https://d32myzxfxyl12w.cloudfront.net/assets/images/article_images/66928a7ce8d460a845f4d63e78cb851fae56317c.jpg?1548938275)

![](https://d32myzxfxyl12w.cloudfront.net/assets/images/article_images/9c113ff88514d876b69961585759c97cb3ee61f8.jpg?1548936461)

https://resources.infosecinstitute.com/topics/blockchain-security-overview/blockchain-structure/

<b>Previous block hash:</b> This value implements the “chains” in blockchain. More on it in a later section

<b>Timestamp:</b> This indicates roughly when a block was created. It is used by smart contracts that depend on timestamps and to determine how well the current average rate of block creation matches the target value

<b>Transaction root:</b> This value summarizes the contents of the block’s body. It helps to ensure that the transactions that the block contains benefit from the same integrity protections as the block header

<b>Nonce:</b> This is a random value controlled by the block creator. It is used in the Proof of Work consensus algorithm to change the hash of the block header. In Proof of Work, only a block with a header value less than a certain threshold is considered valid


https://komodoplatform.com/en/academy/proof-of-work/

<b>Proof of Work (PoW)</b>

More generally, Proof of Work is a phrase used to describe any system that requires computers to exert computational effort in order to complete a process or task. This extra computational effort results in a solution, which is then presented and verified before the desired process or task is executed. Proof of Work systems were initially designed to prevent spam attacks and Distributed Denial of Service (DDoS) attacks, among other things. Now, Proof of Work is most commonly associated with blockchain technology.

In proof of work, miners compete to add the next block (a set of transactions) in the chain by racing to solve a extremely difficult cryptographic puzzle. The first to solve the puzzle, wins the lottery. As a reward for his or her efforts, the miner receives 12.5 newly minted bitcoins – and a small transaction fee.

<b>Technical Details of Proof of Work In Blockchain</b>
In the case of Proof of Work blockchains, the "work" nodes on the network are doing-- that is, the mathematical problem they are trying to solve-- is finding a block hash that is less than or equal to a predetermined number, known as the "target." The block hash is the block header data run together via a cryptographic hash function. The block header itself is made up of 6 pieces of data:

- the version of the blockchain codebase active at the time of the block is mined
	a compressed form of the target number, known as Bits
- the timestamp of the exact time that the block is mined
	the Merkle Root, which is all the block's transaction IDs hashed via a Merkle Tree
- a cryptographic hash of the previous block's block hash
- the nonce

So, these 6 pieces of data make up a block's header. When these 6 pieces of data are hashed together, the resulting hash is known simply as the "block hash." In order for a miner to mine a block, they must find a block hash that is less than or equal to the target.

This is true because miners are trying to find a block hash that is less than or equal to the target. If the target is extremely high, the chances that a miner can find a block hash less than the target are comparatively high. If the target is low, then there is a much more limited set of numbers that are less than or equal to that target. This makes it harder to find a block hash beneath the threshold.


The target of every Proof of Work blockchain is adjusted periodically to ensure a relatively constant block time. With Bitcoin, for instance, the target is adjusted every two weeks. Bitcoin aims to maintain 10 minute block times. If the miners on the peer to peer network are too fast and are finding blocks too quickly, the target is reduced to increase the difficulty and slow down the rate at which miners are finding blocks. If the miners are struggling to find blocks and block times are regularly exceeding 10 minutes, then the target is increased to make it easier for miners to find blocks, thus slightly speeding up block times.

Now, recall that the block hash of any block in a Proof of Work blockchain is the cryptographic hash of the same block's header, which itself is made up of six pieces of data. Notice that 5 of the 6 pieces of data are static-- meaning they must remain the same and cannot be adjusted.

The only number that can be changed is the nonce. The nonce is called the nonce because it is the number used only once. Each block has a unique nonce.

As noted above, the objective of the mathematical race-- the objective of cryptocurrency mining-- is to find a block hash that is less than or equal to the target. Since the nonce is the only number that can be changed, miners try to mine blocks by adjusting the nonce incrementally again and again. The goal is to find a nonce that, when hashed together with the other 5 pieces of data that make up the block header, produces a block hash that is less than or equal to the target.



<b>Proof of stake</b>

The most common alternative to proof of work is proof of stake.

In this type of consensus algorithm, instead of investing in expensive computer equipment in a race to mine blocks, a 'validator' invests in the coins of the system.

Note the term validator. That's because no coin creation (mining) exists in proof of stake. Instead, all the coins exist from day one, and validators (also called stakeholders, because they hold a stake in the system) are paid strictly in transaction fees.

In proof of stake, your chance of being picked to create the next block depends on the fraction of coins in the system you own (or set aside for staking). A validator with 300 coins will be three times as likely to be chosen as someone with 100 coins.

If the validator tries to double sign or fork the system, those coins are slashed.


<b>Proof of activity</b>

Proof of activity is a hybrid approach that combines both proof of work and proof of stake.

At this point, the system switches to proof of stake. Based on information in the header, a random group of validators is chosen to sign the new block. The more coins in the system a validator owns, the more likely he or she is to be chosen. The template becomes a full-fledged block as soon as all of the validators sign it.

If some of the selected validators are not available to complete the block, then the next winning block is selected, a new group of validators is chosen, and so on, until a block receives the correct amount of signatures. Fees are split between the miner and the validators who signed off on the block.

<b>Proof of burn</b>

With proof of burn, instead of pouring money into expensive computer equipment, you 'burn' coins by sending them to an address where they are irretrievable. By committing your coins to never-never land, you earn a lifetime privilege to mine on the system based on a random selection process.

Depending on how proof of burn is implemented, miners may burn the native currency or the currency of an alternative chain, like bitcoin. The more coins you burn, the better chance you have of being selected to mine the next block.

<b>Proof of capacity</b>

As we’ve seen, most of these alternative protocols employ some type of pay-to-play scheme. Proof of capacity is no different, but here you 'pay' with hard drive space. The more hard drive space you have, the better your chance of mining the next block and earning the block reward.

Prior to mining in a proof-of-capacity system, the algorithm generates large data sets known as 'plots', which you store on your hard drive. The more plots you have, the better your chance of finding the next block in the chain.


<b>Proof of elapsed time</b>

Chipmaker Intel has come up with its own alternative consensus protocol called proof of elapsed time. This system works similarly to proof of work, but consumes far less electricity.

Further, instead of having participants solve a cryptographic puzzle, the algorithm uses a trusted execution environment (TEE) – such as SGX – to ensure blocks get produced in a random lottery fashion, but without the required work.


https://developer.bitcoin.org/reference/transactions.html

http://cryptorials.io/bitcoin-wallets-explained-how-to-choose-the-best-wallet-for-you/


https://www.coindesk.com/markets/2017/03/04/a-short-guide-to-blockchain-consensus-protocols/

https://www.youtube.com/watch?v=Jw1iFr4v58M


<b>The Cap theorem</b>

Consistency (Bir node’a verdiğim değer, başka bir node’da da aynı olmalı)
Availability (Bir node ile konuştuğumda, geri cevap vermesi)
Partition Tolerance ()

Sadece ikisine aynı anda sahip olabiliriz

https://raiden.network/101.html

The Raiden Network is an off-chain scaling solution for performing ERC20-compliant token transfers on the Ethereum blockchain. It is Ethereum's version of Bitcoin's Lightning Network, enabling near-instant, low-fee, scalable, and privacy-preserving payments.
 
The Raiden Network allows secure transfers of tokens between participants without the need for global consensus. This is achieved using digitally signed and hash-locked transfers, called balance proofs, fully collateralized by previously setup on-chain deposits. This concept, illustrated in figure 1, is known as payment channel technology. Payment channels allow for practically unlimited, bidirectional transfers between two participants, as long as the net sum of their transfers does not exceed the deposited tokens. These transfers can be performed instantaneously and without any involvement of the actual blockchain itself, except for an initial one-time on-chain creation and an eventual closing of the channel.

https://lightning.network/lightning-network-paper.pdf

The payment network Visa achieved 47,000 peak transactions per second (tps) on its network during the 2013 holidays[2], and currently averages hundreds of millions per day. Currently, Bitcoin supports less than 7 transactions per second with a 1 megabyte block limit. If we use an average of 300 bytes per bitcoin transaction and assumed unlimited block sizes, an equivalent capacity to peak Visa transaction volume of 47,000/tps would be nearly 8 gigabytes per Bitcoin block, every ten minutes on average. Continuously, that would be over 400 terabytes of data per year

While it is possible to scale at a small level, it is absolutely not possible
to handle a large amount of micropayments on the network or to encompass
all global transactions. For bitcoin to succeed, it requires confidence that if
it were to become extremely popular, its current advantages stemming from
decentralization will continue to exist.
 

<b>A Network of Micropayment Channels Can Solve Scalability</b>

“If a tree falls in the forest and no one is around to hear it, does
it make a sound?”

The above quote questions the relevance of unobserved events —if nobody hears the tree fall, whether it made a sound or not is of no consequence. Similarly, in the blockchain, if only two participants care about an everyday recurring transaction, it’s not necessary for all other nodes in the bitcoin network to know about that transaction. It is instead preferable to only have the bare minimum of information on the blockchain

https://www.youtube.com/watch?v=f3CFUbeehc8&t=587s&ab_channel=99Bitcoins

SEGWIT aims to solve bitcoin scalability problem 

more transaction can fit in 1 mb block

https://www.coindesk.com/markets/2014/02/12/what-the-bitcoin-bug-means-a-guide-to-transaction-malleability/

It's an attack that lets someone change the unique ID of a bitcoin transaction before it is confirmed on the bitcoin network. The change makes it possible for someone to pretend that a transaction didn't happen, if all the right conditions are in place.

https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/

Here’s one: imagine that a real-world client wishes to log into a web server using a password. The standard ‘real world’ approach to this problem involves storing a hashed version of the password on the server. The login can thus be viewed as a sort of ‘proof’ that a given password hash is the output of a hash function on some password — and more to the point, that the client actually knows the password.

<b>The Ali Baba cave example</b>

There is a well-known story presenting the fundamental ideas of zero-knowledge proofs, first published in 1990 by Jean-Jacques Quisquater and others in their paper "How to Explain Zero-Knowledge Protocols to Your Children".[7] Using the common Alice and Bob anthropomorphic thought experiment placeholders, the two parties in a zero-knowledge proof are Peggy as the prover of the statement, and Victor, the verifier of the statement.

In this story, Peggy has uncovered the secret word used to open a magic door in a cave. The cave is shaped like a ring, with the entrance on one side and the magic door blocking the opposite side. Victor wants to know whether Peggy knows the secret word; but Peggy, being a very private person, does not want to reveal her knowledge (the secret word) to Victor or to reveal the fact of her knowledge to the world in general.

They label the left and right paths from the entrance A and B. First, Victor waits outside the cave as Peggy goes in. Peggy takes either path A or B; Victor is not allowed to see which path she takes. Then, Victor enters the cave and shouts the name of the path he wants her to use to return, either A or B, chosen at random. Providing she really does know the magic word, this is easy: she opens the door, if necessary, and returns along the desired path.

However, suppose she did not know the word. Then, she would only be able to return by the named path if Victor were to give the name of the same path by which she had entered. Since Victor would choose A or B at random, she would have a 50% chance of guessing correctly. If they were to repeat this trick many times, say 20 times in a row, her chance of successfully anticipating all of Victor's requests would be reduced to 1 in 220, or 9.56 × 10−7.

Thus, if Peggy repeatedly appears at the exit Victor names, he can conclude that it is extremely probable that Peggy does, in fact, know the secret word.

Notice that Peggy could prove to Victor that she knows the magic word, without revealing it to him, in a single trial. If both Victor and Peggy go together to the mouth of the cave, Victor can watch Peggy go in through A and come out through B. This would prove with certainty that Peggy knows the magic word, without revealing the magic word to Victor. However, such a proof could be observed by a third party, or recorded by Victor and such a proof would be convincing to anybody. In other words, Peggy could not refute such proof by claiming she colluded with Victor, and she is therefore no longer in control of who is aware of her knowledge.

https://inst.eecs.berkeley.edu//~cs162/fa12/hand-outs/Original_Byzantine.pdf

https://www.youtube.com/watch?v=dfsRQyYXOsQ

<b>Byzantine Generals Problem: Proof of Work ile çözülebilir.
</b>

Birden çok bizans generali var  ve birbirilerinden çok uzaktalar. Şehre sadece aynı anda saldırırlarsa ele geçirebilirler. Şafak vakti saldırma kararı vermek için diğer generallere elçi yolladığımızda olabilecekler:
- Elçiler yolda öldürülebilir.
- Onay mesajı geri gelemeyebilir
- Hainler geri çekilme mesajı yollayabilir
- Onay mesajı yollasalar bile bize ulaşamayabilir
- Onay mesajı bize yollansa bile bize ulaştığını bilemeyebilirler

https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf

http://pmg.csail.mit.edu/papers/osdi99.pdf

http://thesecretlivesofdata.com/raft

https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/

https://www.youtube.com/watch?v=IafgKJN3nwU&ab_channel=BlockchainatBerkeleyX

PBFT solution to Practice Byzantine Fault Tolerance

Fast

Handle f Byzantine faults in a system with 3f + 1 nodes

BFT-NFS only %3 slower than standart unreplicated NFS


preprepare prepare and commit phases

preprepare: a node sends prepare messages to all other nodes
If any other node accepts the preprepare message, sends a prepare message to all other nodes

If leader node takes 

Leslie Lamport proved that if we have 3m+1 correctly working processors, a consensus(agreement on same state) can be reached if atmost m processors are faulty which means that strictly more than two-thirds of the total number of processors should be honest.

https://www.youtube.com/watch?v=_fgW2IM6ctM

https://corporatefinanceinstitute.com/resources/cryptocurrency/stablecoin/

https://corporatefinanceinstitute.com/resources/cryptocurrency/cryptocurrency-exchanges/

Popular Crypto Exchanges are Binance, Coinbase Exchange, Kraken and KuCoin. Much like stock trading websites or apps, these exchanges allow cryptocurrency investors to buy and sell digital assets at the prevailing price, called spot, or to leave orders that get executed when the asset gets to the investor’s desired price target, called limit orders.

<b>Centralized Cryptocurrency Exchanges</b>

Pros
+ User-friendly
+ Reliable
+ Leverage

Cons
- Hacking risk
- Transaction fees
- Custody of digital assets and risk of fraud

<b>Decentralized Cryptocurrency Exchanges</b>

Pros
+ Custody
+ Preventing market manipulation
+ Less censorship

Cons
- Complexity
- Lack of fiat payments
- Liquidity struggles

<b>Stable coin</b>

Değeri başka bir değere referanslı olarak sabit kalan coinler

Fiat-Collateralized Stablecoins
Fiat-collateralized stablecoins maintain a reserve of a fiat currency (or currencies) such as the U.S. dollar, as collateral assuring the stablecoin's value.
What Is the Purpose of Stablecoin?
Stablecoins aim to provide an alternative to the high volatility of popular cryptocurrencies, including Bitcoin (BTC), which can make cryptocurrency less suitable for common transactions.

https://www.thebalancemoney.com/how-do-stablecoins-work-5295901

Popular stablecoins are pegged to the U.S. dollar, the price of gold, and other cryptocurrencies, such as Bitcoin and Ethereum. In this article, you’ll learn how stablecoins work, the risks, and what they’re used for.

https://www.youtube.com/watch?v=Aqi4qxmFVJU&t=444s&ab_channel=CNBCInternational

https://www.youtube.com/watch?v=GsSSLDzKCOE&ab_channel=99Bitcoins