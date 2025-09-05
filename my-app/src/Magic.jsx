import styles from './Magic.module.css';
import magicOrb from '../src/assets/Magic.png';
import { useState } from 'react';

export function MagicBall() {
  const [rotate, setRotate] = useState(false);

  async function handleClick() {
    setRotate(true); // trigger spin
    await delay(1000); // wait same time as CSS animation
    setRotate(false); // reset so it can spin again
    await delay(2000); // extra "thinking" delay before answer
    alert(response());
  }

  return (
    <div className={styles.magicBall}>
      <h1>Magic 8 Ball</h1>
      <div className={styles.gameDesc}>Welcome to the Magic 8 Ball!</div>
      <div className={styles.gameDescSub}>
        Ask any yes-or-no question, give the orb a moment to think, and it will reveal its mysterious wisdom. 
        Sometimes it’s serious, sometimes it’s playful—but the future is never certain. 
        Go ahead, consult the orb and see what fate has in store!
      </div>

      <img
        src={magicOrb}
        alt="Magic 8 Ball"
        className={`${styles.image} ${rotate ? styles.rotate : ''}`}
      />

      <button className={styles.button} onClick={handleClick}>
        Ask the Orb
      </button>

      <input className={styles.input}></input>
    </div>
  );
}

function response() {
  const responses = [
    'Yes',
    'No',
    'Maybe',
    'Ask again later',
    'Ask your cat.',
    '404 Answer not found.',
    'Better not tell you now 😏',
    'Absolutely not, you fool!',
    'In your dreams.',
    'Maybe... if you bribe me.',
    'Bro... No.',
    'Just do it!',
    'Definitely yes!',
    'The stars say... no.',
    'Yes, if you were younger.',
    'Not yet.',
    'Your mother would say no.',
    'Without a doubt.',
    'Yes in the beginning, but now no.',
    'What would Jesus do?',
    'You really want that?',
    'If you start working out. Then yes.',
    'Actually, yes!',
    'Honestly? You wish.',
    'My sources say no.',

  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

export default MagicBall;
