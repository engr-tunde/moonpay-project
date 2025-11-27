import { Link } from "react-router-dom";

const HomeSection4 =()=>{

    return(
        <div>
            <div className="container text-center text-[48px] font-bold py-10">
                <h1 className="text-[20px] lg:text-[48px]">Experience crypto, effortlessly.</h1>

                <div className="py-3 mx-auto mt-4">
                  <div className="move flex gap-5">
                    <img src="/images/PayPal.png" alt=""className="w-[350px] lg:w-[50px]" />
                    <img src="/images/Venmo.png" alt="" className="w-[150px] lg:w-[50px]" />
                    <img src="/images/Mastercard.png" alt="" className="w-[150px] lg:w-[40px]" />
                    <img src="/images/Trust.png" alt="" className="w-[250px] lg:w-[40px]" />
                    <img src="/images/Ledger.png" alt="" className="w-[250px] lg:w-[40px]"/>
                    <img src="/images/MetaMask.png" alt="" className="w-[250px] lg:w-[40px]"/>
                    <img src="/images/Uniswap.png" alt=""className="w-[250px] lg:w-[40px]" />
                    <img src="/images/google-pay-1.png" alt=""  className="w-[200px] lg:w-[50px]"/>
                    <img src="/images/apple-pay-1.png" alt="" className="w-[200px] lg:w-[50px]"/>
                    <img src="/images/PayPal.png" alt="" className="w-[180px] lg:w-[50px]" />
                    <img src="/images/sepa.png" alt="" className="w-[180px] lg:w-[50px]" />
                    <img src="/images/paysafe-2.png" alt="" className="w-[180px]  lg:w-[50px]" />
                      <img src="/images/faster-payments.png" alt="" className="w-[60px] lg:w-[50px] h-auto" />
                  </div>
               </div>
               <p className="text-[12px] text-[#666666] text-center">+ 9 more payment options</p>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pt-18">
                    <div className="col-span-1 flex flex-col rounded-4xl bg-[#f9f8fb] h-[500px] lg:h-[520px] w-[90%] lg:w-[100%] mx-auto lg:mx-0">
                        <div className="">
                           <img src="/images/purchase.jpg" alt="" /> 
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-5 py-6 ">
                            <h2 className="text-[24px] lg:text-[29px] text-left ml-5">Purchase</h2>
                            <p className="text-[15px] text-left w-[300px] text-[#666666] ml-5">Buy crypto instantly with Apple Pay, Google Pay or your card. PayPal, Venmo and bank transfers are also available in select regions.</p>
                            <Link to="" className="pri-btn w-max ml-5 mt-6">Buy Crypto</Link>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col rounded-4xl bg-[#f9f8fb] h-[500px] lg:h-[520px] w-[90%] lg:w-[100%] mx-auto lg:mx-0 ">
                        <div>
                            <img src="/images/sell.jpg" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 py-6">
                            <h2 className="text-[24px] lg:text-[29px] text-left ml-5">Sell</h2>
                            <p className="text-[15px] text-left w-[100] lg:w-[300px] text-[#666666]  ml-5">Sell crypto instantly at the best available rate directly to your bank, card or MoonPay Balance.</p>
                            <Link to="" className="pri-btn w-max ml-5 lg:mt-12">Sell Crypto</Link>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col rounded-4xl bg-[#f9f8fb] h-[500px] lg:h-[520px] w-[90%] lg:w-[100%] mx-auto lg:mx-0">
                       <div>
                            <img src="/images/deposit-withdraw.jpg" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 py-3 lg:py-6">
                            <h2 className="text-[24px] lg:text-[29px] text-left ml-5">Deposit and withdraw</h2>
                            <p className="text-[15px] w-[320px] lg:w-[290px] text-left text-[#666666] ml-5">Move funds your way. Transfer between your bank, card, MoonPay Balance or deposit from another wallet. You are always in control of your money, just like your crypto.</p>
                            <Link to="" className="pri-btn w-max ml-5">Deposit and Withdraw</Link>
                        </div>
                    </div>
               </div>
        
            </div>
        </div>
    )
}

export default HomeSection4