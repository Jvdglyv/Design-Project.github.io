import React from "react";

export const Data1_3 = () => {
    return (
        <div>
            <strong>Contents of a block chain</strong>
            <br/>

            <a href="https://resources.infosecinstitute.com/topics/blockchain-security-overview/blockchain-structure">https://resources.infosecinstitute.com/topics/blockchain-security-overview/blockchain-structure</a>
            <ul>
                <li>Previous block hash: This value implements the “chains” in blockchain. More on it in a later
                    section
                </li>
                <li>Timestamp: This indicates roughly when a block was created. It is used by smart contracts that
                    depend on timestamps and to determine how well the current average rate of block creation matches
                    the target value
                </li>
                <li>Transaction root: This value summarizes the contents of the block’s body. It helps to ensure that
                    the transactions that the block contains benefit from the same integrity protections as the block
                    header
                </li>
                <li>Nonce: This is a random value controlled by the block creator. It is used in the Proof of Work
                    consensus algorithm to change the hash of the block header. In Proof of Work, only a block with a
                    header value less than a certain threshold is considered valid
                </li>
            </ul>
        </div>

    );
}