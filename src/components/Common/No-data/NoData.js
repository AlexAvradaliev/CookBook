import styles from './NoData.module.css';

const NoData = () => {

    return (
        <div className='profile__content__nothing'>
        <img alt='Nothing found' src={`/images/no-${active}.png`} />
        <p>Nothing here yet</p>
      </div>
    );
};

export default NoData;
