import { useEffect, useRef, useState } from 'react'
import ModalQuiz from '../../../components/ModalQuiz/ModalQuiz'
import { beginnerModules } from '../../../modules'

const Topic3 = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)
  const [time, setTime] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(true)

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }

  function onClose() {
    setShowModalPopup(false)
  }

  function timeFormat(time) {
    let hours = Math.floor((time / 60 / 60) % 24)
    let minutes = Math.floor((time / 60) % 60)
    let seconds = Math.floor(time % 60)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return hours + ':' + minutes + ':' + seconds
  }

  const timer = useRef()

  useEffect(() => {
    if (isTimeRunning) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1)
      }, 1000)
    }
    return () => clearInterval(timer.current)
  }, [isTimeRunning])

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  console.log('Time spent: ', time)
  return (
    <div
      className={`w-[50vw] h-auto mx-auto mt-24 font-sans color ${
        showModalPopup && 'overflow-hidden'
      }`}
    >
      {showModalPopup && (
        <ModalQuiz
          onClose={onClose}
          time={time}
          questions={beginnerModules[1].questions}
          moduleId={beginnerModules[1].id}
        />
      )}
      <h1 className="mt-12 flex flex-col font-extrabold text-5xl    ">
        <span className="font-bold text-red-900 text-lg">Introducing</span>{' '}
        Cryptography Basics
      </h1>
      <p className="text-grayish ">
        Cryptography is the study and practice of techniques for secure
        communication in the presence of third parties called adversaries. It
        deals with developing and analyzing protocols that prevents malicious
        third parties from retrieving information being shared between two
        entities thereby following the various aspects of information security.
        Secure Communication refers to the scenario where the message or data
        shared between two parties can’t be accessed by an adversary. In
        Cryptography, an Adversary is a malicious entity, which aims to retrieve
        precious information or data thereby undermining the principles of
        information security. Data Confidentiality, Data Integrity,
        Authentication and Non-repudiation are core principles of modern-day
        cryptography.
      </p>
      <img
        className="mx-auto my-8"
        src={`/images/cryptography-basics.png`}
        alt="cryptography process"
      />
      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Types of Cryptography
      </h2>
      <p>
        There are several types of cryptography, each with its own unique
        features and applications. Some of the most common types of cryptography
        include:
      </p>
      <ol>
        <li>
          <em>Symmetric-key cryptography: </em>This type of cryptography
          involves the use of a single key to encrypt and decrypt data. Both the
          sender and receiver use the same key, which must be kept secret to
          maintain the security of the communication.
        </li>
        <li>
          <em>Asymmetric-key cryptography: </em>Asymmetric-key cryptography,
          also known as public-key cryptography, uses a pair of keys – a public
          key and a private key – to encrypt and decrypt data. The public key is
          available to anyone, while the private key is kept secret by the
          owner.
        </li>
      </ol>
      <p>
        <em>Hash functions: </em>A hash function is a mathematical algorithm
        that converts data of any size into a fixed-size output. Hash functions
        are often used to verify the integrity of data and ensure that it has
        not been tampered with.
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Applications of Cryptography
      </h2>
      <p>
        Cryptography has a wide range of applications in modern-day
        communication, including:
      </p>
      <ul>
        <li>
          <em>Secure online transactions:</em> Cryptography is used to secure
          online transactions, such as online banking and e-commerce, by
          encrypting sensitive data and protecting it from unauthorized access.
        </li>
        <li>
          <em>Digital signatures: </em>Digital signatures are used to verify the
          authenticity and integrity of digital documents and ensure that they
          have not been tampered with.
        </li>
        <li>
          <em>Password protection: </em>Passwords are often encrypted using
          cryptographic algorithms to protect them from being stolen or
          intercepted.
        </li>
      </ul>
      <p>
        Military and intelligence applications: Cryptography is widely used in
        military and intelligence applications to protect classified information
        and communications.
      </p>
      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Challenges of Cryptography
      </h2>
      <p>
        While cryptography is a powerful tool for securing information, it also
        presents several challenges, including:
      </p>
      <ul>
        <li>
          <em>Key management:</em> Cryptography relies on the use of keys, which
          must be managed carefully to maintain the security of the
          communication.
        </li>
        <li>
          <em>Quantum computing: </em>The development of quantum computing poses
          a potential threat to current cryptographic algorithms, which may
          become vulnerable to attacks.
        </li>
        <li>
          <em>Human error: </em>Cryptography is only as strong as its weakest
          link, and human error can easily compromise the security of a
          communication.
        </li>
      </ul>
      <button
        className="rounded-lg border-x-red-700 border-2 p-3 px-8 bg-red-700 mt-7 text-white font-bold text-lg block mx-auto mb-10"
        onClick={() => {
          clearInterval(timer.current)
          setIsTimeRunning(false)
          handleToggleModalPopup()
        }}
      >
        Take Quiz
      </button>
    </div>
  )
}
export default Topic3
