import React from "react";

export const Data3_2 = () => {
    return (
        <div>
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

        </div>

    );
}