export const groupingCartItems = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    //return new array if new cartItemToAdd is found inside cartItems array
    return cartItems.map((cartItem) =>
      //jika ada cart yang sama
      cartItem.id === cartItemToAdd.id
        ? //we create new object with other cartItem and quantity +1
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : //if not we just return the original object
          cartItem
    );
  }
  //if not found in cartItems we just return new array with all existing cart item and new object with all cartItemToAdd properties plus quantity set to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
