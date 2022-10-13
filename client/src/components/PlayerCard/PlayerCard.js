import React from "react";
import styles from './styles.module.css';

const PlayerCard = (props) => {
    const { playerData } = props;
    return (
        <div>
            <span>{playerData.player}</span>
            <span>{playerData.position}</span>
        </div>
    )
}

export default PlayerCard