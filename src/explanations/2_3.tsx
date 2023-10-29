import React from "react";

export const Data2_3 = () => {
    return (
        <div>
            <strong>
                Proof of activity
            </strong>
            
            <p>Proof of activity is a hybrid approach that combines both proof of work and proof of stake.</p>
            
            <p>At this point, the system switches to proof of stake. Based on information in the header, a random group of validators is chosen to sign the new block. The more coins in the system a validator owns, the more likely he or she is to be chosen. The template becomes a full-fledged block as soon as all of the validators sign it.</p>
            
            <p>If some of the selected validators are not available to complete the block, then the next winning block is selected, a new group of validators is chosen, and so on, until a block receives the correct amount of signatures. Fees are split between the miner and the validators who signed off on the block.</p>
        </div>
    );
}