import { useEffect, useRef, useState } from 'react'
import ModalQuiz from '../../../components/ModalQuiz/ModalQuiz'
import { beginnerModules } from '../../../modules'
import { useNavigate } from 'react-router-dom'
import { GiBrain } from 'react-icons/gi'

const Topic2 = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)
  // const [time, setTime] = useState(0)
  // const [isTimeRunning, setIsTimeRunning] = useState(true)
  const navigate = useNavigate()

  function handleToggleModalPopup() {
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

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
          questions={beginnerModules[1].questions}
          moduleId={beginnerModules[1].id}
        />
      )}
      <h1 className="mt-12 flex flex-col font-extrabold text-5xl">
        <span className="font-bold text-red-900 text-lg">Introducing</span> The
        Core Ideas Behind Blockchain Technology
      </h1>
      <p className="text-grayish">
        The core ideas behind blockchain technology emerged in the late 1980s
        and early 1990s. In 1989, Leslie Lamport developed the Paxos protocol,
        which described a consensus model for reaching agreement on results in a
        network of computers, even when unreliable. Later, in 1991, a signed
        chain of information was used as an electronic ledger for digitally
        signing documents in a way that ensured the integrity of the signed
        collection.
      </p>
      <img
        className="mx-auto my-8"
        src="/images/blockchain-origin.jpg"
        alt="Early blockchain concepts"
      />

      <p>
        These early ideas culminated in 2008 when Satoshi Nakamoto published the
        seminal paper *Bitcoin: A Peer-to-Peer Electronic Cash System*. This
        described how blockchain technology could enable direct transactions
        without the need for trusted third parties, marking the start of Bitcoin
        in 2009. The blockchain design ensured no single point of failure and
        supported decentralized administration through mining.
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Key Features of Blockchain
      </h2>
      <p>
        Blockchain networks rely on four key characteristics to establish trust:
        <ul className="list-disc ml-5 mt-3">
          <li>
            <strong>Ledger:</strong> An append-only ledger provides a complete
            and unalterable transaction history.
          </li>
          <li>
            <strong>Secure:</strong> Cryptographic techniques ensure the
            ledger's integrity and prevent tampering.
          </li>
          <li>
            <strong>Shared:</strong> Transparency is maintained by sharing the
            ledger among participants.
          </li>
          <li>
            <strong>Distributed:</strong> Decentralization makes the network
            resilient against attacks.
          </li>
        </ul>
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Applications and Benefits
      </h2>
      <p>
        Blockchain technology underpins numerous applications beyond
        cryptocurrencies. For instance:
      </p>
      <h3 className="mt-6 font-bold text-2xl">Permissionless Networks</h3>
      <p>
        In permissionless networks, users can participate without prior
        knowledge or authorization, enabling faster transactions and lower
        costs. This decentralization fosters trust among anonymous participants.
      </p>

      <h3 className="mt-6 font-bold text-2xl">Permissioned Networks</h3>
      <p>
        In permissioned networks, user access is controlled, enhancing trust
        while benefiting from blockchain’s transparency and security.
      </p>

      <img
        className="mx-auto my-8"
        src="/images/blockchain-applications.png"
        alt="Blockchain applications"
      />

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Smart Contracts
      </h2>
      <p>
        Blockchain has extended beyond financial transactions to include smart
        contracts. These are pieces of code on the blockchain that execute
        automatically when predefined conditions are met, facilitating
        automated, transparent, and secure agreements.
      </p>

      <button
        className="rounded-lg border-x-red-700 border-2 p-3 px-8 bg-red-700 mt-7 text-white font-bold text-lg block mx-auto"
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
      <div className="w-full flex  justify-between items-center mb-5">
        <button
          className="rounded-lg  p-3 px-8 bg-green-600 mt-7 text-white font-bold text-lg  mb-2"
          onClick={() => navigate(`/modules/${beginnerModules[0].id}`)}
        >
          Previous Module
        </button>
        <button
          className="rounded-lg  p-3 px-8 bg-green-600 mt-7 text-white font-bold text-lg mb-2"
          onClick={() => navigate(`/modules/${beginnerModules[2].id}`)}
        >
          Next Module
        </button>
      </div>
    </div>
  )
}
export default Topic2
