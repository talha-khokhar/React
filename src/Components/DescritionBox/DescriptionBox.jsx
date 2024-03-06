import React from 'react'
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <>
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="decriptionbox-nav-box">Description</div>
                <div className="decriptionbox-nav-box fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, accusantium. Consequuntur impedit nulla possimus vitae architecto asperiores culpa, necessitatibus corrupti molestias consequatur, magni dolorem iusto ex saepe vel perferendis ipsum neque vero quasi perspiciatis dolor soluta maiores itaque veritatis. Quia sunt, veritatis explicabo voluptas in quo quaerat iste soluta expedita.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at quaerat harum. Animi vero ea accusamus odio magni ratione reiciendis placeat, dicta ullam autem eaque?</p>
            </div>
        </div>
    </>
  )
}

export default DescriptionBox;