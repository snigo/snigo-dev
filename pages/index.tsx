import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';

import TaskCard from '../components/cards/task-card';
import PulsingHeart from '../components/animation/pulsing-heart';
import Topbar from '../components/topbar/topbar';
import { DayTask } from '../types/daytask.interface';

import { projects } from '../data/code-problems.json';

const START_DATE = new Date('2020-05-17');

function getChallengeDay() {
  return Math.ceil((Date.now() - START_DATE.getTime()) / (3600000 * 24));
}

const Index = () => {
  const topEl = useRef(null);
  const [topbarFixed, _setTopbarFixed] = useState(false);
 
  useEffect(() => {
    const fixOnScroll = () => {
      _setTopbarFixed(window.scrollY > topEl.current?.offsetTop);
    };

    window.addEventListener('scroll', fixOnScroll);

    return () => {
      window.removeEventListener('scroll', fixOnScroll);
    };
  }, []);

  return (
    <div className="shell">
      <Head>
        <title>@snigo: with love to the web.</title>
        <meta name="description" content="@snigo is an aspiring web developer with passion to open source, modern web standards and UX-driven software design."/>
        <meta name="keywords" content="graphic design, web design, website design, website builder, web developer, web designer, webdesign, ecommerce website, web design company, website creator, website designer, responsive web design, web development company, best website design, web design software, web page design, build a website, design website, web design inspiration, website layout, react website, react developer" />
      </Head>
      <Topbar fixed={topbarFixed} />
      <div className="wrapper">
        <a href="#100DaysOfCode_content_top" id="100DaysOfCode_content_top" ref={topEl} tabIndex={-1} />
        <h1 className="title">Hi, I'm @snigo<span style={{color: 'var(--colors-blue-50'}}>.</span></h1>
        <p>I've accepted <a href="https://www.100daysofcode.com/" target="_blank" rel="noreferrer noopener" className="fancy-link">#100DaysOfCode</a> challenge and this is my day <span style={{color: 'var(--colors-pink-40'}}>{getChallengeDay()}</span>.</p>
        <hr/>
        <div className="project-grid">
          {
            projects.map((task) => <TaskCard task={task as DayTask} key={task.date} />)
          }
        </div>
      </div>
      <footer>
        <span>{'Designed and coded with '}</span>
        <PulsingHeart />
        <span>{' by '}</span>
        <a className="fancy-link" href="mailto:snigo.ogins@gmail.com">snigo</a>
        <span>.</span>
      </footer>
    </div>
  );
};

export default Index;
