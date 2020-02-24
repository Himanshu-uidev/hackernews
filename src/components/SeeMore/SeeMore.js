import React from 'react';
import styles from '../SeeMore/SeeMore.module.css'


const SeeMore = (props) => { // function rendering more link to render next news list

    return ( <
        button className = { styles.seeMoreBtn }
        onClick = { props.pageChange } >
        More <
        /button>
    )
}

export default SeeMore;