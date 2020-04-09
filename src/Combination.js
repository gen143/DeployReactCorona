
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import App from './App.js';
import NewsApp from './NewsApp.js';
import Footer from './Footer.js';
import ErrorBoundary from './ErrorBoundary.js';
import './combo.css';

export default function Combination(){
  return(
    <div className="perfect">
        <ErrorBoundary>
          <App />
        </ErrorBoundary>

        <ErrorBoundary>
          <NewsApp />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
    </div>
  );
}
