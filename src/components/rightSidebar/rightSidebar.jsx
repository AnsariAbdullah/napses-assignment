import React from 'react';
import styled from 'styled-components';
import { fs, colors } from '../styles/variables';
import PaymentCards from '../paymentCards';
import Wallet from '../wallet';

const RightSidebarWrapper = styled.div`
	background: ${colors.gray};
	width: 440px;
	height: 100%;
	padding: 34px 50px;
	text-align: center;
	.payments{
		.payment-title-wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 35px;
			.pay-title{
				font-size: ${fs.xl};
				font-weight: 700;
			}
			.clear-payment{
				font-size: 16px;
				padding: 15px 35px;
				cursor: pointer;
			}
		}
	}
`

const AddTransfer = styled.div`
	padding: 5px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	margin: 20px 0 60px;
	justify-content: space-between;
	background: rgba(81, 69, 158, 0.2);
	.cta{
		width: 40px;
		height: 40px;
		color: ${colors.primarySelect};
		border-radius: 10px;
		background: ${colors.white};
		display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-weight: bold;
		box-shadow: 0px 2px 27px rgba(0, 0, 0, 0.06);
	}
	.add{
		color: ${colors.primarySelect};
		font-size: ${fs.sm};
	}
`

const RightSidebar = () => {
	return (
		<RightSidebarWrapper>
			<div className="payments">
				<div className="payment-title-wrapper">
					<p className="pay-title">Payments</p>
					<button className="clear-payment">
						Clear
					</button>
				</div>

				<PaymentCards />

				<AddTransfer>
					<div className="cta">+</div>
					<p className="add">New Transfer</p>
					<div className="space"></div>
				</AddTransfer>

				<Wallet />

			</div>

		</RightSidebarWrapper>
	);
}
 
export default RightSidebar;