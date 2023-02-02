import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers';
// import { ethers, utils } from 'ethers';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { contractabi, contractAddress } from '../contractinfo/contractdetails';
import { useContextAPI } from '../features/contextapi';
import CommonSection from '../ui/Common-section/CommonSection'
// import { IntegrationWallets } from '../Wallets/IntegrationWallets'


const Signup = () => {
    const { active, account } = useWeb3React()
    const [userName, setUserName] = useState('')
    const [affiliateCodeInput, setAffiliateCodeInput] = useState('')

    const [userInputStepDone, setUserInputStepDone] = useState(false)
    const [userAddressStepDone, setUserAddressStep] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const { conToMetaMask , contract, library} = useContextAPI()

    const concToMetamask = () => {
        conToMetaMask()

    }


    const addressfunc = async () => {
        if(!account){
            return
        }
        setUserAddressStep(true)

    }

    const CodeANDSignup = async () => {
        if (!account) {
            setUserAddressStep(false)
            alert({ message: "First connect wallet!", isMessage: true, color: "danger" })

        } else if (!affiliateCodeInput) {
            alert("enter affiliate code")
        } else {
            try {
                console.log('here');
                setIsLoading(true)
                console.log(account);
                const signer = library?.getSigner(account)
                const con = new ethers.Contract(contractAddress, contractabi, signer);
                const tx = await con?.signUp(affiliateCodeInput)
                await tx.wait()

                // const sponsor = await contract?.getSponsor()
                setIsLoading(false)

            } catch (error) {
                alert(error.reason || error.message);
                setIsLoading(false)

            }
        }
    }


    return (

        <div>
           <CommonSection title='Sign Up' />
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6">
                       

                        <p className='pt-5 text-black'>Already have an account? Please login to the site with connecting your wallet.</p>

                        <div className="row px-4 py-2  rounded text-dark " style={{ backgroundColor: "rgba(255,0,0,.15)" }}>
                            <ol className='py-0 my-0'>
                                <li className={`${!userAddressStepDone && 'fw-bold'}`}>Please connect your wallet.</li>
                                <li className={`${active && userAddressStepDone && 'fw-bold'}`}>Provide affiliate code address and Sign up.</li>
                            </ol>
                        </div>

                        {!userAddressStepDone &&

                            <>
                                <div className='py-2'>
                                    <div className='text-start'>Wallet Address</div>
                                    <div className="form-control form-control-md text-start btn btn-light" onClick={concToMetamask}>{active ? account : "Connect Wallet"}</div>
                                </div>

                                <div className='text-start mt-2'>
                                    
                                        <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={addressfunc}>
                                            Next Step
                                        </button>
                                       
                                </div>

                            </>
                        }


                        {userAddressStepDone &&
                            <>
                                <div className='py-2'>
                                    <div className='text-start'>Wallet Address</div>
                                    <input
                                        className="form-control p-2 rounded-pill form-control-md"
                                        type="text"
                                        value={affiliateCodeInput}
                                        onChange={(e) => setAffiliateCodeInput(e.target.value)}
                                        placeholder="Add Affiliate Code"
                                    />
                                </div>
                                {isLoading ?
                                    <button className="btn btn-primary m-1 px-4 rounded-pill fs-5 disabled">
                                        Processing..
                                    </button>
                                    :
                                    <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={CodeANDSignup}>
                                        Sign up
                                    </button>
                                }
                            </>
                        }



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup