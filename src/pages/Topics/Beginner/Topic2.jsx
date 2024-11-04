import { useEffect, useRef, useState } from 'react'
import ModalQuiz from '../../../components/ModalQuiz/ModalQuiz'
import { beginnerModules } from '../../../modules'

const Topic2 = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)
  const [time, setTime] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(true)

  function handleToggleModalPopup() {
    setTime(timeFormat(time))
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
        />
      )}
      <h1 className="mt-12 flex flex-col font-extrabold text-5xl    ">
        <span className="font-bold text-red-900 text-lg">Introducing</span>{' '}
        Different Types of Blockchain
      </h1>
      <p className="text-grayish ">
        Blockchain technology has gained much popularity over the past years,
        mostly due to the popularity of cryptocurrencies such as Bitcoin and
        Ethereum.As of early 2023, this same rise in popularity has also led to
        the increased adoption of blockchain technology by private enterprises
        such as Adobe, J.P. Morgan, Mastercard, Shell, and McDonald's. On top of
        that, other countries' governments have also started exploring
        blockchain technology, such as Australia, South Korea, and Japan. You
        might wonder, do they all use the same type of blockchain? The quick
        answer is no! Different types of blockchains answer different needs, and
        we'll explore those in this module.
      </p>
      <img
        className="mx-auto my-8"
        src={`${process.env.PUBLIC_URL}/images/blockchain-types.png`}
        alt="blocks chained together"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eum
        totam veniam, quibusdam praesentium a officia odit magnam enim
        accusamus, laborum asperiores quasi voluptate culpa quis facere! Iure,
        voluptatem dolorum incidunt, ducimus nihil debitis possimus, tempore
        temporibus nemo quibusdam sit! Tempore dolor perspiciatis libero, quia
        labore, nobis, distinctio animi iste ea ut temporibus adipisci rem
        asperiores facilis. Consequuntur consequatur corrupti illum nisi,
        quibusdam incidunt quidem dolores obcaecati optio at, ad ipsum odio
        suscipit iste cupiditate fuga veniam explicabo, perferendis quo natus?
        Porro, numquam quae. Alias facilis aperiam dicta aspernatur ad tenetur
        voluptas porro earum nisi non perferendis mollitia, quas nam odit? Earum
        et dolor eum at rem, quas ex eos maiores provident quos? Reiciendis
        aspernatur corporis nam saepe dolore optio maiores officia. Soluta optio
        asperiores provident commodi odit. Odio vero magni doloremque beatae.
        Nisi sit quia debitis error iure? Eos velit nostrum voluptatum eligendi
        quod in autem dolorum ab nemo excepturi voluptatem officiis eius,
        impedit voluptas magni quia iusto similique, mollitia id, iure rem
        cumque harum. Harum amet quis ea nobis provident, alias officia omnis
        fugiat atque cum voluptate numquam voluptatum laborum incidunt adipisci
        itaque laboriosam. Ea aliquam at perferendis similique ad cumque
        molestiae adipisci sit. Iusto eligendi odio modi!
      </p>
      <img
        className="mx-auto my-8"
        src={`${process.env.PUBLIC_URL}/images/blockchain-types.png`}
        alt="different types of blockchain"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod amet
        magni harum? Explicabo hic consequuntur sed provident voluptate veniam
        necessitatibus sequi, porro harum magni dolorum, neque nam placeat.
        Veniam ea asperiores laudantium id provident praesentium cumque
        suscipit, delectus assumenda, nihil eligendi magni modi fugiat aliquid
        excepturi voluptate, quos aliquam perferendis? Provident aliquam eum
        suscipit quam vitae corporis repudiandae. Expedita optio magnam natus ea
        ad eveniet facilis dolores voluptas quae fugit, repellat provident
        aspernatur pariatur officiis sunt accusantium possimus magni minima
        nesciunt, numquam inventore aperiam! Hic necessitatibus, nesciunt ipsum
        magnam magni aliquid tempore nostrum cum perferendis nulla
        exercitationem officiis, alias sequi.
      </p>

      <h2 className="mt-12 flex flex-col font-extrabold text-3xl mb-5">
        Benefits of Blockchain
      </h2>
      <ol>
        <li>
          <strong>1. Good</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Iste mollitia, non error laudantium possimus
          repellat.
        </li>
        <li>
          <strong>2. Good</strong> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Culpa, provident dicta nostrum cum dolor amet?
        </li>
        <li>
          <strong>3. Good</strong> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fugit facilis soluta error.
        </li>
      </ol>

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
export default Topic2
