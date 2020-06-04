import Head from 'next/head';
import { Linkedin, Twitter, Mail, MapPin } from 'react-feather';

import 'bootswatch/dist/darkly/bootstrap.min.css';

const experiences = [
  {
    role: 'Senior Software Developer',
    description: 'at Exprivia from 2019',
    location: 'Vicenza, Italy',
  },
  {
    role: 'Lead Software Developer',
    description: 'at Social Media Emotions from 2017 to 2019',
    location: 'Vicenza, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Click Travel in 2017',
    location: 'Birmingham, United Kingdom',
  },
  {
    role: 'Software Developer',
    description: 'at Cloudreach from 2015 to 2017',
    location: 'London, United Kingdom',
  },
  {
    role: 'Software Developer',
    description: 'at Anthesi from 2014 to 2015',
    location: 'Tenno, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Global-IT from 2013 to 2014',
    location: 'Arco, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Finreale in 2012',
    location: 'Brescia, Italy',
  },
];

const subject = encodeURIComponent('Hello!');
const body = encodeURIComponent('Hi there,');
const mailToUrl = `mailto:egidio.caprino@gmail.com?subject=${subject}&body=${body}`;

const Experience = ({ role, description, location }) => (
  <div className="col mb-4">
    <div className="card border-light">
      <div className="card-header">{ role }</div>
      <div className="card-body">
        <h5 className="card-title">{ description }</h5>
        <p className="card-text">{ location }</p>
      </div>
    </div>
  </div>
);

export default () => (
  <>
    <Head>
      <title>Egidio Caprino - Software Developer</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <p className="text-center">
              <img className="rounded-circle img-thumbnail" type="image/svg+xml" src="/me.svg" style={{ width: '40%' }} />
            </p>
            <h1 className="display-4">Egidio Caprino</h1>
            <p className="lead">Software Developer</p>
            <p>
              <a href="https://www.linkedin.com/in/egidio-caprino-3042b476/" target="_blank">
                <Linkedin /> Egidio Caprino
              </a>
            </p>
            <p>
              <a href="https://twitter.com/EgidioCaprino" target="_blank">
                <Twitter /> @EgidioCaprino
              </a>
            </p>
            <p>
              <a href={mailToUrl}>
                <Mail /> egidio.caprino@gmail.com
              </a>
            </p>
            <p>
              <MapPin /> Vicenza, Italy
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-12">
          <p className="text-center">
            <a target="_blank" href="https://www.linkedin.com/in/egidio-caprino-3042b476/detail/recent-activity/posts/" role="button" className="btn btn-success btn-lg">
              <Linkedin /> Check out my articles
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-12">
          <h2>Experience</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4">
        { experiences.map(Experience) }
      </div>
    </div>

    <p className="text-center small mt-5">
      Copyright © { new Date().getFullYear() } Egidio Caprino. All rights reserved.
    </p>
  </>
);
