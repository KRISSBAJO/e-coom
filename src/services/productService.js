export async function getProductList() {
    const url = `${process.env.REACT_APP_HOST}/444/products`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch product list. Status: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product list:", error);
        throw error; // Re-throwing the error so it can be handled upstream if needed
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch product with id ${id}. Status: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error; // Re-throwing the error so it can be handled upstream if needed
    }
}

export async function getFeaturedList() {
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);

        if (!response.ok) {
            throw new Error(`Failed to fetch featured products list. Status: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching featured products list:", error);
        throw error; // Re-throwing the error so it can be handled upstream if needed
    }
}


