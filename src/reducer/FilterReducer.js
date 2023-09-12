
export const FilterReducer = (state, action) => {
   


    const { type, payload } = action;
    switch (type) {
        case "PRODUCT_LIST":
            return { ...state, productList: payload.products };

        case "ONLY_IN_STOCK":
            return { ...state, onlyInStock: payload.onlyInStock };

        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.bestSellerOnly };
            
        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy };

        case "RATINGS":
            return { ...state, ratings: payload.ratings };

        case "CLEAR_FILTER":
            return {
                ...state,
                onlyInStock: false,
                bsetSellerOnly: false,
                sortBy: null,
                ratings: null,
            };

        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

            

// Compare this snippet from e-com/src/pages/ProductList.js: