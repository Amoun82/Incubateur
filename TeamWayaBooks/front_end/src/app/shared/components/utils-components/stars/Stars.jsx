import React, { useEffect, useState } from 'react';

import useConfig from './hooks/useConfig';
import Star from './Star';

const parentStyles = {
    overflow: 'hidden',
    position: 'relative',
};
function getHalfStarStyles(color, uniqueness) {
    return `
    .react-stars-${uniqueness}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`;
}

const Stars = (props) => {
    const [uniqueness, setUniqueness] = useState('');
    const [currentValue, setCurrentValue] = useState(0);
    const [stars, setStars] = useState([]);
    const [config, setConfig] = useConfig(props);
    const [halfStarAt, setHalfStarAt] = useState(0);
    const [halfStarHidden, setHalfStarHidden] = useState(false);
    const [classNames, setClassNames] = useState('');

    function createUniqueness() {
        setUniqueness((Math.random() + '').replace('.', ''));
    }
    function validateInitialValue(value, count) {
        if (value < 0 || value > count) {
            setCurrentValue(0);
        } else {
            setCurrentValue(value);
        }
    }

    function addClassNames() {
        const reactStarsClass = 'react-stars';
        setClassNames((props.classNames ? `${props.classNames} ` : '') + reactStarsClass);
    }

    function getRate() {
        return config.isHalf ? Math.floor(currentValue) : Math.round(currentValue);
    }

    function getStars(activeCount) {
        if (typeof activeCount === 'undefined') {
            activeCount = getRate();
        }

        let stars = [];
        for (let i = 0; i < config.count; i++) {
            stars.push({
                active: i <= activeCount - 1,
            });
        }
        return stars;
    }

    useEffect(() => {
        addClassNames();
        validateInitialValue(props.value, props.count);
        setStars(getStars(props.value));
        setConfig(props);
        createUniqueness();
        setHalfStarAt(Math.floor(props.value));
        setHalfStarHidden(props.isHalf && props.value % 1 < 0.5);
    }, []);

    function renderStars() {
        return stars.map((star, i) => (
            <Star
                key={i}
                index={i}
                active={star.active}
                config={config}
                halfStarHidden={halfStarHidden}
                halfStarAt={halfStarAt}
                isUsingIcons={false}
                uniqueness={uniqueness}
            />
        ));
    }
    function renderHalfStarStyleElement() {
        return (
            <style
                dangerouslySetInnerHTML={{
                    __html: getHalfStarStyles(config.activeColor, uniqueness),
                }}
            ></style>
        );
    }

    return (
        <div className={`react-stars-wrapper-${uniqueness}`} style={{ display: 'flex' }}>
            <div className={classNames} style={parentStyles}>
                {config.isHalf && renderHalfStarStyleElement()}
                {renderStars()}
                <p style={{ position: 'absolute', left: '-200rem' }} role="status">
                    {currentValue}
                </p>
            </div>
        </div>
    );
};

Stars.defaultProps = {
    edit: false,
    half: true,
    value: 0,
    count: 5,
    char: '★',
    size: 15,
    color: 'gray',
    activeColor: '#ffd700',
};

export default Stars;
