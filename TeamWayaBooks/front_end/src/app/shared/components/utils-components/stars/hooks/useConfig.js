import { useState } from 'react';

export default function useConfig(config) {
    const [count, setCount] = useState(config.count);
    const [size, setSize] = useState(config.size);
    const [char, setChar] = useState(config.char);
    const [color, setColor] = useState(config.color);
    const [activeColor, setActiveColor] = useState(config.activeColor);
    const [isHalf, setIsHalf] = useState(config.isHalf);
    const [edit, setEdit] = useState(config.edit);

    const configObj = {
        count,
        size,
        char,
        color,
        activeColor,
        isHalf,
        edit,
    };

    function setConfig(config) {
        setCount(config.count);
        setSize(config.size);
        setChar(config.char);
        setColor(config.color);
        setActiveColor(config.activeColor);
        setIsHalf(config.isHalf);
        setEdit(config.edit);
    }

    return [configObj, setConfig];
}
