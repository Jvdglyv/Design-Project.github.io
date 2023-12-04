import React from "react";

export const Data8_3 = () => {
    return (
        <div>
            
            <strong>
            Forking example
            </strong>

            <p>
                The table below illustrates what competing forks could look like. Time progresses from left to right and each slot is assigned to a validator that temporarily becomes the cluster “leader” and may produce a block for that slot.
            </p>
            
            <br></br>
            <p>In this example, the leader for slot 3 chose to chain its “Block 3” directly to “Block 1” and in doing so skipped “Block 2”. Similarly, the leader for slot 5 chose to chain “Block 5” directly to “Block 3” and skipped “Block 4”.</p>
            
            <br></br>
            <p>Note that across different forks, the block produced for a given slot is always the same because producing two different blocks for the same slot is a slashable offense. So the conflicting forks above can be distinguished from each other by which slots they have skipped.</p>
            
            
        </div>

    );
}