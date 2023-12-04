import React from "react";
export const Data1_6 = () => {
    return (
        <div>
            < a href="https://raiden.network/101.html">https://raiden.network/101.html</a>
            <br/>
            <strong>The Raiden Network</strong>

            <p>
                The Raiden Network is an off-chain scaling solution for performing ERC20-compliant token transfers on
                the Ethereum blockchain. It is Ethereum's version of Bitcoin's Lightning Network, enabling near-instant,
                low-fee, scalable, and privacy-preserving payments.
            </p>
            <p>
                The Raiden Network allows secure transfers of tokens between participants without the need for global
                consensus. This is achieved using digitally signed and hash-locked transfers, called balance proofs,
                fully collateralized by previously setup on-chain deposits. This concept, illustrated in figure 1, is
                known as payment channel technology. Payment channels allow for practically unlimited, bidirectional
                transfers between two participants, as long as the net sum of their transfers does not exceed the
                deposited tokens. These transfers can be performed instantaneously and without any involvement of the
                actual blockchain itself, except for an initial one-time on-chain creation and an eventual closing of
                the channel.
            </p>


        </div>

    );
}