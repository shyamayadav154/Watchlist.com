import React from 'react'
import ContentLoader from 'react-content-loader'

const SingleContentLoader = (props) => {
  return (
    <div className='lg'>
      <ContentLoader
        speed={1}
        width={1000}
        height={660}
        viewBox='0 0 1000 660'
        backgroundColor='#032541'
        foregroundColor='#ecebeb'
        {...props}
      >
        <rect x='83' y='132' rx='0' ry='0' width='348' height='455' />
        <rect x='485' y='144' rx='0' ry='0' width='193' height='46' />
        <rect x='485' y='268' rx='0' ry='0' width='137' height='39' />
        <rect x='485' y='387' rx='0' ry='0' width='102' height='30' />
        <rect x='485' y='448' rx='0' ry='0' width='105' height='121' />
        <rect x='610' y='448' rx='0' ry='0' width='105' height='121' />
        <rect x='745' y='448' rx='0' ry='0' width='105' height='121' />
        <rect x='875' y='448' rx='0' ry='0' width='105' height='121' />
      </ContentLoader>
    </div>
  )
}

export default SingleContentLoader