import heroBG from "./ai-generated.jpg";
import "./App.css";
import Lottie from "lottie-react";
import creature1 from "./creature1.json";
import creature2 from "./creature2.json";
import creature3 from "./creature3.json";
import creature4 from "./creature4.json";
import waves from "./waves.json";

import particle2 from "./particle2.json";
import ranking from "./ranking5.json";
import compass from "./compass.json";
import github from "./github.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "get-starknet";

function App() {
   const handleConnect = () => {
      connect({
         modalMode: "alwaysAsk",
      }).then(resp =>
         window.location.href = 'http://localhost:5173/'
      );
   }

   return (
      <div className="App">
         {/****************************************************************************
            HERO
         *****************************************************************************/}

         <header className="App-header" id="container">
            <Lottie className="creature1" animationData={creature1} />
            <Lottie className="creature2" animationData={creature2} />
            <Lottie
               className="particle2 particle2-1"
               animationData={particle2}
               speed={2}
            />
            <Lottie
               className="particle2 particle2-2"
               animationData={particle2}
               speed={0}
            />
            {/*
            <Lottie
               className="particle2 particle2-3"
               animationData={particle2}
            />
            
            <Lottie
               className="particle2 particle2-4"
               animationData={particle2}
            />
            <Lottie
               className="particle2 particle2-5"
               animationData={particle2}
            /> */}

            {/****************************************************************************
            HERO - menu
            *****************************************************************************/}

            <div className="menu-wrap" id="home">
               <div className="menu">
                  <a className="menu-item" href="#home">
                     <span>Home</span>
                  </a>
                  <a className="menu-item" href="#features">
                     <span>Features</span>
                  </a>
                  <a className="menu-item" href="#gameflow">
                     <span>Gameflow</span>
                  </a>
                  <a className="menu-item" href="#team">
                     <span>Team</span>
                  </a>
               </div>
            </div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <div>
               <h1 className="game-title" id="inner">
                  <span className="gt1">s</span>
                  <span className="gt2">t</span>
                  <span className="gt3">a</span>
                  <span className="gt4">r</span>
                  <span className="gt5">k</span>
                  <span className="gt4">m</span>
                  <span className="gt2">o</span>
                  <span className="gt1">n</span>
               </h1>

               <h3>
                  <span className="h3">Unleash the </span>
                  <span className="h3-highlight">
                     <span>Creatures</span>
                  </span>
               </h3>
            </div>
            <div>
               <button className="btn btn1" onClick={() => handleConnect()}>
                  <span>Play Now</span>
                  <span>
                     <svg
                        width="66px"
                        height="43px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="https://google.com"
                        xmlnsXlink="https://google.com"
                     >
                        <g
                           id="arrow"
                           stroke="none"
                           stroke-width="1"
                           fill="none"
                           fill-rule="evenodd"
                        >
                           <path
                              className="ar1"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar2"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar3"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                        </g>
                     </svg>
                  </span>
               </button>

               {/* <a className="btn btn2" href="#">
                  <span>Play Now</span>
                  <span>
                     <svg
                        width="66px"
                        height="43px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="https://google.com"
                        xmlnsXlink="https://google.com"
                     >
                        <g
                           id="arrow"
                           stroke="none"
                           stroke-width="1"
                           fill="none"
                           fill-rule="evenodd"
                        >
                           <path
                              className="ar1"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar2"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar3"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                        </g>
                     </svg>
                  </span>
               </a> */}
            </div>
         </header>

         {/****************************************************************************
            SEC 2 - Become a Starkmaniac
         *****************************************************************************/}

         <div className="sec2" id="features">
            <Lottie className="waves" animationData={waves} />
            <div className="waves-overlay"></div>
            <p className="solo">
               Embark on a captivating journey in the quest of Starkmon, a 2D
               video game where players hunt and capture extraordinary creatures
               with unique stats. Armed with coins and a Starkdex, navigate
               enchanting landscapes to discover Thunderfins, Moonwhispers, and
               more. Every Starkmon captured brings you closer to becoming a
               legendary Trainer. Engage in thrilling battles, elevate your
               rank, and let the quest for mastery begin!
            </p>
            <h2>
               Become a <span className="stark-title">Starkmaniac</span>
            </h2>
            <div className="sec2-blurbs-wrap">
               <div className="sec2-blurbs">
                  <div className="blurb">
                     <Lottie className="compass" animationData={compass} />
                     <h4>Spawn & Explore</h4>
                     <p>
                        Explore the world of powerful creatures called Starkmons
                        and catch as many as you can before other players
                     </p>
                  </div>
                  <div className="blurb">
                     <Lottie className="creature3" animationData={creature3} />
                     <h4>Catch your Creatures</h4>
                     <p>
                        Choose your Starkmon creatures based on their health,
                        rarity and other quality stats
                     </p>
                  </div>
                  <div className="blurb">
                     <Lottie className="ranking" animationData={ranking} />
                     <h4>Battle & Grow</h4>
                     <p>
                        Compete with several fellow players’ Starkmons and climb
                        up the rank ladder to win a bounty
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/****************************************************************************
            SEC 3 - Walkthrough
         *****************************************************************************/}

         <div className="sec2 sec3" id="gameflow">
            <div className="waves-overlay"></div>
            <h2>
               The <span className="stark-title">Gameflow</span>
            </h2>
            <div className="sec2-blurbs-wrap">
               <div className="sec2-blurbs sec3-blurbs">
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faWallet} />
                     <h4>Spawn</h4>
                     <p>1. Connect wallet</p>
                  </div>
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faSignal} />
                     <h4>Spawn</h4>
                     <p>2. Check inventory & stats</p>
                  </div>
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faLocationDot} />
                     <h4>Spawn</h4>
                     <p>3. Spawn a random location</p>
                  </div>
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faMagnifyingGlassLocation} />{" "}
                     <h4>Spawn</h4>
                     <p>4. Explore & catch Starkmons</p>
                  </div>
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faCommentsDollar} /> <h4>Catch</h4>
                     <p>5. Exchange feedback</p>
                  </div>
                  <div className="blurb sec3-blurb">
                     <FontAwesomeIcon icon={faRankingStar} /> <h4>Battle</h4>
                     <p>6. Analyze leaderboard</p>
                  </div>
               </div>
            </div>
         </div>

         {/****************************************************************************
            SEC 4 - Team
         *****************************************************************************/}

         <div className="sec2 sec4" id="team">
            <Lottie className="waves" animationData={waves} />
            <div className="waves-overlay"></div>
            <h2>
               Creation of Starkmon -{" "}
               <span className="stark-title">The Team</span>
            </h2>
            <div className="sec2-blurbs-wrap sec4-blurbs-wrap">
               <div className="sec2-blurbs sec4-blurbs">
                  <div className="blurb sec4-blurb">
                     <div className="avatar av1"> </div>
                     <h4>@shramee</h4>
                     <p>
                        Explore the world of powerful creatures called Starkmons
                        and catch as many as you can before other players
                     </p>
                  </div>
                  <div className="blurb sec4-blurb">
                     <div className="avatar av2"> </div>
                     <h4>@rutefig</h4>
                     <p>
                        Choose your Starkmon creatures based on their health,
                        rarity and other quality stats
                     </p>
                  </div>
                  <div className="blurb sec4-blurb">
                     <div className="avatar av3"> </div>
                     <h4>@hazykeys</h4>
                     <p>
                        Compete with several fellow players’ Starkmons and climb
                        up the rank ladder to win a bounty
                     </p>
                  </div>
               </div>

               <div className="github-wrap">
                  <a href="https://github.com/starkmon" target="_blank" rel="noreferrer">
                     <Lottie className="github" animationData={github} />
                  </a>
               </div>
            </div>

            <div className="cta">
               <a className="btn" href="#">
                  <span>Connect Wallet</span>
                  <span>
                     <svg
                        width="66px"
                        height="43px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="https://google.com"
                        xmlnsXlink="https://google.com"
                     >
                        <g
                           id="arrow"
                           stroke="none"
                           stroke-width="1"
                           fill="none"
                           fill-rule="evenodd"
                        >
                           <path
                              className="ar1"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar2"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                           <path
                              className="ar3"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                           ></path>
                        </g>
                     </svg>
                  </span>
               </a>
               <footer>
                  <div className="foot1">
                     <p>
                        <span>starkmon</span>{" "}
                        <span>- Unleesh the Creatures</span> | All rights
                        reserved
                     </p>
                  </div>
                  <div className="foot2"></div>
               </footer>
            </div>
         </div>
      </div>
   );
}

export default App;
