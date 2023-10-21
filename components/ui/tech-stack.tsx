"use client";

// import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

interface ColoredWordsProps {
    word: string;
    color: string;
    key: number;
};

const ColoredWords = ({ text }: { text: string }) => {

    const [words, setWords] = useState<ColoredWordsProps[]>([]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        do {
            color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        } while (color === '#000000'); // Ensure the color is not black
        return color;
    };

    useEffect(() => {
        if (text) {
            const wordArray = text.split(' ');

            const coloredWords = wordArray.map((word, index) => ({
                word,
                color: getRandomColor(),
                key: index,
            }));

            setWords(coloredWords);
        }
    }, [text]);

    return (
        <div className='gap-1 flex w-full flex-wrap leading-1 truncate'>
            {words.map(({ word, color, key }) => (
                <p key={key} style={{ color }}>
                    {word}{' '}
                </p>
            ))}
        </div>
    );
};

export default ColoredWords;