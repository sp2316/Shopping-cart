import React from 'react';

class CartItem extends React.Component{


    increaseQuantity= ()=>{   //Arrow functions automatically bind this with the object instance
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        });
    }

    decreaseQuantity= ()=>{
        const {qty} =this.state;
        if(qty==0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        
        });
    }
    render(){
        console.log('this.props',this.props);
        const { price,title,qty}=this.props.product; //object destructuring
        return(
 
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.images}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1616661617~hmac=44007b9e8a2756153154fe3f2575c892"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1616661694~hmac=becce75e4de3a39691944b3fbc981468"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1616661668~hmac=c3ddc887fd748acc39d3c26650c50a9d"
                        />

                    </div>

                </div>
            </div>
        );
    }
}

const styles={
    images:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
};

export default CartItem;