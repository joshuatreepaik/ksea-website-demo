import React from 'react';
import './Event.css';
import seedImage from './SEED-image.jpeg';
import ukcImage from './UKC-image.png';
import katalystImage from './Katalyst-image.png';
import stepUpImage from './STEPUP-image.png';


function Event() {
  return (
    <section className="body">
        <div className='what-do-we-do'>
            <h1>What do we do?</h1>
            <p>KSEA는 퍼듀의 한인 이공계 학생들의 발전을 위한 여러 이벤트들을 주최하고있습니다.</p>
        </div>
        
        <section class='SEED' id = 'seed'>
            <div className="content-block">
                
                <img src={seedImage} alt="SEED" className="content-image" />
                <div>
                    <h2>SEED</h2>
                    <p>SEED stands for Scientists and Engineers Early Career Development Workshop and is offered by KSEA and KOFST to provide mentorship to, 
                and help develop the careers of, junior Korean-American scientists and engineers ranging from postdoctoral researchers to early career professionals.</p>
                </div>
                
            
            </div>
        </section>

        
        <section class='UKC' id = 'ukc'>
            <div className='content-block'>
                <img src={ukcImage} alt="UKC" className="content-image" />
                <div>
                    <h2>UKC</h2>
                    <p>UKC 2024 will offer compelling opportunities for participants to actively engage with industry experts and academic scholars, each bringing unique 
              perspectives on AI, and to create synergistic collaborations. </p>
                </div>
            </div>
        </section>
        <div className="content-block" id = 'katalyst'>
          <img src={katalystImage} alt="Katalyst" className="content-image" />
          <div>
            <h2>Katalyst</h2>
            <p>Katalyst 2024 aims to empower and equip undergraduate students with the knowledge, skills, and mindset needed to embark on a fulfilling journey towards leadership
                and personal growth. This dynamic event focuses on illuminating the diverse pathways to success, fostering leadership potential, and cultivating a supportive network
                that will serve as a guiding force throughout their endeavors. Through thought-provoking workshops, inspirational talks, and interactive sessions, participants will
                gain valuable insights, build essential leadership competencies, and forge connections that propel them towards becoming influential leaders in their chosen fields.</p>
          </div>
        </div>
        <div className="content-block" id = 'step-up'>
          <img src={stepUpImage} alt="STEP-UP" className="content-image" />
          <div>
            <h2>STEP-UP</h2>
            <p>The Korean-American Scientists and Engineers Association (KSEA) hosted the 4th Science and Technology Entrepreneurship Partners' Upscale Program (STEP-UP).
                The event aimed to promote and enrich the entrepreneurship of KSEA members, with a focus on discussing successful innovative companies in arts, entertainment, and technology.
                More than 130 participants from various sectors of the startup ecosystem attended the program, engaging in networking, invited speaker sessions, startup elevator pitches,
                and regular pitches to foster collaboration and knowledge sharing among passionate entrepreneurs..</p>
          </div>
        </div>
      </section>
  );
}

export default Event;


