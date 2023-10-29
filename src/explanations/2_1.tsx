import React from "react";

export const Data2_1 = () => {
    return (
        <div>
            <strong> Proof of Work (PoW)</strong>
           

            <p>
                More generally, Proof of Work is a phrase used to describe any system that requires computers to exert
                computational effort in order to complete a process or task. This extra computational effort results in
                a solution, which is then presented and verified before the desired process or task is executed. Proof
                of Work systems were initially designed to prevent spam attacks and Distributed Denial of Service (DDoS)
                attacks, among other things. Now, Proof of Work is most commonly associated with blockchain technology.
            </p>

            <p>
                In proof of work, miners compete to add the next block (a set of transactions) in the chain by racing to
                solve a extremely difficult cryptographic puzzle. The first to solve the puzzle, wins the lottery. As a
                reward for his or her efforts, the miner receives 12.5 newly minted bitcoins – and a small transaction
                fee.
            </p>

            <p>
                Technical Details of Proof of Work In Blockchain In the case of Proof of Work blockchains, the "work"
                nodes on the network are doing-- that is, the mathematical problem they are trying to solve-- is finding
                a block hash that is less than or equal to a predetermined number, known as the "target." The block hash
                is the block header data run together via a cryptographic hash function. The block header itself is made
                up of 6 pieces of data:

            </p>

            <ul>
                <li>
                    the version of the blockchain codebase active at the time of the block is mined a compressed form of
                    the
                    target number, known as Bits
                </li>

                <li>
                    the timestamp of the exact time that the block is mined the Merkle Root, which is all the block's
                    transaction IDs hashed via a Merkle Tree
                </li>
                <li>
                    a cryptographic hash of the previous block's block hash
                </li>
                <li>
                    the nonce
                </li>
            </ul>


            <p>
                So, these 6 pieces of data make up a block's header. When these 6 pieces of data are hashed together,
                the
                resulting hash is known simply as the "block hash." In order for a miner to mine a block, they must find
                a
                block hash that is less than or equal to the target.
            </p>

            <p>
                This is true because miners are trying to find a block hash that is less than or equal to the target. If
                the target is extremely high, the chances that a miner can find a block hash less than the target are
                comparatively high. If the target is low, then there is a much more limited set of numbers that are less
                than or equal to that target. This makes it harder to find a block hash beneath the threshold.

            </p>

            <p>
                The target of every Proof of Work blockchain is adjusted periodically to ensure a relatively constant
                block time. With Bitcoin, for instance, the target is adjusted every two weeks. Bitcoin aims to maintain
                10 minute block times. If the miners on the peer to peer network are too fast and are finding blocks too
                quickly, the target is reduced to increase the difficulty and slow down the rate at which miners are
                finding blocks. If the miners are struggling to find blocks and block times are regularly exceeding 10
                minutes, then the target is increased to make it easier for miners to find blocks, thus slightly
                speeding up block times.

            </p>

            <p>
                Now, recall that the block hash of any block in a Proof of Work blockchain is the cryptographic hash of
                the same block's header, which itself is made up of six pieces of data. Notice that 5 of the 6 pieces of
                data are static-- meaning they must remain the same and cannot be adjusted.

            </p>

            <p>
                The only number that can be changed is the nonce. The nonce is called the nonce because it is the number
                used only once. Each block has a unique nonce.

            </p>

            <p>
                As noted above, the objective of the mathematical race-- the objective of cryptocurrency mining-- is to
                find a block hash that is less than or equal to the target. Since the nonce is the only number that can
                be changed, miners try to mine blocks by adjusting the nonce incrementally again and again. The goal is
                to find a nonce that, when hashed together with the other 5 pieces of data that make up the block
                header, produces a block hash that is less than or equal to the target.

            </p>

        </div>

    );
}