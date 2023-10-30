import React from "react";

export const Data3_2 = () => {
    return (
        <div>
            https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/
            
            <a href="https://inst.eecs.berkeley.edu//~cs162/fa12/hand-outs/Original_Byzantine.pdf">https://inst.eecs.berkeley.edu//~cs162/fa12/hand-outs/Original_Byzantine.pdf</a>

            <a href="https://www.youtube.com/watch?v=dfsRQyYXOsQ">https://www.youtube.com/watch?v=dfsRQyYXOsQ</a>
            
            <a href="https://www.youtube.com/watch?v=_fgW2IM6ctM">https://www.youtube.com/watch?v=_fgW2IM6ctM</a>


            <strong>Byzantine Generals Problem: Proof of Work ile çözülebilir.</strong>
            <p>
                Birden çok bizans generali var ve birbirilerinden çok uzaktalar. Şehre sadece aynı anda saldırırlarsa ele geçirebilirler. Şafak vakti saldırma kararı vermek için diğer generallere elçi yolladığımızda olabilecekler:     
            </p>
            <ul>
                <li>
                    Elçiler yolda öldürülebilir. 
                </li>
                <li>
                    Onay mesajı geri gelemeyebilir
                </li>
                <li>
                    Hainler geri çekilme mesajı yollayabilir
                </li>
                <li>
                    Onay mesajı yollasalar bile bize ulaşamayabilir
                </li>
                <li>
                    Onay mesajı bize yollansa bile bize ulaştığını bilemeyebilirler
                </li>
                <a href = "https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf">https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf</a>
                <br/>
                <a href = "http://pmg.csail.mit.edu/papers/osdi99.pdf">http://pmg.csail.mit.edu/papers/osdi99.pdf</a>
                <br/>
                <a href = "http://thesecretlivesofdata.com/raft">http://thesecretlivesofdata.com/raft</a>
                <br/>
                <a href = "https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/">https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/</a>
                <br/>
                <a href = "https://www.youtube.com/watch?v=IafgKJN3nwU&ab_channel=BlockchainatBerkeleyX">https://www.youtube.com/watch?v=IafgKJN3nwU&ab_channel=BlockchainatBerkeleyX</a>

                
            </ul>

            <ul>
                <strong>PBFT solution to Practice Byzantine Fault Tolerance</strong>
                <li>Fast</li>
                <li>Handle f Byzantine faults in a system with 3f + 1 nodes</li>
                <li>BFT-NFS only %3 slower than standart unreplicated NFS</li>
                <li>preprepare prepare and commit phases</li>
                <li>preprepare: a node sends prepare messages to all other nodes
                    If any other node accepts the preprepare message, sends a prepare message to all other nodes</li>
                <li>If leader node takes</li>
                <li> Leslie Lamport proved that if we have 3m+1 correctly working processors, a consensus(agreement on same state) can be reached if atmost m processors are faulty which means that strictly more than two-thirds of the total number of processors should be honest.</li>
            </ul>

        </div>

    );
}