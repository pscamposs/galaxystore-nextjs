"use client";
import CartItem from "@/components/cart/CartItem";
import useCart from "@/hooks/useCart";
import { Plugin } from "@/types/FilterTypes";
import { centsToReal } from "@/utils/FormatUtils";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const CartBody = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CartSection = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: var(--secondary-dark);
  padding: 2rem;

  h2 {
    padding: 12px 0;
    margin: 12px 0;
    border-bottom: 1px solid #fff;
  }
`;

const NoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: gray;
  p {
    text-align: center;

    font-size: 3rem;
  }
`;

const CartCheckout = styled.div`
  button {
    margin-top: 12px;
    padding: 1rem;
    width: 100%;
    max-height: 200px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: var(--primary-dark);
      color: #f2f2f2;
    }
  }

  line-height: 150%;

  h4 {
    font-weight: 400;
  }
`;

const CartItems = styled.table`
  width: 100%;
`;

const CartContainer = styled.div`
  overflow-y: auto;
  height: 250px;
`;

export default function Cart() {
  const router = useRouter();

  const { data: session } = useSession();

  const { plugins, subTotalPrice, totalPrice, discountPrice, clearCart } =
    useCart();

  const handleCheckout = async () => {
    const response = await fetch(`${process.env.API_URL}/api/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        cart: plugins.map((plugin) => plugin._id),
      }),
    });

    const json = await response.json();
    if (json.url) {
      router.push(json.url);
      clearCart();
    }
  };

  return (
    <div>
      <CartBody>
        <CartSection>
          <h2>Itens do Carrinho</h2>

          {plugins.length > 0 ? (
            <>
              <CartContainer>
                <CartItems>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {plugins.map((plugin: Plugin) => (
                      <CartItem key={plugin._id} plugin={plugin} />
                    ))}
                  </tbody>
                </CartItems>
              </CartContainer>
              <h2>Seu pedido</h2>
              <CartCheckout>
                <div>
                  <h4>Total: {centsToReal(totalPrice())}</h4>
                  <h4>Desconto: {centsToReal(discountPrice())}</h4>
                  <h3>SubTotal: {centsToReal(subTotalPrice())}</h3>
                </div>
                <div>
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
              </CartCheckout>
            </>
          ) : (
            <NoItems>
              <FontAwesomeIcon icon={faBorderNone} size="7x" />
              <p>Não há itens</p>
            </NoItems>
          )}
        </CartSection>
      </CartBody>
    </div>
  );
}
