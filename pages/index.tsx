import Head from 'next/head';

import { projects } from '../data/code-problems.json';
import TaskCard from '../components/cards/task-card';
import { DayTask } from '../types/daytask.interface';

const START_DATE = new Date('2020-05-17');

function getChallengeDay() {
  return Math.ceil((Date.now() - START_DATE.getTime()) / (3600000 * 24));
}

const Index = () => (
  <div className="shell">
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <title>@snigo: with love to web.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/images/ninja-icon.svg" />
      <link rel="alternate icon" href="/images/ninja-icon-32.png" />
      <meta name="description" content="@snigo is an aspiring web developer with passion to open source, modern web standards and UX-driven software design."/>
      <meta name="keywords" content="graphic design, web design, website design, website builder, web developer, web designer, webdesign, ecommerce website, web design company, website creator, website designer, responsive web design, web development company, best website design, web design software, web page design, build a website, design website, web design inspiration, website layout, react website, react developer" />
    </Head>
    <div className="wrapper">
      <h1 className="title">Hi, I'm @snigo<span style={{color: 'var(--colors-blue-50'}}>.</span></h1>
      <p>I've accepted <a href="https://www.100daysofcode.com/" target="_blank" rel="noreferrer noopener" className="fancy-link">#100DaysOfCode</a> challenge and this is my day <span style={{color: 'var(--colors-pink-40'}}>{getChallengeDay()}</span>.</p>
      <hr/>
      <div className="project-grid">
        {
          projects.reverse().map((task) => <TaskCard task={task as DayTask} key={task.date} />)
        }
      </div>
    </div>
  </div>
);

export default Index;
