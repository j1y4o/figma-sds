import React from 'react';
import Button from './Button';
import './ButtonExamples.css';

export const ButtonExamples: React.FC = () => {
  const handleClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked!`);
  };

  return (
    <div className="button-examples">
      <h2>Button Component Examples</h2>
      
      <section className="button-section">
        <h3>Primary Buttons</h3>
        <div className="button-row">
          <Button 
            variant="primary" 
            size="medium" 
            onClick={() => handleClick('Primary Medium')}
          >
            Medium Primary
          </Button>
          <Button 
            variant="primary" 
            size="small" 
            onClick={() => handleClick('Primary Small')}
          >
            Small Primary
          </Button>
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
        </div>
      </section>

      <section className="button-section">
        <h3>Neutral Buttons</h3>
        <div className="button-row">
          <Button 
            variant="neutral" 
            size="medium" 
            onClick={() => handleClick('Neutral Medium')}
          >
            Medium Neutral
          </Button>
          <Button 
            variant="neutral" 
            size="small" 
            onClick={() => handleClick('Neutral Small')}
          >
            Small Neutral
          </Button>
          <Button variant="neutral" disabled>
            Disabled Neutral
          </Button>
        </div>
      </section>

      <section className="button-section">
        <h3>Subtle Buttons</h3>
        <div className="button-row">
          <Button 
            variant="subtle" 
            size="medium" 
            onClick={() => handleClick('Subtle Medium')}
          >
            Medium Subtle
          </Button>
          <Button 
            variant="subtle" 
            size="small" 
            onClick={() => handleClick('Subtle Small')}
          >
            Small Subtle
          </Button>
          <Button variant="subtle" disabled>
            Disabled Subtle
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
