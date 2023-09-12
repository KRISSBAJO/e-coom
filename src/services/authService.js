
export async function login(authDetail) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authDetail)
    };
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));

        return { 
            success: true, 
            message: "Login Successful" 
        };
    } else {
        return { 
            success: false, 
            message: data.error || "Login Failed" 
        }; 
    }
}

export async function register(authDetail) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authDetail)
    };
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Registration failed.");
        }

        if(data.accessToken) {
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
        }

        return { success: true, data };

    } catch (error) {
        console.error("Error during registration:", error.message);
        return { success: false, message: error.message };
    }
}

export async function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
    return true; // Logging out can just return true as there's no asynchronous operation.
}

async function fetchData(url) {
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to fetch data.");
        }

        return { success: true, data: await response.json() };

    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        return { success: false, message: error.message };
    }
}

export const getProducts = () => fetchData(`${process.env.REACT_APP_HOST}/products`);
export const getCartItems = () => fetchData(`${process.env.REACT_APP_HOST}/cart`);
