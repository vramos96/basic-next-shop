import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	const src = product?.images[0]

	return (
		<div className={styles.OrderItem}>
			<figure>
				{
					src &&
					<Image src={src} alt={product?.title} />
				}
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={(styles.pointer, styles['more-clickable-area'])} src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
