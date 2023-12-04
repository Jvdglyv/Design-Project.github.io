import React from "react";

export const Data3_3 = () => {
    return (
        <div>
            <a href="https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/">https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/</a>
            <br/>
            
            <p>Here’s one: imagine that a real-world client wishes to log into a web server using a password. The standard ‘real world’ approach to this problem involves storing a hashed version of the password on the server. The login can thus be viewed as a sort of ‘proof’ that a given password hash is the output of a hash function on some password — and more to the point, that the client actually knows the password.</p>
            
            <strong>The Ali Baba cave example</strong>
            <p>
                There is a well-known story presenting the fundamental ideas of zero-knowledge proofs, first published in 1990 by Jean-Jacques Quisquater and others in their paper "How to Explain Zero-Knowledge Protocols to Your Children".[7] Using the common Alice and Bob anthropomorphic thought experiment placeholders, the two parties in a zero-knowledge proof are Peggy as the prover of the statement, and Victor, the verifier of the statement.
            </p>

            <p>
                In this story, Peggy has uncovered the secret word used to open a magic door in a cave. The cave is shaped like a ring, with the entrance on one side and the magic door blocking the opposite side. Victor wants to know whether Peggy knows the secret word; but Peggy, being a very private person, does not want to reveal her knowledge (the secret word) to Victor or to reveal the fact of her knowledge to the world in general.
            </p>
            
            <p>
                They label the left and right paths from the entrance A and B. First, Victor waits outside the cave as Peggy goes in. Peggy takes either path A or B; Victor is not allowed to see which path she takes. Then, Victor enters the cave and shouts the name of the path he wants her to use to return, either A or B, chosen at random. Providing she really does know the magic word, this is easy: she opens the door, if necessary, and returns along the desired path.
            </p>
            
            <p>
                However, suppose she did not know the word. Then, she would only be able to return by the named path if Victor were to give the name of the same path by which she had entered. Since Victor would choose A or B at random, she would have a 50% chance of guessing correctly. If they were to repeat this trick many times, say 20 times in a row, her chance of successfully anticipating all of Victor's requests would be reduced to 1 in 220, or 9.56 × 10−7.

            </p>

            <p>
                Thus, if Peggy repeatedly appears at the exit Victor names, he can conclude that it is extremely probable that Peggy does, in fact, know the secret word.

            </p>
         
         <p>
             Notice that Peggy could prove to Victor that she knows the magic word, without revealing it to him, in a single trial. If both Victor and Peggy go together to the mouth of the cave, Victor can watch Peggy go in through A and come out through B. This would prove with certainty that Peggy knows the magic word, without revealing the magic word to Victor. However, such a proof could be observed by a third party, or recorded by Victor and such a proof would be convincing to anybody. In other words, Peggy could not refute such proof by claiming she colluded with Victor, and she is therefore no longer in control of who is aware of her knowledge.

         </p>
            
        </div>

    );
}