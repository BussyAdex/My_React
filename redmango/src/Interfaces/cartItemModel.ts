import menuItemModel from "./menuItemModel"

export default interface cartItemModel {
    id?: number
    menuItemid?: number
    menuItem?: menuItemModel
    quantity?: number
}