import React from 'react'
import { Link } from 'react-router-dom';
import { heroes } from '../data/heroes'

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    



  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-5'>
                    <img src={heroImageUrl} className='card-img' alt={superhero}></img>
                </div>

                <div className='card-body col-5'>
                    <h5 className='card-title'> { superhero } </h5>
                    <p className='card-text'> { alter_ego }</p>

                    {
                        ( alter_ego !== characters )&& (<p> { characters }</p>)
                    }
                    <p className='card-text'>
                        <small className='text-muted'>
                            {first_appearance}
                        </small>
                    </p>
                    
                    
                    <Link id='Link' className='text-decoration-none' to={`/hero/${id}`}> Mas...</Link>
                    
                    
                    
                </div>

            </div>
        </div>
    </div>
  )
}
