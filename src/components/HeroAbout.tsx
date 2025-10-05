import React from 'react';
import Navigation from './Navigation';
import heroAbt from '../assets/heroAbt.jpg';

const HeroAbout = () => {
  const styles = {
    keyframes: `
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes fadeIn {
        from { opacity: 0 }
        to { opacity: 1 }
      }
    `,
    typewriterLine1: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      width: '0',
      animation: 'typing 1.5s steps(10, end) forwards',
    },
    typewriterLine2: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      width: '0',
      animation: 'typing 1.6s steps(10, end) 1.6s forwards',
    },
    typewriterRight: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      width: '0',
      animation: 'typing 2s steps(20, end) 2.4s forwards',
    },
    fadeIn: {
      opacity: 0,
      animation: 'fadeIn 1.2s ease-in 4s forwards',
    },
  };

  return (
    <>
      <style>{styles.keyframes}</style>

      <Navigation />

      <section className="flex h-auto">
        {/* Left side with image and overlay */}
        <div
          className="relative w-2/5 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroAbt})`,
          }}
        >
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-16 w-full h-full flex flex-col justify-center">
              <div className="w-full text-right mt-20">
                <h1
                  className="text-6xl font-extrabold leading-tight tracking-wide bg-clip-text text-transparent bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${heroAbt})`,
                    ...styles.typewriterLine1,
                  }}
                >
                  DEPUIS
                </h1>
                <br />
                <h1
                  className="text-6xl font-extrabold leading-tight tracking-wide bg-clip-text text-transparent bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${heroAbt})`,
                    ...styles.typewriterLine2,
                  }}
                >
                  2000
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with full image, no overlay */}
        <div
          className="w-3/5 bg-cover bg-center flex items-center justify-start p-8"
          style={{
            backgroundImage: `url(${heroAbt})`,
          }}
        >
          <div>
            <h1
              className="text-6xl font-extrabold leading-tight tracking-wide text-white relative top-6"
              style={styles.typewriterRight}
            >
              AADEC
            </h1>
            <p
              className="mt-10 text-gray-200 max-w-4xl"
              style={styles.fadeIn}
            >
              Les générations changent ,Mais Les valeurs et les Principes de l'AADEC ne changent pas
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
