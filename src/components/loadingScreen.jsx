import React from 'react'
import Image06 from '../images/06-small.png'

const LoadingScreen = ()=>{

    return(<div>

<div id="divLoading" style={{margin: '0px' , padding: '0px', position: 'center',  right: '0px', top: '0px', width: '0px', height: '0px', backgroundColor: '#ffffff', zIndex: '30001'}}>
{/* <p style={{position: 'absolute' ,color: 'White' , top: '50%' , left: '45%'}}>
Loading, please wait...
</p> */}
<img id="loadingpng" style={{position: 'absolute' ,color: 'White' , top: '45%' , left: '41%'}} src={Image06}/>
</div>

    </div>)
}

export default LoadingScreen