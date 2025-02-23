const loadingMessages = [
  'Praying to DOGE',
  'Flipping a bitcoin',
  'Cross your fingers',
  'Hold your breath',
  'Asking Elon',
  'This is fine',
  'Reticulating splines',
  'Doing careful analysis',
  'Asking the intern',
  'Consulting the magic 8-ball',
  'Doing a algorithm',
  'Checking vibes',
  'Looking for typos',
  'Reading the tea leaves',
  'Making efficiencies',
  'Giving them what they asked for',
  'Checking karma',
  'Working on it',
  'Checking the list',
];

const firingMessages = [
  "Insufficient vibes.",
  "Insufficient detail.",
  "Too much detail.",
  "System error.",
  "Typo detected.",
  "Response too long.",
  "Response too short.",
  "Response too boring.",
  "Response too exciting.",
  "Response too confusing.",
  "Response too clear.",
  "Response too late.",
  "Response too early.",
  "Response too vague.",
  "Response too specific.",
  "Response too generic.",
  "Response too repetitive.",
  "Response too original.",
  "Response too derivative.",
  "Response too creative.",
  "Response too dull.",
  "Response too interesting.",
  "Response too predictable.",
  "Response too surprising.",
  "Response too safe.",
  "Boring.",
  "Nope.",
  "Not good enough.",
  "Not worth it.",
  "Not what we wanted.",
  "Not what we needed.",
  "Don't understand.",
  "Don't care.",
  "Unbelievable.",
  "Unacceptable.",
  "Implausible.",
  "🥱",
  "🙄",
  "😴",
];

const getRandomMessage = (messages: string[]) => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export const getLoadingMessage = () => getRandomMessage(loadingMessages) + "...";

export const getFiringMessage = () => getRandomMessage(firingMessages) + " You're fired.";