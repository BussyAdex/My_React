import cartItemsModel from "./cartItemModel";

export default interface shoppingCartModel {
    id?: number
    userId?: string
    cartItems?: cartItemsModel[]
    cartTotal?: number
    stripePaymentIntentId?: any;
    clientSecret?: any;
}