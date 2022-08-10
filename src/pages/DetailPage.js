import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import {compose} from "redux";

import Header from 'parts/Header'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailTitle from 'parts/PageDetailTitle'
import PageDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import Activities from 'parts/Activities'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import { checkoutBooking } from "store/actions/checkout"
import { fetchPage } from "store/actions/page";

import { withRouter } from 'utils/withRouter'

class DetailPage extends Component {
  componentDidMount(){
    window.title = "Details Page";
    window.scrollTo(0,0);
    
    if (!this.props.page[this.props.params.id]){
      this.props.fetchPage(`/detail-page/${this.props.params.id}`, this.props.params.id);
    }
  }

  render() {
    const { page } = this.props;
  
    const breadcrumb = [
      {pageTitle: "Home", pageHref: "/"},
      {pageTitle: "House Details", pageHref: ""}
    ]

    if (!page[this.props.params.id]) return null;

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[this.props.params.id]} />
        <FeaturedImage data={page[this.props.params.id].imageId} />
        <section className="container">
            <div className="row">
              <div className="col-sm-12 col-md-7 pr-5">
                <Fade bottom>
                  <PageDetailDescription data={page[this.props.params.id]} />
                </Fade>
              </div>
              <div className="col-sm-12 col-md-5">
                <Fade bottom>
                  <BookingForm itemDetails={page[this.props.params.id]}  startBooking={this.props.checkoutBooking} />
                </Fade>
              </div>
            </div>
        </section>
        <Activities data={page[this.props.params.id].activityId}/>
        <Testimony data={page[this.props.params.id].testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default compose( withRouter, connect(mapStateToProps, { checkoutBooking, fetchPage }))( DetailPage );