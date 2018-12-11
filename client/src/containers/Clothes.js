import React, { Component } from 'react';
import Aux from '../components/hoc/Auxiliary/Auxiliary';
import Modal from '../components/UI/Modal/Modal';
import Clothing from '../components/Content/Clothing/Clothing';
import ModalData from '../components/Content/ModalData/ModalData';
import Cart from '../components/Content/Cart/Cart';
import './Clothes.css';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from '../axios-order';
import withErrorHandler from '../components/hoc/withErrorHandler/withErrorHandler';
import { TransitionGroup } from 'react-transition-group';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Navigation/Footer/Footer';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import PropTypes from 'prop-types';

class Clothes extends Component {

    //when the page loads set all of the clothes
    componentDidMount() {
        this.props.getProducts().then(() => {
            this.setState({ searchedClothes: [...this.props.product.products].sort((a, b) => (a.price > b.price ? 1 : -1)) });
            setTimeout(() => { this.setState({ appear: true }) }, 500);
        })
    }


    //all of the states
    state = {
        appear: false,
        disappear: false,
        itemModalToggle: false,
        purchasable: true,
        itemsInCart: [],
        currentItemId: null,
        cartToggle: false,
        loading: false,
        search: '',
        searchedClothes: [{
            title: "",
            stock: 0,
            brand: "",
            price: 0,
            size:[],


        }],
        prevSearch: [],
        showSideDrawer: false,
        category: 'all'
    }
    //add item to the cart 
    addToCart = (item, sml) => {
        let newItem = { ...item };
        newItem.size = [...item.sizes][sml];
        let tempItemList = [...this.state.itemsInCart];
        tempItemList.push(newItem);
        this.setState({
            itemsInCart: tempItemList
        }, () => {
            this.itemCancelHandler();
        })
    }

    //remove item from cart
    removeFromCart = (item) => {
        let tempItemList = [...this.state.itemsInCart];
        tempItemList.splice(item, 1);
        this.setState({
            itemsInCart: tempItemList
        })

    }
    //shows the item modal
    itemHandler = (id) => {
        this.setState({
            currentItemId: id,
            itemModalToggle: true
        });
        this.cartClosed();

    }
    //hides the item modal
    itemCancelHandler = () => {
        this.setState({ itemModalToggle: false })
    }
    //sends the user data info to server
    itemContinueHandler = (totalPrice) => {
        this.setState({ loading: true });
        const order = {
            items: this.state.itemsInCart,
            price: parseFloat(totalPrice),
            customer: {
                name: "Logan Sotelo",
                address: {
                    street: '7042 Falcon Talon Lane',
                    zipcode: "46254"
                },
                email: 'logasot@gmail.com'
            }
        }
        axios.post('/orders.json', order)
            .then(
                this.setState({ loading: false })
            )
            .catch(
                this.setState({ loading: false })
            );
        this.cartClosed();

    }
    //shows cart modal
    cartOpen = () => {
        this.setState({ cartToggle: true })
    }
    //hides cart modal
    cartClosed = () => {
        this.setState({ cartToggle: false })
    }
    //updates search value
    updateSearch = (event) => {


        this.setState({ search: event.target.value.substr(0, 20) }, () => this.searchClothes());
    }
    //runs the search
    searchClothes = () => {
        let filteredClothes = [...this.props.product.products].sort((a, b) => (a.price > b.price ? 1 : -1));
        let newClothes = filteredClothes.filter(
            (clothing) => {
                if (clothing.category.toLocaleLowerCase() === this.state.category || this.state.category === 'all') {
                    if (clothing.title.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
                        || clothing.category.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
                        || clothing.brand.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
                    ) {
                        return clothing;
                    }
                }
                return '';
            }
        )

        if (JSON.stringify(newClothes) !== JSON.stringify(this.state.prevSearch)) {
            this.setState({ appear: false, disappear: true, searchedClothes: [], prevSearch: newClothes }, () => {
                this.setState({ disappear: false, searchedClothes: newClothes }, () => {
                    this.setState({ appear: true })
                });
            });
        } else if (JSON.stringify(newClothes) === JSON.stringify(this.state.prevSearch)) {
            return;
        }
    }
    //closes side drawer
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    //opens side drawer
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    //displays products by category
    showProducts = (category) => {
        this.setState({ category: category }, () => {
            this.searchClothes();
        })

    }

    render() {
        return (
            <Aux>
                <SideDrawer
                    showProducts={this.showProducts}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <Navbar cartOpen={this.cartOpen} click={this.sideDrawerOpenHandler} />
                <div className={"SearchContainer"}>

                    <input className={"Search"} value={this.state.search} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            this.searchClothes();
                        }
                    }} onChange={this.updateSearch} type={"text"} placeholder={"Search"} />
                    <span onClick={this.searchClothes} className={"SearchButton"}>Find</span>

                </div>

                {this.state.category !== ' ' ? <div className={"CategoryTitle"}>
                    <h3>{this.state.category.charAt(0).toUpperCase() + this.state.category.slice(1)}</h3>
                </div> : null}

                {this.state.loading ? <Spinner /> : null}
                <div className={"ClothingWrapper"}>
                    <TransitionGroup component={null}>
                        <Clothing appear={this.state.appear} disappear={this.state.disappear} className={"Content"} clothes={[...this.state.searchedClothes]} click={this.itemHandler} />
                    </TransitionGroup>
                </div>



                <Modal className={"ProductModal"} show={this.state.itemModalToggle} modalClosed={this.itemCancelHandler}>
                    <ModalData itemId={this.state.currentItemId} addToCart={this.addToCart} cancel={this.itemCancelHandler} items={[...this.props.product.products]} />
                </Modal>
                <Modal nameClass={"CartModal"} show={this.state.cartToggle} modalClosed={this.cartClosed}>
                    <Cart totalPrice={this.state.totalPrice} remove={this.removeFromCart} cancel={this.cartClosed} continue={this.itemContinueHandler} click={this.itemHandler} items={this.state.itemsInCart} />
                </Modal>

                <Footer></Footer>
            </Aux>
        )
    }
}
Clothes.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.product
})

export default connect(mapStateToProps, { getProducts })(withErrorHandler(Clothes, axios));