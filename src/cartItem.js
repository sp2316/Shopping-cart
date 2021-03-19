import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }

    increaseQuantity= ()=>{   //Arrow functions automatically bind this with the object instance
        console.log(this.state);
    }
    render(){
        const { price,title,qty}=this.state; //object destructuring
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
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828925.svg?token=exp=1616153764~hmac=9f79bdd355c043f1d19866f8febd8e80"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"

                        />
                        <img 
                        alt="delete" cl
                        assName="action-icons" sr
                        c="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1616153730~hmac=8652030389c7d736ccb1039d6bd099e5"

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