export function AddToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
}

export function AddToCartSucess(product) {
    return {
        type: '@cart/ADD_SUCESS',
        product,
    };
}

export function RemoveFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    };
}

export function UpdateCartRequest(id, amount) {
    return {
        type: '@cart/UPDATE_REQUEST',
        id,
        amount,
    };
}

export function UpdateCartSucess(id, amount) {
    return {
        type: '@cart/UPDATE_SUCESS',
        id,
        amount,
    };
}
