import React from "react";

export const Data1_4 = () => {
    return (
        <div>
            <strong>Transaction Process</strong>
            <br/>

            <p>In Bitcoin, your transaction is sent to a memory pool, where it is stored and queued until a miner or
                validator picks it up. Once it is entered into a block and the block fills up with transactions, it is
                closed and encrypted using an encryption algorithm. Then, the mining begins.</p>

            <p>
                The entire network works simultaneously, trying to "solve" the hash. Each one generates a random hash
                except for the "nonce," short for number used once.
            </p>

            <p>
                Every miner starts with a nonce of zero, which is appended to their randomly-generated hash. If that
                number isn't equal to or less than the target hash, a value of one is added to the nonce, and a new
                block hash is generated. This continues until a miner generates a valid hash, winning the race and
                receiving the reward.
            </p>

            <p>
                Once a block is closed, a transaction is complete. However, the block is not considered to be confirmed
                until five other blocks have been validated. Confirmation takes the network about one hour to complete
                because it averages just under 10 minutes per block (the first block with your transaction and five
                following blocks multiplied by 10 equals about 60 minutes).

            </p>

            <p>
                Not all blockchains follow this process. For instance, the Ethereum network randomly chooses one
                validator from all users with ether staked to validate blocks, which are then confirmed by the network.
                This is much faster and less energy intensive than Bitcoin's process.

            </p>
            

        </div>

    );
}