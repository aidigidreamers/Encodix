import React from 'react'
import './moonmap.css'
import GreenMark from '../images/checkmark-green.svg'
import alone from "../images/kishu-rocket-alone.png"
import stars from "../images/kishu-rocket-stars.png"
import trail from "../images/kishu-rocket-trail.png"
import smoke from "../images/kishu-rocket-smoke.png"
import space from "../images/kishu-rocket-space.png"
// import space from "../"



const Moonmap =()=>{
    return(<>
      {/* <div class="outer-wrapper">
         <div class="wrapper">
      
            <div data-w-id="239ab2f1-7937-e5fc-7485-1632648133f6" class="moonmap-scrolling-wrapper">
              <div class="">
                <div class="">
                  <div data-w-id="942a9278-044b-0f8a-f7c5-75c5c9d7c39a" class="flex-horizontal">
                    <div class="kishu-rocket-wrapper">
                      <img src={alone} loading="lazy" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 593.828125px, 37vw" srcset={alone , alone} alt="" class="kishu-rocket" />
                    <img src={stars} loading="lazy" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 42vw" srcset="images/kishu-rocket-stars-p-500.png 500w, images/kishu-rocket-stars-p-800.png 800w, images/kishu-rocket-stars.png 915w" alt="" class="rocket-stars" />
                    <img src={trail} loading="lazy" srcset="images/kishu-rocket-trail-p-500.png 500w, images/kishu-rocket-trail-p-800.png 800w, images/kishu-rocket-trail.png 805w" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 671.9921875px, 42vw" alt="" class="rocket-trail" />
                    <img src={smoke} loading="lazy" width="164.5" alt="" class="rocket-smoke" />
                    <img src={space} loading="lazy" data-w-id="b901c4bf-ff2e-dbae-ab88-d6aa4c2268f2" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 710px" srcset="images/kishu-rocket-space-p-500.png 500w, images/kishu-rocket-space.png 710w" alt="" class="space" />
                    </div>
                    <div class="moonmap-phase-wrapper">
                      <div class="phase">
                        <div class="accent-small centered">PHASE 1</div>
                      </div>
                      <div class="phase-details">
                        <h6 class="phase-status">PHASE COMPLETE</h6>
                        <h3 class="phase-name">Launch</h3>
                        <div class="phase-activities">
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">1,000 Holders</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">Website Launch</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">CoinGecko Listing</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">2,000 Telegram Members </p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">Community Marketing Fund</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">Marketing Campaign</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">CoinMarketCap Listing</p>
                          </div>
                          <div class="phase-activity-item">
                            <img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">5,000 Holders</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="moonmap-phase-wrapper">
                      <div class="phase">
                        <div class="accent-small centered">PHASE 2</div>
                      </div>
                      <div class="phase-details">
                        <h6 class="phase-status">PHASE COMPLETE</h6>
                        <h3 class="phase-name">Growth</h3>
                        <div class="phase-activities">
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">5,000 Telegram Members</p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">Website Redesign</p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">10,000 Holders</p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">10,000 Telegram Members</p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">20,000 Holders</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="moonmap-phase-wrapper">
                      <div class="phase">
                        <div class="accent-small centered">PHASE 3</div>
                      </div>
                      <div class="phase-details">
                        <h6 class="phase-status">PHASE COMPLETE</h6>
                        <h3 class="phase-name">Expansion</h3>
                        <div class="phase-activities">
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">KISHU Swap (Decentralize Exchange)<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">Initial CEX Listings (Hotbit, Bilaxy, CoinTiger)<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">15,000 Telegram Members<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">30,000 Holders<br /></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="moonmap-phase-wrapper">
                      <div class="phase">
                        <div class="accent-small centered">PHASE 4</div>
                      </div>
                      <div class="phase-details">
                        <h6 class="phase-status in-progress">IN PROGRESS</h6>
                        <h3 class="phase-name">Utility<br /></h3>
                        <div class="phase-activities">
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark" />
                            <p class="no-bottom-padding">100,000 Holders<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">KISHU Crate (NFT Marketplace)<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">KISHU Paw Print (Wallet and Passive Income Tracker)<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">KISHU sWag (Merchandise Store)<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">3 More CEX Listings<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">50,000 Telegram Members<br /></p>
                          </div>
                          <div class="phase-activity-item"><img src={GreenMark} loading="lazy" alt="" class="green-checkmark off" />
                            <p class="no-bottom-padding">Influencer Marketing Partnerships<br /></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
     

      </div> */}
    </>)
}
export default Moonmap