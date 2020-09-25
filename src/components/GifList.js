import React from 'react';

const GifList = (props) => {
  let giphs = props.giphs.map(giph=><div key={giph.id}><img src={giph.images.fixed_height.url}/></div>)
  return(
    <div>
      {giphs.slice(22)}
    </div>
  )
}

export default GifList
