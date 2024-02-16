import React,{useState} from 'react'
import logo from './../../img/icons/Logo.svg'
import Social from '../social/Social';
import arrow from './../../img/icons/arrow-menu-down.svg'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { mobile, screenView } from '../common/Constants';

const Footer =()=>{

    //--------------------------->
    const [open, setOpen] = useState("");

    const handleClick = (id) => {
      const isClicked = open === id;
    
      if (!isClicked) {
        setOpen(id);
      } else {
        setOpen(null);
      }
    };
      //--------------------------->
    return(
        <footer className="footer">
            <div className="footerContainer">
                <div className="contactUs">
                    <button className="contactUsTitle" onClick={()=>handleClick('1')}>
                        <div className="logoContactUs">
                        <h2 className='TitleContactUs' > Contact Us</h2>
                        </div>
                        <div className="ContactUsArrow">
                             <img src={arrow} alt="logo" />
                             </div>
                    </button>
                    <div className={`collapseContactUs ${open === '1' ? 'active' :''}`}>
                    <div className="email">
                        <h3 className='emailTitle'>Email</h3>
                        <NavLink>needhelp@Organia.com</NavLink>
                    </div>
                    <div className="phone">
                        <h3 className='phoneTitle'>Phone</h3>
                        <NavLink className="phoneNamber">666 888 888</NavLink>
                    </div>
                    <div className="address">
                        <h3 className='addressTitle'>Address</h3>
                        <NavLink>88 road, borklyn street, USA</NavLink>
                    </div>
                    </div>
                </div>
                <div className="organic">
                    <button className="organicLogos" onClick={()=>handleClick('2')} >
                        <div className="logoOrganic" >
                        <img src={logo} alt="logo" />
                        </div>
                        <div className="organicArrow">
                             <img src={arrow} alt="logo" />
                             </div>
                    </button>
                    <div className={`collapseOrganic ${open === '2' ? 'active' :''}`}>
                    <p className='organicText'>Simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {
                     screenView >= mobile ?  <Social/> :''
                }
                </div>
                <div className="utility">
                    <button className="utilityLogos" onClick={()=>handleClick('3')}>
                        <div className="logoUtility">
                        <h2 className='utilityTitle'> Utility Title</h2>
                        </div>
                        <div className="utilityArrow">
                             <img src={arrow} alt="logo" />
                             </div>
                    </button>
                    <div className={`collapseUtility ${open ==='3' ? 'active' :''}`}>
                        <NavLink to={'home'} className='guide'>Style Guide</NavLink>
                        <NavLink to={'/*'} className='error'>404 Not Found</NavLink>
                        <NavLink to={'home'} className='password'>Password Protected</NavLink>
                        <NavLink to={'home'} className='licences'>Licences</NavLink>
                        <NavLink to={'home'} className='changelog'>Changelog</NavLink>  
                    </div>
                    {
                     screenView <= mobile ?  <Social/> :''
                }
                </div>

            </div>
            <div className="information">
                <div className="infoContainer">
                    <p className='organicInfo'>Copyright © <span>Organick</span> |</p>
                    <p className='organicInfo'>developer for <span>React</span> |</p>
                    <p className='organicInfo'>Alexsandr Samsonov <span>2021</span></p>
                </div>
                
            </div>
            
        </footer>
        
    )
}

export default Footer;