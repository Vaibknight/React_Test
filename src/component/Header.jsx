import React from 'react'
import logo from '../assets/1.png';
import down from '../assets/Vector.png';
import Media from '../styles/Media.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className="row my-3">
            <div className="col my-2">
                <div>
                    <div className='d-inline fs-4' style={{color:'#27A365'}}>
                        ATG.
                    </div>
                    <div className='d-inline fs-4'>
                    W
                    </div>
                    <div className='d-inline'>
                        <img style={{    position: 'relative' ,  top: '-5px'}}  src={logo} alt=""/>
                    </div>
                    <div className='d-inline fs-4'>
                        RLD
                    </div>
                </div>
            </div>
            <div className="col">
            <div class="input-group mb-3 my-1">
                <input type="text" placeholder="Search for your favourite groups in ATG" class="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
            <div className="col">
                <div className='container-lg my-2' style={{margin : '0 auto', width: '56%'}}>
                        <p className='d-inline'>Create account.</p>
                        <p className='d-inline text-primary fw-bold'>It's free!</p>
                        <img className='d-inline'  src={down} alt=""/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
