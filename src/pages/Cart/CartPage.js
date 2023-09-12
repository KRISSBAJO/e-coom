
import { CartList } from '../../pages/Cart/components/CartList';
import { CartEmpty } from '../../pages/Cart/components/CartEmpty';
import { useCart } from '../../context';
import { useTitle } from '../../hooks/useTitle';

export const CartPage = () => {
    const { cartList } = useCart();
    useTitle(`Cart Page (${cartList.length})`);

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-200">Cart Page</h1>
            {cartList.length  ? <CartList /> : <CartEmpty /> }
        </main>
    );
}
