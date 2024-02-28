import React from 'react'
import HomePageComponent from '../HomePage-Component/HomePageComponent'
import './HomePageComponentWrapper.css'
import Banner from '../Banner/Banner'
function HomePageComponentWrapper() {
  return (
    <div className='HomePageComponentWrapper'>
      <div><Banner /></div>
    <div className='HomePageComponentWrapper__div'> 
        <HomePageComponent url = 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperbac"  price= "$12.56" rating={5} id="49538094" />
        <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"  price= "$12.56" rating={6}  id="49538094"/>
        <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price= "$12.56" rating={4}  id="4903850"/>
        <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price= "$12.56" rating={7} id="23445930"/>
    </div>
<div className='HomePageComponentWrapper__div'>
<HomePageComponent url = 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperbac"  price= "$12.56" rating={4} id="3254354345"/>
        <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"  price= "$12.5" rating={7} id="90829332"/>
        <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price= "$12.56" rating={7} id="9082933051"/>
        
</div>
<div className='HomePageComponentWrapper__div'>
  <HomePageComponent url = 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"  price= "$12.56" rating={7} id="9082933097"/>
  </div>
    </div>
  )
}

export default HomePageComponentWrapper