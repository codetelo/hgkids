import React,{Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
import './withErrorHandler.css';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state ={
            error: null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(null,error=>{
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = ()=>{
            this.setState({error:null})
        }
        render(){
            return (
            <Aux>
                <Modal
                 show={this.state.error}
                 modalClosed={this.errorConfirmedHandler}
                 >
                    <div className={"ErrorExit"} onClick={this.errorConfirmedHandler}></div>
                    <div className={"ErrorMessage"}> {this.state.error ? <div>This went wrong: <br/><br/>{this.state.error.message }</div>: null}</div>
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
            
        )
        }
        
    }
        
}

export default withErrorHandler;