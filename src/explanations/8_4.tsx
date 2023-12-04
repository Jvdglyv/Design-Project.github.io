import React from "react";

export const Data8_4 = () => {
    return (
        <div>
            
            <strong>
            Message Flow
            </strong>

            <p>
                Transactions are ingested by the current leader.
            </p>
            <br></br>
            <p>
                Leader filters valid transactions.
            </p>
            <br></br>
            <p>
                Leader executes valid transactions updating its state
            </p>
            <br></br>
            <p>
                Leader packages transactions into entries based off its current PoH slot.
            </p>
            <br></br>
            <p>
                Leader transmits the entries to validator nodes (in signed shreds)
            </p>
            <br></br>
            <p>
                Validators retransmit entries to peers in their set and to further downstream nodes.
            </p>
            <br></br>
            <p>
                Validators validate the transactions and execute them on their state.
            </p>
            <br></br>
            <p>
                Validators compute the hash of the state.
            </p>
            <br></br>
            <p>
                At specific times, i.e. specific PoH tick counts, validators transmit votes to the leader.
            </p>
            <br></br>
            <p>
                Leader executes the votes, the same as any other transaction, and broadcasts them to the cluster.
            </p>
            <br></br>
            <p>
                Validators observe their votes and all the votes from the cluster.
            </p>
            <br></br>
            
            
        </div>

    );
}