import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import { useContextAPI } from '../components/features/contextapi'
import CommonSection from '../components/ui/Common-section/CommonSection'

const Dashboard = () => {
  const { user, setUser, yourJoinedUsers, updateSellerRequests, setMessage , sponsorName  } = useContextAPI()
  const { conToMetaMask,  connectedUser, setConnectedUser} = useContextAPI()


  console.log({connectedUser});

  const {uAddress, referrer, signedUp,yourUsers  } = connectedUser
  return (
    <div>
        <CommonSection title='Dashboard' />
      <section>
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <h1 className="text-dark pt-4 fw-bold">Account information</h1>
              <p className='pb-4 fs-5 text-secondary'>You can set preferred display name, create your profile URL and manage other personal settings.</p>

              <hr />

              <div className="row justify-content-center mb-5 mt-5">

                <div className="col-11 col-lg-10 mt-5">
                  <div style={{ fontWeight: "500" }} >Your Sponser</div>
                  <div type="text" className='form-control form-control-lg  m-0' style={{fontSize: "15px", backgroundColor: "rgba(0,0,255,0.2)" }}>{referrer}</div>
                </div>

                <div className="col-11 col-lg-10 mt-1">
                  <div style={{ fontWeight: "500" }} >Your Affiliate Code</div>
                  <div type="text" className='form-control form-control-lg  m-0' style={{fontSize: "15px", backgroundColor: "rgba(0,0,255,0.2)" }}>{uAddress}</div>
                </div>

                <div className="col-11 col-lg-10 mt-1">
                  <div style={{ fontWeight: "500" }} >Users used your affiliate code: ( {yourUsers?.length || 0} )</div>
                  <div type="text" className='form-control form-control-lg  m-0' style={{fontSize: "15px", backgroundColor: "rgba(0,0,255,0.2)" }}>{yourUsers?.join(", ")}</div>
                </div>



              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard