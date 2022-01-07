import React from 'react';
import styled from 'styled-components';
import { fs, colors } from '../styles/variables';

const PaymentCard = styled.div`
	width: 100%;
	padding: 15px;
	height: 118px;
	position: relative;
	margin-bottom: 10px;
	border-radius: 10px;
	transition: 0.3s ease;
	border: 1px solid #E4EAF2;
	background: ${colors.white};
	&:hover{
		box-shadow: 0px 21px 79px rgba(0, 0, 0, 0.08);
		border: none;
	}
	.details{
		display: flex;
    align-items: center;
    justify-content: space-between;
		.left{
			display: flex;
    	align-items: center;
			.currency-symbol{
				width: 35px;
				height: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				&.orange{
					background: #F9896B;
				}
				&.green{
					background: #2FE6C8;
				}
			}
			.currency-name{
				font-size: ${fs.sm};
				font-weight: bold;
				color: #0F1231;
				margin-left: 15px;
				.more-icon{
					margin-left: 20px;
				}
			}
		}
		.pill{
			padding: 2px 10px;
			font-size: 14px;
			width: fit-content;
			border-radius: 10px;
			box-shadow: 0px 7px 27px rgba(0, 0, 0, 0.07);
		}
	}
	.dnt{
    bottom: 15px;
		font-size: ${fs.sm};
		text-align: left;
    position: absolute;
	}
`

const PaymentCards = () => {
	return (
		<div className="payment-card-list">
			<PaymentCard className="payment-card">
				<div className="details">
					<div className="left">
						<div className="currency-symbol orange">
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.2368 18H17.6975V14.1344H7.09932L8.75559 10.2688H15.7648V6.40326H10.4128L12.5041 1.52317L8.95095 -3.05176e-05L6.20701 6.40326H0.30249V10.2688H4.5498L1.2368 18Z" fill="white"/>
							</svg>
						</div>
						<p className="currency-name">
							Received LTC
							<span className="more-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
									<path d="M6.13142 6.99021C5.91165 6.99021 5.6919 6.90629 5.52434 6.73881L0.251563 1.46598C-0.0838544 1.13056 -0.0838544 0.586743 0.251563 0.251461C0.586845 -0.0838204 1.13056 -0.0838204 1.466 0.251461L6.13142 4.91715L10.7969 0.251624C11.1323 -0.0836575 11.6759 -0.0836575 12.0112 0.251624C12.3468 0.586906 12.3468 1.13073 12.0112 1.46614L6.73851 6.73898C6.57087 6.90648 6.35112 6.99021 6.13142 6.99021Z" fill="#AFBCCD"/>
								</svg>
							</span>
						</p>
					</div>

					<div className="pill">+ 15.08 USD</div>
				</div>
				<div className="dnt">
					09/28/2020 19:22
				</div>
			</PaymentCard>

			<PaymentCard className="payment-card">
				<div className="details">
					<div className="left">
						<div className="currency-symbol green">
							<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.83975 5.86603L9 1.73205L16.1603 5.86603V14.134L9 18.268L1.83975 14.134V5.86603Z" stroke="white" strokeWidth="3"/>
							</svg>
						</div>
						<p className="currency-name">
							Received LINK
							<span className="more-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
									<path d="M6.13142 6.99021C5.91165 6.99021 5.6919 6.90629 5.52434 6.73881L0.251563 1.46598C-0.0838544 1.13056 -0.0838544 0.586743 0.251563 0.251461C0.586845 -0.0838204 1.13056 -0.0838204 1.466 0.251461L6.13142 4.91715L10.7969 0.251624C11.1323 -0.0836575 11.6759 -0.0836575 12.0112 0.251624C12.3468 0.586906 12.3468 1.13073 12.0112 1.46614L6.73851 6.73898C6.57087 6.90648 6.35112 6.99021 6.13142 6.99021Z" fill="#AFBCCD"/>
								</svg>
							</span>
						</p>
					</div>

					<div className="pill">+ 957.96 USD</div>
				</div>
				<div className="dnt">
					09/28/2020 19:22
				</div>
			</PaymentCard>
		</div>
	);
}
 
export default PaymentCards;