import { useContext, useEffect, useRef, useState } from 'react'
import ModalQuiz from '../../../components/ModalQuiz/ModalQuiz'
import { beginnerModules } from '../../../modules'
import { GiBrain } from 'react-icons/gi'
import { GlobalContext } from '../../../context/GlobalState'
import { useNavigate } from 'react-router-dom'

const Topic1 = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)
  // const [time, setTime] = useState(0)
  // const [isTimeRunning, setIsTimeRunning] = useState(true)
  // const { handleUpdateTimeFinished } = useContext(GlobalContext)
  const navigate = useNavigate()

  function handleToggleModalPopup() {
    // handleUpdateTimeFinished(beginnerModules[0].id, time)
    setShowModalPopup(!showModalPopup)
  }

  function onClose() {
    setShowModalPopup(false)
  }

  // const timer = useRef()

  // useEffect(() => {
  //   if (isTimeRunning) {
  //     timer.current = setInterval(() => {
  //       setTime((pre) => pre + 1)
  //     }, 1000)
  //   }
  //   return () => clearInterval(timer.current)
  // }, [isTimeRunning])

  // console.log('Time spent: ', time)
  return (
    <div
      className={`w-[50vw] h-auto mx-auto mt-24 font-sans color ${
        showModalPopup && 'overflow-hidden'
      }`}
    >
      {showModalPopup && (
        <ModalQuiz
          onClose={onClose}
          questions={beginnerModules[0].questions}
          moduleId={beginnerModules[0].id}
        />
      )}
      <h1 className="mt-12 flex flex-col font-extrabold text-5xl  mb-4 ">
        <span className="font-bold text-red-900 text-lg">Introducing</span>{' '}
        Blockchain for beginners
      </h1>
      <img src={`/images/blockchain.jpg`} alt="blocks chained together" />
      <p className="text-grayish ">
        A blockchain is a digital ledger that records transactions within the
        Bitcoin network. Traditionally, a ledger is simply a collection or book
        of financial data. For example, your notepad with expense records, an
        Excel sheet with savings, or even a list of transactions written on a
        napkin all serve as ledgers. What sets the blockchain apart is that its
        transactions are stored in blocks, protected by cryptographic methods.
        You can revisit cryptography in the previous module for more on this.
      </p>
      <img src={`/images/blockchain2.png`} alt="blocks chained together" />

      <p>
        You might be familiar with spreadsheets or databases. A blockchain is
        somewhat similar because it is a database where information is entered
        and stored. The key difference between a traditional database or
        spreadsheet and a blockchain is how the data is structured and accessed.
        A blockchain consists of programs called scripts that conduct the tasks
        you usually would in a database: entering and accessing information, and
        saving and storing it somewhere. A blockchain is distributed, which
        means multiple copies are saved on many machines, and they must all
        match for it to be valid. The Bitcoin blockchain collects transaction
        information and enters it into a 4MB file called a block (different
        blockchains have different size blocks). Once the block is full, the
        block data is run through a cryptographic hash function, which creates a
        hexadecimal number called the block header hash. The hash is then
        entered into the following block header and encrypted with the other
        information in that block's header, creating a chain of blocks, hence
        the name “blockchain.”
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Transaction Process
      </h2>
      <p>
        Transactions follow a specific process, depending on the blockchain. For
        example, on Bitcoin's blockchain, if you initiate a transaction using
        your cryptocurrency wallet—the application that provides an interface
        for the blockchain—it starts a sequence of events. In Bitcoin, your
        transaction is sent to a memory pool, where it is stored and queued
        until a miner picks it up. Once it is entered into a block and the block
        fills up with transactions, it is closed, and the mining begins. Every
        node in the network proposes its own blocks in this way because they all
        choose different transactions. Each works on their own blocks, trying to
        find a solution to the difficulty target, using the "nonce," short for
        number used once. The nonce value is a field in the block header that is
        changeable, and its value incrementally increases with every mining
        attempt. If the resulting hash isn't equal to or less than the target
        hash, a value of one is added to the nonce, a new hash is generated, and
        so on. The nonce rolls over about every 4.5 billion attempts (which
        takes less than one second) and uses another value called the extra
        nonce as an additional counter. This continues until a miner generates a
        valid hash, winning the race and receiving the reward.
      </p>
      <p>
        Once a block is closed, a transaction is complete. However, the block is
        not considered confirmed until five other blocks have been validated.
        Confirmation takes the network about one hour to complete because it
        averages just under 10 minutes per block (the first block with your
        transaction and five following blocks multiplied by 10 equals 60
        minutes). Not all blockchains follow this process. For instance, the
        Ethereum network randomly chooses one validator from all users with
        ether staked to validate blocks, which are then confirmed by the
        network. This is much faster and less energy intensive than Bitcoin's
        process.
      </p>
      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Blockchain Decentralization
      </h2>
      <p>
        A blockchain allows the data in a database to be spread out among
        several network nodes—computers or devices running software for the
        blockchain—at various locations. This creates redundancy and maintains
        the fidelity of the data. For example, if someone tries to alter a
        record on one node, the other nodes would prevent it from happening by
        comparing block hashes. This way, no single node can alter information
        within the chain. Because of this distribution—and the encrypted proof
        that work was done—the blockchain data, such as transaction history,
        becomes irreversible. Such a record could be a list of transactions, but
        private blockchains can also hold a variety of other information like
        legal contracts, state identifications, or a company's inventory. Most
        blockchains wouldn't "store" these items directly; they would likely be
        sent through a hashing algorithm and represented on the blockchain by a
        token.
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Blockchain Transparency
      </h2>

      <p>
        Because of the decentralized nature of the Bitcoin blockchain, all
        transactions can be transparently viewed by downloading and inspecting
        them or by using blockchain explorers that allow anyone to see
        transactions occurring live. Each node has its own copy of the chain
        that gets updated as fresh blocks are confirmed and added. This means
        that if you wanted to, you could track a bitcoin wherever it goes. For
        example, exchanges have been hacked in the past, resulting in the loss
        of large amounts of cryptocurrency. While the hackers may have been
        anonymous—except for their wallet address—the crypto they extracted is
        easily traceable because the wallet addresses are stored on the
        blockchain. Of course, the records stored in the Bitcoin blockchain (as
        well as most others) are encrypted. This means that only the person
        assigned an address can reveal their identity. As a result, blockchain
        users can remain anonymous while preserving transparency.
      </p>
      <button
        className="rounded-lg border-x-red-700 border-2 p-3 px-8 bg-red-700 mt-7 text-white font-bold text-lg block mx-auto mb-10 "
        onClick={() => {
          // clearInterval(timer.current)
          // setIsTimeRunning(false)
          handleToggleModalPopup()
        }}
      >
        <GiBrain
          className="inline-block"
          style={{ height: '30px', width: '25px', marginRight: '3px' }}
        />
        Take Quiz
      </button>
      <button
        className="rounded-lg  p-3 px-8 bg-green-600 mt-7 text-white font-bold text-lg block mx-auto mb-2"
        onClick={() => navigate(`/modules/${beginnerModules[0 + 1].id}`)}
      >
        Next Module
      </button>
    </div>
  )
}
export default Topic1
