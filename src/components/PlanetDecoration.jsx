import React from 'react';
import './PlanetDecoration.css';

/**
 * type: 'sun' | 'earth' | 'saturn' | 'mars' | 'moon' | 'star' | 'comet' | 'nebula'
 */
function PlanetDecoration({ type }) {
  return (
    <div className={`planet-wrap planet-${type}`} aria-hidden="true">
      <div className="planet-sphere">
        {type === 'saturn' && <div className="saturn-ring" />}
        {type === 'comet'  && <div className="comet-tail" />}
        {type === 'star'   && (
          <>
            <div className="star-flare star-flare-1" />
            <div className="star-flare star-flare-2" />
          </>
        )}
      </div>
    </div>
  );
}

export default PlanetDecoration;
