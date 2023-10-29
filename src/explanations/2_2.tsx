import React from "react";

export const Data2_2 = () => {
    return (
        <div>
            <strong>Proof of stake</strong>
           

            <p>The most common alternative to proof of work is proof of stake.</p>


            <p>
                In this type of consensus algorithm, instead of investing in expensive computer equipment in a race to
                mine blocks, a 'validator' invests in the coins of the system.
            </p>

            <p>
                Note the term validator. That's because no coin creation (mining) exists in proof of stake. Instead, all
                the coins exist from day one, and validators (also called stakeholders, because they hold a stake in the
                system) are paid strictly in transaction fees.

            </p>

            <p>
                In proof of stake, your chance of being picked to create the next block depends on the fraction of coins
                in the system you own (or set aside for staking). A validator with 300 coins will be three times as
                likely to be chosen as someone with 100 coins.

            </p>
            
            <p>If the validator tries to double sign or fork the system, those coins are slashed.
            </p>
        </div>
    );
}