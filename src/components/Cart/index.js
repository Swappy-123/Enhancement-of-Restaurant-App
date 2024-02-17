import './index.css'

import CartContext from '../../context/CartContext'
import Header from '../Header'
import EmptyView from '../EmptyView'
import CartItem from '../CartItem'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header restaurantName="UNI Resto Cafe" />
          <div className="cart-container">
            {cartList.length === 0 ? (
              <EmptyView />
            ) : (
              <>
                <div className="cart-header">
                  <h1>My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={onClickRemoveAll}
                  >
                    Remove All
                  </button>
                </div>
                <ul className="unordered-list">
                  {cartList.map(each => (
                    <CartItem key={each.dishId} dish={each} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
