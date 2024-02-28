import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from "../Firebase/Config";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthentication = ()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='main'>
    <div className='header'>
<div className='first-wrapper'>
  <Link to='/'>
  <div className='logo'>
    <img  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='logo' />
</div>
  </Link>


<div className='map'>
  <div>Deliver to</div>
<div className='map-icon'>
      <RoomIcon/>
  <div>Ethiopia</div>
  </div>
</div>
<div className='inputWrapper'>
<div className='allWrapper'> All </div>
<div className='imput'>
<input/>
</div>
<div className='search-icon'>
<SearchIcon/>
</div>
</div>

</div>
<div className='second-wrapper'>
<div className='sign-in'>
  <div>Hello {!user?"Guest":user.email}</div>
  <Link to={!user&&"/signin"}>
  <div onClick={handleAuthentication} className='sign-in'> {user?"Sign out":"Sign in"}</div>
  </Link>
</div>
<div className='order'>
  <div>Returns</div>
<div>& Orders</div>
</div>
<Link to='checkout'>
<div className='cart'>
<AddShoppingCartIcon/>
<div className='itemeCoutnter'>{basket.length}</div>
</div>
</Link>

</div>
    </div>
    <div className='header2'>
      <div className='header2-first-wrapper'>
 <div className='recorder-wrapper'>
  <ReorderIcon/>
  <span className='header2_all'> All </span>
  </div>
<div className='ul-wrapper'>
<ul>
<li> Today's Deals</li>

<li> Customer Service</li>

<li>Registry</li>

<li>Gift Cards</li>

<li> Sell</li>

  </ul>
</div>
</div>
<div>Shop great deals now</div>
    </div>
    </div>

  )
}

export default Header