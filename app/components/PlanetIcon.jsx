import React from 'react';

import './PlanetIcon.scss';

export default function PlanetIcon() {
    return <div className="planet-icon">
        <svg
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            className="_svg"
        >
            <circle
                className="_background"
                cx="50"
                cy="50"
                r="35"
            />
            <circle
                className="_circle"
                cx="85"
                cy="85"
                r="5"
            />
            <circle
                className="_circle"
                cx="15"
                cy="15"
                r="5"
            />
            <circle
                className="_circle"
                cx="50"
                cy="50"
                r="35"
            />
            <line
                className="_line"
                x1="16"
                y1="50"
                x2="54"
                y2="50"
            />
            <line
                className="_line"
                x1="56"
                y1="43"
                x2="64"
                y2="43"
            />
            <line
                className="_line"
                x1="60"
                y1="35"
                x2="82"
                y2="35"
            />
            <line
                className="_line"
                x1="19"
                y1="35"
                x2="52"
                y2="35"
            />
            <line
                className="_line"
                x1="16"
                y1="57"
                x2="58"
                y2="57"
            />
            <line
                className="_line"
                x1="60"
                y1="52"
                x2="82"
                y2="52"
            />
            <line
                className="_line"
                x1="41"
                y1="65"
                x2="50"
                y2="65"
            />
            <line
                className="_line"
                x1="60"
                y1="65"
                x2="79"
                y2="65"
            />
        </svg>
    </div>
}
