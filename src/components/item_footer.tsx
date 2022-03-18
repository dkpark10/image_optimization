import styled from 'styled-components';
import CircleImage from './circle_img';
import ImageWrapper from './center_img';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/index';
import Skeleton from './skeleton';
import { useState } from 'react';

const FooterWrapper = styled.div`
  
  position: relative;
  height:20%;

  .footer_item{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
  }  

  .polygon, .new-moon, .star, .right, .rounded-rectangle{
    background: url('images34gray.png') no-repeat;
  }

  .polygon{
    background-position: 0 0;
  }
  .new-moon{
    background-position: -34px 0;
  }
  .star{
    background-position: -68px 0;
  }
  .right{
    background-position: -102px 0;
  }
  .rounded-rectangle{
    background-position: -136px 0;
  }
`;

interface Props {
  randomValue: number;
}

export default function ItemFooter({ randomValue }: Props) {

  const sprite = useSelector((state: RootState) => state.options.sprite);
  const [loading, setLoading] = useState<boolean>(true);

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${randomValue + 300}` as const;
  const size = {
    width: '34px',
    height: '34px'
  }

  const spriteImage = (sprite: boolean): JSX.Element[] => {

    const classNameList = ['polygon', 'new-moon', 'star', 'right', 'rounded-rectangle'];

    return classNameList.map((className, idx) =>
      <ImageWrapper
        width={size.width}
        height={size.height}
        boxShadow={true}
        key={idx}
      >
        <img src={`${className}gray.png`} />
        {/* {sprite ? <div className={className} /> : <img src={`${className}gray.png`} />} */}
      </ImageWrapper>
    )
  }

  return (
    <>
      <FooterWrapper>
        <div className='footer_item'>
          <CircleImage
            width={'37px'}
            height={'37px'}
          >
            {loading && <div
              className='skeleton-item'
              style={{ width: '100%', height: '100%' }}
            />}
            <img src={RANDOM_IMG1} onLoad={() => setLoading(false)} />
          </CircleImage>
          {spriteImage(sprite)}
        </div>
      </FooterWrapper>
    </>
  )
}