import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <Footer />
      </div>
    );
  }
}
