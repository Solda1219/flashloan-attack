import * as React from "react";
// import '../css/tutorial.css';
import '../css/knowledge.css';
import {Link} from 'react-router-dom';

function KnowledgeComponent(props) {

    return (
        <>
            <div className= "container">
                <h1 className= "search">Flash loan</h1>
                <h2 className= "search">Pancakeswap</h2>
                <h3 className= "search">Arbitrage</h3>
                <h4 className= "search">Snipe bot</h4>
                <h1 className= "search">Binance Smart Chain</h1>
                <div className= "knowledgeBody">
                    <div className= "title">
                        <h1 data-selectable-paragraph="">
                        <strong className="ce">Get to know about the concept of "Pancakeswap Flash Loan Attack"</strong>
                        </h1>
                    </div>
                    <div className= "mainContent">
                        <div className= "imgContent">
                            <img alt= "pancakeswap" src= "assets/pancake.png" className= "imgDes"></img>
                        </div>
                        <div className= "mainContentPart">
                        <p id="0255">So what if you can buy large amount of coin and sell in 1 second? Profitable enough? Here are some posts about the attacks against BSC.</p>
                        </div>
                        <div className= "quote">
                            <p>
                            In May 2021, we witnessed multiple hacks targeting BSC DeFi products. In particular, a loophole related to reward minting in the yield aggregator, PancakeBunny, was exploited to mint ~7M BUNNY tokens from nothing, leading to a $45M financial loss. After the hack, three forked projects — AutoShark, Merlin Labs, and PancakeHunny — were exploited using similar techniques. Below we dig into loophole and give a step-by-step account of the exploit by <strong className="hj if"> reproducing the attack</strong> against PancakeBunny.
                            </p>
                        </div>
                        <div>
                            <p>
                                You can read the full article here:
                                
                            </p>
                        </div>
                        <div>
                            <p><a href= "https://medium.com/amber-group/bsc-flash-loan-attack-pancakebunny-3361b6d814fd">https://medium.com/amber-group/bsc-flash-loan-attack-pancakebunny-3361b6d814fd</a></p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">What is Flash Loan</h1></p>
                        </div>
                        <div>
                            <p>
                            Flash loans are a new type of uncollateralized loans enforced by smart contracts pioneered by Aave, one of the top lending protocols in DeFi.
                            </p>
                            <p>
                            There are traditionally two types of loans: secured loans, which require collateral, and unsecured loans, which don’t. A good example of an unsecured loan is when you borrow $2,000 from a bank. Some banks are willing to lend you that amount provided that you have a good track record of paying loans. 
                            </p>
                            <p>
                            However, if the sum you intend to borrow is too large, it would be too risky for them to offer an unsecured loan, even if you have a good credit score. For instance, if you want to borrow $30,000, banks would normally require you to provide collateral, such as your house, vehicle, etc., to mitigate their risk.
                            </p>
                            <p>
                            Flash loans are essentially unsecured loans on steroids for the DeFi degen generation, requiring no collateral, credit checks, nor a limit to how much you can borrow, provided that you can pay back the loan in the same transaction. According to Aave, flash loans are the "first uncollateralized loan option in DeFi" designed for developers and allow users to borrow instantly and easily.
                            </p>
                            <p>
                            Arbitrage is the most popular use case of flash loans as it allows traders to earn from the price differences across various exchanges. For instance, if LINK is $30 on Exchange A and $35 on Exchange B, a user can borrow via a flash loan and conduct a separate order to buy 100 LINK for $3,000 at Exchange A, then sell them all for $3,500 at Exchange B and pay back the $3,000 loan. In this scenario, the user will be able to pocket $500 minus fees.
                            </p>
                            <div>
                            <p>
                                You can read the full article here:
                                
                            </p>
                            </div>
                            <p><a href= "https://coinmarketcap.com/alexandria/article/what-are-flash-loan-attacks?">https://coinmarketcap.com/alexandria/article/what-are-flash-loan-attacks?</a></p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">Flash Loan Attack in PancakeSwap</h1></p>
                        </div>
                        <div className= "end">
                            <p>
                            Now that you are willing to do the flash loan attack, I'll show you how to do it with the easiest and simplest tutorial below.
                            </p>
                            <p>
                            We can get flash loan from Multiplier Finance ILendingPool and swap with BUSD and immediately swap with BNB(what we lend from Finance) in one transaction. 
                            
                            </p>
                            <p><strong> Note:</strong> <i>Flashloan must be finished in one call of method. ie. in one transaction</i></p>
                            
                            <p>
                            Flash Loan Attack can be done with a methode by these two type of blockchain, ETH and BNB. The difference between them is that ETH using Uniswap and BNB using Pancakeswap. Each blockchain has different gas fees, But Eth has high gas fee.
                            So choose wisely.
                            </p>
                            <p>
                            Now Are you ready to jump? <Link to= "/simple-powerful-profitable-bsc-eth-flash-loan-method-tutorial">Code Now!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default KnowledgeComponent;