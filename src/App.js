// import logo from './logo.svg';
import logo from './assets/g-komo.svg';
import vector1 from './assets/Vector1.svg';
import vector2 from './assets/Vector2.svg';



import './App.css';

function App() {
    return (
        <div className="App">

            <ul>
                <li><a href="#"><img src={logo} alt="logo" width="168px" height="75px" className="logo"/></a></li>
                <li><a href="#tokenstaking"><img src={vector2} alt="" width="25px" height="25px"/><span className="ml-10">Token Staking</span></a></li>
                <li><a href="#nftstaking"><img src={vector1} alt="" width="25px" height="25px"/><span className="ml-10">NFT Staking</span></a></li>
                <button className="btn btn-lg text-20 ml-auto mr-20">Connect Wallet</button>
            </ul>


            <div className="container">
                <div className="token">

                    <div className="token-title mt-40">
                        <div className="text-30">KOMO Token Staking</div>
                    </div>

                    <div className="token-balance mt-40">
                        <div className="text-16">Balance</div>
                        <div className="text-24 mt-10">10,000 KOMO</div>
                    </div>

                    <div className="token-balance mt-30">
                        <div className="text-16">Stake Amount</div>
                        <div className="token-amount-value mt-10">
                            <input type="text" className="mr-5" defaultValue="0"/>
                            <div className="text-24">KOMO</div>
                        </div>
                    </div>

                    <div className="token-duration mt-30">
                        <button className="btn btn-sm mr-10 mt-10">7 days</button>
                        <button className="btn btn-sm mr-10 mt-10" disabled>14 days</button>
                        <button className="btn btn-sm mr-10 mt-10" disabled>30 days</button>
                        <button className="btn btn-sm mr-10 mt-10" disabled>90 days</button>
                        <button className="btn btn-sm mr-10 mt-10" disabled>180 days</button>
                        <button className="btn btn-sm mr-10 mt-10" disabled>365 days</button>
                    </div>

                    <div className="token-balance mt-30">
                        <div className="text-16">APY</div>
                        <div className="text-24 mt-10">50% APY</div>
                    </div>

                    <div className="token-submit mt-30">
                        <button className="btn btn-xl">Stake Token</button>
                    </div>
                </div>

                <div className="portfolio">
                    <div className="text-30 mt-40">Portfolio</div>
                    <div className="portfolio-item mt-40">
                        <div className="item-amount-duration text-start">
                            <div className="text-14">Stake Amount / Duration</div>
                            <div className="text-18 mt-10">500 KOMO / 7 days</div>
                        </div>
                        <div className="item-remaining text-start">
                            <div className="text-14">Remaining</div>
                            <div className="text-18 mt-10">5 days</div>
                        </div>
                        <div className="item-apy text-start">
                            <div className="text-14">APY</div>
                            <div className="text-18 mt-10">50%</div>
                        </div>
                        <div className="item-reward text-start">
                            <div className="text-14">Reward</div>
                            <div className="text-18 mt-10">+0.52 KOMO</div>
                        </div>
                        <div className="item-reward-submit">
                            <button className="btn btn-md">Get Reward</button>
                        </div>

                    </div>

                    <div className="portfolio-item mt-40">
                        <div className="item-amount-duration text-start">
                            <div className="text-14">Stake Amount / Duration</div>
                            <div className="text-18 mt-10">1,500 KOMO / 90 days</div>
                        </div>
                        <div className="item-remaining text-start">
                            <div className="text-14">Remaining</div>
                            <div className="text-18 mt-10">26 days</div>
                        </div>
                        <div className="item-apy text-start">
                            <div className="text-14">APY</div>
                            <div className="text-18 mt-10">50%</div>
                        </div>
                        <div className="item-reward text-start">
                            <div className="text-14">Reward</div>
                            <div className="text-18 mt-10">+120.75 KOMO</div>
                        </div>
                        <div className="item-reward-submit">
                            <button className="btn btn-md">Get Reward</button>
                        </div>

                    </div>

                    <div className="portfolio-item mt-40">
                        <div className="item-amount-duration text-start">
                            <div className="text-14">Stake Amount / Duration</div>
                            <div className="text-18 mt-10">1,500 KOMO / 365 days</div>
                        </div>
                        <div className="item-remaining text-start">
                            <div className="text-14">Remaining</div>
                            <div className="text-18 mt-10">342 days</div>
                        </div>
                        <div className="item-apy text-start">
                            <div className="text-14">APY</div>
                            <div className="text-18 mt-10">50%</div>
                        </div>
                        <div className="item-reward text-start">
                            <div className="text-14">Reward</div>
                            <div className="text-18 mt-10">+10.72 KOMO</div>
                        </div>
                        <div className="item-reward-submit">
                            <button className="btn btn-md">Get Reward</button>
                        </div>

                    </div>

                </div>
            </div>
            <footer className="App-footer">
                Copyright 2022 PT Komodo Legends Interaktif
            </footer>
        </div>
    );
}

export default App;
