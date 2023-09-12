import { toast } from "react-toastify";

function getsession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getUser(){
    const browserData = getsession();
    
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${browserData.token}`
            }
        };

        const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        toast.error(`Error fetching user details: ${err.message}`);
        throw err;
    }
}

export async function createOrder(cartList, total, user) {
    const browserData = getsession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${browserData.token}`
            },
            body: JSON.stringify(order)
        };

        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        toast.error(`Error creating order: ${err.message}`);
        throw err;
    }
}

export async function getUserOrders() {
    const browserData = getsession();

    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${browserData.token}`,
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        toast.error(`Error fetching user orders: ${err.message}`);
        throw err;
    }
}
