import { useState } from 'react';
import { dackcoin_backend } from 'declarations/dackcoin_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    dackcoin_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <body>
      <header>
        <nav class="header__navbar">
          <div class="header__head">
            <div class="header__logo">
              <img src="/assets/icon-rottate.png" alt="DACK" />
            </div>

            <h2>Dack Coin</h2>
          </div>

          <div class="header__menu">
            <ul>
              <li>About Us</li>
              <li>Price Chart</li>
              <li>
                {" "}
                <a href="https://t.me/basedape_iCP">Telegram</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section class="hero">
        <div class="hero__content item">
          <div class="hero__info">
            <h1>
              Welcome to Dack Coin! Here to take the meme world by storm
              ⚡️⚡️⚡️
            </h1>
            <button class="buyme">
              <a href="https://app.icpswap.com/">BUY NOW</a>
            </button>
          </div>
        </div>
        <div class="hero__design item">
          <div class="hero__image">
            <img id="anim" src="/assets/duck.png" alt="DACK" />
          </div>
        </div>
      </section>

      <section class="whatis">
        <div class="whatis__heading">
          <h2>What is Dack Coin?</h2>
        </div>
        <div class="whatis__image">
          <img src="/assets/tb-removebg-preview.png" alt="what is Dack Coin!" />
        </div>
        <div class="whatis__content">
          <div class="whatis__info">
            <h3 class="heading__orange">The Dack Coin Cryptocurrency Meme</h3>
            <p>
              Discover the viral world of ape-themed cryptocurrency memes,
              exploring their humorous appeal while investigating their
              potential impact on crypto projects and investor sentiment.
            </p>
          </div>
          <div class="whatis__info">
            <h3 class="heading__pink">Separating the Memes from the Gems</h3>
            <p>
              Uncover the educational power of ape-themed crypto memes,
              exploring their role in simplifying complex concepts and driving
              mainstream interest in cryptocurrencies, fostering a broader
              understanding of blockchain technology.
            </p>
          </div>
          <div class="whatis__info">
            <h3 class="heading__seahorse">Defi Show Tribute</h3>
            <p>
              This token is created in remembrance of the show that many loved
              yet it came to an end. We want this show to continue touching
              hearts in the Defi world.
            </p>
          </div>
        </div>
      </section>

      <section class="howtobuy">
        <div class="column howtobuy__heading">
          <h2>
            How to buy <span class="highlight__color">$DACK</span>
          </h2>
          <div class="howtobuy__heading-image">
            <img src="/assets/tothemoon-removebg-preview.png" alt="tothemoon" />
          </div>
        </div>
        <div class="column howtobuy__steps">
          <div class="howtobuy__steps-step">
            <h3>1. Create a NNS Wallet</h3>
            <p>
              $DACK token is availabe on the Internet Computer Protocol. NNS is
              the market leader in ICP wallets. On Google Chrome, visit{" "}
              <span class="highlight__color">NNS.io</span> to download the
              extension and set up a wallet. On mobile? Get NNS's app for
              <span class="highlight__color">iPhone</span> or
              <span class="highlight__color">Android</span>.
            </p>
          </div>
          <div class="howtobuy__steps-step">
            <h3>2. Send $ICP to NNS</h3>
            <p>
              Buy ICP through NNS or transfer it to your NNS wallet address from
              another wallet (e.g. Coinbase or Binance).
            </p>
          </div>
          <div class="howtobuy__steps-step">
            <h3>3. Visit UniSwap</h3>
            <p>
              You can currently buy $DACK on
              <span class="highlight__color">UniSwap</span>, DACK's
            </p>
          </div>
          <div class="howtobuy__steps-step">
            <h3>4. Swap $ICP for $DACK</h3>
            <p>
              Enter the amount of $ICP you would like to swap for $DACK. Click{" "}
              <span class="highlight__color">Connect Wallet</span> then
              <span class="highlight__color">Swap</span>.
            </p>
          </div>
        </div>
      </section>

      <section class="tokenomics">
        <h2>Tokenomics and Stats</h2>

        <div class="tokenomics__content">
          <div class="tokenomics__column">
            <div class="tokenomics__info">
              <img src="/assets/icons/token.png" alt="" width="32" />
              <h3>$DACK Token</h3>
              <p>Token Symbol</p>
            </div>
            <div class="tokenomics__info">
              <img src="/assets/icons/supply-chain.png" alt="" width="32" />
              <h3>1 Billion</h3>
              <p>Total Supply</p>
            </div>
          </div>
          <div class="tokenomics__column">
            <div class="tokenomics__info">
              <img src="/assets/icons/icons8-cloud-48.png" alt="" width="32" />
              <h3>$999 Million</h3>
              <p>Market Cap</p>
            </div>
            <div class="tokenomics__info">
              <img src="/assets/laugh-removebg-preview.png" alt="" width="32" />
              <h3>2000+</h3>
              <p>Holders</p>
            </div>
          </div>
        </div>
      </section>

      <section class="moonmap">
        <h2>Moonmap</h2>
        <div class="moonmap__image">
          <img src="/assets/elon.png" alt="elon" />
        </div>
        <div class="moonmap__section">
          <div class="moonmap__section-phase">
            <h3 class="heading__orange">Phase 1</h3>
            <ul>
              <li>Website Creation</li>
              <li>Community Building</li>
              <li>Launch on PancakeSwap</li>
              <li>Huge marketing campaigns</li>
              <li>+1000 Holders</li>
            </ul>
          </div>
          <div class="moonmap__section-phase">
            <h3 class="heading__pink">Phase 2</h3>
            <ul>
              <li>Coingecko Listing</li>
              <li>Coinmarketcap Listing</li>
              <li>Partnership Annoucements</li>
              <li>Trending on Dextools and Avedex</li>
              <li>Outdoor Advertisements</li>
            </ul>
          </div>
          <div class="moonmap__section-phase">
            <h3 class="heading__seahorse">Phase 3</h3>
            <ul>
              <li>Tier 2 CEX Listing</li>
              <li>Token Staking</li>
              <li>+5000 Holders</li>
              <li>Tier 1 Cex Listing</li>
              <li>To the moon!</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Copyright<span>&#169;</span> 2023 Dack Coin. All rights reserved
        </p>
        <ul>
          <li>
            <a href="https://twitter.com/basedape_iCP">
              <img src="/assets/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://t.me/basedape_iCP">
              <img src="/assets/telegram.png" alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </body>
  );
} 

export default App;
