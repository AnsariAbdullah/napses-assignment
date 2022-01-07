import React from 'react';
import styled from 'styled-components';
import { fs, colors, Flex } from '../styles/variables';
import ProImage from '../assets/rectangle.png';

const NavWarpper = styled.nav`
	background: ${colors.gray};
	width: 280px;
	height: 100%;
	padding: 35px 60px;
	text-align: center;
	.title{
		color: ${colors.dark};
		font-size: 40px;
		margin-bottom: 40px;
		text-transform: uppercase;
	}
	.grid-menu{
		display: grid;
		grid-gap: 40px;
		grid-template-columns: 1fr 1fr;
		.grid-items{
			cursor: pointer;
			.tile{
				width: 50px;
				height: 50px;
				margin: 0 auto;
				border-radius: 10px;
				background: ${colors.darkGray};
			}
			.name{
				color: #7987A5;
				font-size: ${fs.sm};
				margin-top: 10px;
			}
		}
	}
	.get-pro{
		background: #CFC8FF;
		padding: 15px 5px;
		border-radius: 10px;
		margin-top: 40px;
		.img-wrapper{
			img{
				width: 100%;
			}
		}
		.gpro-cta{
			width: 130px;
			padding: 15px 0;
			color: #5F75EE;
			font-size: 11px;
			border: none;
			border-radius: 10px;
			background: ${colors.white};
			text-transform: capitalize;
		}
	}
	@media (max-width: 768px) {
    display: none;
  }
`

const NavBar = () => {
	const arrayVal = [
		"Dashoboard",
		"Calculator",
		"Wallets",
		"Savings",
		"Currencies",
		"Expanses",
		"Upcoming",
		"Food",
		"Health",
		"Account"
	]
	return (
		<NavWarpper>
			<h1 className="title">Napses</h1>
			<div className="grid-menu">
				{
					arrayVal.map((item, index) => 
						<div key={index} className="grid-items">
							<Flex verticalCenter className="tile">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path d="M1.60845 17.603H17.022V13.9834H7.09802L8.64892 10.3637H15.2122V6.74407H10.2007L12.159 2.17444L8.83185 0.748138L6.26248 6.74407H0.733582V10.3637H4.71069L1.60845 17.603Z" fill="#565656"/>
								</svg>
							</Flex>
							<p className="name">{item}</p>
						</div>	
					)
				}
			</div>

			<div className="get-pro">
				<div className="img-wrapper">
					<img src={ProImage} alt="get pro" />
				</div>
				<button className="gpro-cta">
					Get pro now
				</button>
			</div>

		</NavWarpper>
	);
}
 
export default NavBar;