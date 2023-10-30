export const Data1_7 = () => {
    return (
        <div>
            < a href="https://lightning.network/lightning-network-paper.pdf">https://lightning.network/lightning-network-paper.pdf</a>
            <br/>
            <strong>Bitcoin Lightning Network</strong>

            <p>
                The payment network Visa achieved 47,000 peak transactions per second (tps) on its network during the
                2013 holidays[2], and currently averages hundreds of millions per day. Currently, Bitcoin supports less
                than 7 transactions per second with a 1 megabyte block limit. If we use an average of 300 bytes per
                bitcoin transaction and assumed unlimited block sizes, an equivalent capacity to peak Visa transaction
                volume of 47,000/tps would be nearly 8 gigabytes per Bitcoin block, every ten minutes on average.
                Continuously, that would be over 400 terabytes of data per year
            </p>
            <p>
                While it is possible to scale at a small level, it is absolutely not possible
                to handle a large amount of micropayments on the network or to encompass
                all global transactions. For bitcoin to succeed, it requires confidence that if
                it were to become extremely popular, its current advantages stemming from
                decentralization will continue to exist.
            </p>
            
            <br/>
            <strong>A Network of Micropayment Channels Can Solve Scalability</strong>
            <p>
                “If a tree falls in the forest and no one is around to hear it, does
                it make a sound?”
            </p>
            <p>
                The above quote questions the relevance of unobserved events —if nobody hears the tree fall, whether it made a sound or not is of no consequence. Similarly, in the blockchain, if only two participants care about an everyday recurring transaction, it’s not necessary for all other nodes in the bitcoin network to know about that transaction. It is instead preferable to only have the bare minimum of information on the blockchain
            </p>
            

        </div>

    );
}