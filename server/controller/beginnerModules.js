const beginnerModules = [
  {
    id: '1',
    name: 'Introduction to Blockchain',
    keywords: ['Blockchain', 'How does blockchain work?', 'Bitcoin Mining'],
    desc: "The idea Blockchain may be filled with jargons, but it doesn't have to be complicated to learn...",
    passingScore: 5,
    duration: 60,
    questions: [
      {
        question: 'What is a blockchain?',
        choices: [
          'A digital ledger of transactions stored in blocks',
          'A physical book used for storing transactions',
          'A database with no security',
          'A tool for tracking paper records',
        ],
        answer: 'A digital ledger of transactions stored in blocks ',
      },
      {
        question: 'What makes blockchain data immutable?',
        choices: [
          'Cryptographic hashing and distribution across multiple nodes',
          'Storing data in a single server',
          'Frequent manual updates',
          'Using physical locks on computers',
        ],
        answer: 'Cryptographic hashing and distribution across multiple nodes',
      },
      {
        question: 'In Bitcoin, what is a "nonce"?',
        choices: [
          'A randomly chosen validator',
          'A changeable value used to find a valid hash',
          'A block identifier',
          'A transaction fee',
        ],
        answer: 'A changeable value used to find a valid hash',
      },
      {
        question:
          'What is the average time it takes to confirm a Bitcoin transaction?',
        choices: ['10 seconds', '10 minutes', '1 hour', '24 hours'],
        answer: '1 hour',
      },
      {
        question: 'What process does Ethereum use to validate transactions?',
        choices: [
          'Proof of Stake (PoS)',
          'Proof of Work (PoW)',
          'Memory Pool Queuing',
          'Extra Nonce Increment',
        ],
        answer: 'Proof of Stake (PoS)',
      },
      {
        question: 'What is the purpose of a blockchain explorer?',
        choices: [
          'To hack the blockchain',
          'To view transactions and blocks in real time',
          'To validate blocks',
          'To create private chains',
        ],
        answer: 'To view transactions and blocks in real time',
      },
      {
        question: 'Why can data stored on a blockchain be considered secure?',
        choices: [
          'Because it is stored on a single secure server',
          'Because it uses a centralized database model',
          'Because nodes compare block hashes to detect alterations',
          'Because it has no encryption',
        ],
        answer: 'Because nodes compare block hashes to detect alterations',
      },
      {
        question:
          'What type of file size is used for blocks in the Bitcoin blockchain?',
        choices: ['1MB', '4MB', '10MB', 'No fixed size'],
        answer: '4MB',
      },
      {
        question: 'What ensures transparency in the Bitcoin blockchain?',
        choices: [
          'Private transactions',
          'Encrypted records and blockchain explorers',
          'Single-node control',
          'Manual auditing',
        ],
        answer: 'Encrypted records and blockchain explorers',
      },
      {
        question:
          'What does "decentralized" mean in the context of blockchain?',
        choices: [
          'Controlled by a single central authority',
          'Spread across multiple nodes without central authority',
          'Stored only in physical ledgers',
          'Accessible only to authorized individuals',
        ],
        answer: 'Spread across multiple nodes without central authority',
      },
    ],
  },
  {
    id: '2',
    name: 'How are Blockchain used and its',
    keywords: ['Blockchain', 'How does blockchain work?', 'Bitcoin Mining'],
    desc: "The idea Blockchain may be filled with jargons, but it doesn't have to be complicated to learn...",
    duration: 60,
    questions: [
      {
        question: 'What is blockchain’s benefit in food?',
        choices: [
          'Extends food shelf life',
          'Traces food routes for safety',
          'Lowers food production costs',
          'Removes food packaging needs',
        ],
        answer: 'Traces food routes for safety',
      },
      {
        question: 'How does blockchain improve banking?',
        choices: [
          'Faster transaction processing',
          'Eliminates transaction fees',
          'Only works during business hours',
          'Reduces bank operational costs',
        ],
        answer: 'Faster transaction processing',
      },
      {
        question: 'How can blockchain help healthcare?',
        choices: [
          'Secure medical record storage',
          'Automatic patient diagnosis',
          'Track hospital inventory',
          'Schedule patient appointments',
        ],
        answer: 'Secure medical record storage',
      },
      {
        question: 'What is a smart contract?',
        choices: [
          'Code automating transactions',
          'Blockchain financial block',
          'Physical agreement document',
          'Tool for cryptocurrency creation',
        ],
        answer: 'Code automating transactions',
      },
      {
        question: 'Why is blockchain useful for cross-border?',
        choices: [
          'Avoids currency restrictions',
          'Increases transaction fees',
          'Requires no internet',
          'Depends on local banks',
        ],
        answer: 'Avoids currency restrictions',
      },
      {
        question: 'How does blockchain help property records?',
        choices: [
          'Stores deeds digitally and securely',
          'Replaces manual record processes',
          'Eliminates legal documentation',
          'Reduces ownership disputes',
        ],
        answer: 'Stores deeds digitally and securely',
      },
      {
        question: 'What can blockchain provide in war zones?',
        choices: [
          'Maintain property ownership records',
          'Eliminate housing disputes',
          'Provide community government',
          'Store citizen identities',
        ],
        answer: 'Maintain property ownership records',
      },
      {
        question: 'How does blockchain help stock trading?',
        choices: [
          'Reduces settlement time',
          'Freezes all transactions',
          'Increases stock fees',
          'Requires international brokers',
        ],
        answer: 'Reduces settlement time',
      },
      {
        question: 'What is IBM’s Food Trust blockchain?',
        choices: [
          'Tracks food from source',
          'Manages grocery inventory',
          'Reduces restaurant costs',
          'Monitors food expiration',
        ],
        answer: 'Tracks food from source',
      },
      {
        question: 'What ensures blockchain data security?',
        choices: [
          'Distributed encrypted network',
          'Single controlling server',
          'Unencrypted public records',
          'Manual system verification',
        ],
        answer: 'Distributed encrypted network',
      },
    ],
  },
  {
    id: 3,
    name: 'Different Types of Blockchain',
    keywords: ['Public Blockchain', 'Proof of Work?', 'Consortium Blockchain'],
    desc: 'There are four main types of blockchain networks: public blockchains, private blockchains,   ....',
    passingScore: 5,
    duration: 60,
    questions: [
      {
        question: 'What is blockchain’s benefit in food?',
        choices: [
          'Extends food shelf life',
          'Traces food routes for safety',
          'Lowers food production costs',
          'Removes food packaging needs',
        ],
        answer: 'Traces food routes for safety',
      },
      {
        question: 'How does blockchain improve banking?',
        choices: [
          'Faster transaction processing',
          'Eliminates transaction fees',
          'Only works during business hours',
          'Reduces bank operational costs',
        ],
        answer: 'Faster transaction processing',
      },
      {
        question: 'How can blockchain help healthcare?',
        choices: [
          'Secure medical record storage',
          'Automatic patient diagnosis',
          'Track hospital inventory',
          'Schedule patient appointments',
        ],
        answer: 'Secure medical record storage',
      },
      {
        question: 'What is a smart contract?',
        choices: [
          'Code automating transactions',
          'Blockchain financial block',
          'Physical agreement document',
          'Tool for cryptocurrency creation',
        ],
        answer: 'Code automating transactions',
      },
      {
        question: 'Why is blockchain useful for cross-border?',
        choices: [
          'Avoids currency restrictions',
          'Increases transaction fees',
          'Requires no internet',
          'Depends on local banks',
        ],
        answer: 'Avoids currency restrictions',
      },
      {
        question: 'How does blockchain help property records?',
        choices: [
          'Stores deeds digitally and securely',
          'Replaces manual record processes',
          'Eliminates legal documentation',
          'Reduces ownership disputes',
        ],
        answer: 'Stores deeds digitally and securely',
      },
      {
        question: 'What can blockchain provide in war zones?',
        choices: [
          'Maintain property ownership records',
          'Eliminate housing disputes',
          'Provide community government',
          'Store citizen identities',
        ],
        answer: 'Maintain property ownership records',
      },
      {
        question: 'How does blockchain help stock trading?',
        choices: [
          'Reduces settlement time',
          'Freezes all transactions',
          'Increases stock fees',
          'Requires international brokers',
        ],
        answer: 'Reduces settlement time',
      },
      {
        question: 'What is IBM’s Food Trust blockchain?',
        choices: [
          'Tracks food from source',
          'Manages grocery inventory',
          'Reduces restaurant costs',
          'Monitors food expiration',
        ],
        answer: 'Tracks food from source',
      },
      {
        question: 'What ensures blockchain data security?',
        choices: [
          'Distributed encrypted network',
          'Single controlling server',
          'Unencrypted public records',
          'Manual system verification',
        ],
        answer: 'Distributed encrypted network',
      },
    ],
  },
]
module.exports = { beginnerModules }
