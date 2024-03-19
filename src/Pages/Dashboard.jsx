import React from 'react';
import '../Assets/Styles/Dashboard.css'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container dashboard">
    <div className="row justify-content-center">
      
      <div className="col-lg-4 col-md-6 col-sm-12">
      <Link to="/subject">
        <div className="card">
         <img src="https://images.ctfassets.net/skvkiv2kg4h0/aeSMfrcEd0SP1mEk0WYVE/9156b2596cd65d90da0ea2e32641252e/intro-html-css.jpg?w=534&h=300&fl=progressive&q=50&fm=jpg" alt="" />
        </div>
      </Link>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
        <img src="https://lh3.googleusercontent.com/proxy/NwOnzxmz1QG5WmJ2OqWDTVdtLNtIXtoQlZ8Zz_lWSvpd4U0NtxWLYATuvdIcF9KFQC-48R9QX9IXnz7T8vmRmfHphn446JsHvV3LhkL8R3Ti9MP9ZuTtDezp" alt="" />

        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
        <img src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg" alt="" />

        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
         <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png" alt="" />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <h3>Card 5</h3>
          <p>This is another responsive and stylish card.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <h3>Card 6</h3>
          <p>This is yet another responsive and stylish card.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
