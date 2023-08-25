import React from 'react';

const defaultStyles = {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'block',
    float: 'left',
};

const Star = (props) => {
    const {
        index,
        active,
        config,
        halfStarHidden,
        halfStarAt,
        isUsingIcons,
        uniqueness,
    } = props;
    const { color, activeColor, size, char, isHalf, edit, filledIcon } = config;

    let starClass = '';

    if (isHalf && !halfStarHidden && halfStarAt === index) {
        if (!isUsingIcons) starClass = `react-stars-${uniqueness}`;
        else starClass = 'react-stars-half';
    }

    const style = Object.assign({}, defaultStyles, {
        color: active ? activeColor : color,
        cursor: edit ? 'pointer' : 'default',
        fontSize: `${size}px`,
    });

    function renderIcon() {
        return char;
    }
    return (
        <span
            className={starClass}
            style={style}
            key={index}
            data-index={index}
            data-forhalf={filledIcon ? index : char}
        >
            {renderIcon()}
        </span>
    );
};

export default Star;
