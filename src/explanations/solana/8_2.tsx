import React from "react";

export const Data8_2 = () => {
    return (
        <div>
            
            <strong>
            Overview
            </strong>

            <p>
                TNodes take turns being leader and generating the PoH that encodes state changes. The cluster can tolerate loss of connection to any leader by synthesizing what the leader would have generated had it been connected but not ingesting any state changes.
            </p>
            
            <br></br>
            <p>The possible number of forks is thereby limited to a "there/not-there" skip list of forks that may arise on leader rotation slot boundaries. At any given slot, only a single leader's transactions will be accepted.</p>
            

            
            
        </div>

    );
}