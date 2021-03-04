import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    };

    componentDidMount() {
        window.title = "Staycation | Home";
        window.scrollTo(0,0);
        
        if(!this.props.page.landingPage){
            this.props.fetchPage(`https://nafi-staycation-backend.herokuapp.com/api/v1/member/landing-page`, 'landingPage')
        }
    };

    render() {
        const { page } = this.props;

        return (
            <>
                <Header {...this.props}></Header>
                <Hero 
                    refMostPicked={this.refMostPicked}
                    data={page.hero} 
                />
                <MostPicked 
                    refMostPicked={this.refMostPicked}
                    data={page.mostPicked} 
                />
                <Categories data={page.categories}  />
                <Testimony data={page.testimonial} />
                <Footer />
            </>
        )   
    }
}

const mapStateToProps = (state) => ({
    page: state.page ? state.page.landingPage : null
})

export default connect(mapStateToProps, {fetchPage})(LandingPage)