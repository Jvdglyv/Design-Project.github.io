import React from "react";

export const Data8_1 = () => {
    return (
        <div>
            
            <strong>
            Fork Generation
            </strong>

            <p>
                The Solana protocol doesn’t wait for all validators to agree on a newly produced block before the next block is produced. Because of that, it’s quite common for two different blocks to be chained to the same parent block. In those situations, we call each conflicting chain a “fork.” 
            </p>
            
            <br></br>
            <p>Solana validators need to vote on one of these forks and reach agreement on which one to use through a consensus algorithm (that is beyond the scope of this article). The main point you need to remember is that when there are competing forks, only one fork will be finalized by the cluster and the abandoned blocks in competing forks are all discarded.</p>
            <br></br>
            <p>This section describes how forks naturally occur as a consequence of leader rotation.</p>


            
            
        </div>

    );
}