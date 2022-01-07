import React from 'react';
import styled from 'styled-components';
import { Flex, fs, colors } from '../styles/variables';

const LastActivityWrapper = styled.section`
	margin-top: 80px;
	.title-wrapper{
		justify-content: space-between;
		.left{
			.update-status{
				color: #6F767E;
				font-size: 16px;
				font-weight: 700;
			}
		}
		.edit-btn{
			font-size: ${fs.md};
			position: relative;
			bottom: -15px;
			left: -50px;
			text-decoration: underline;
		}
		.right{
			.tile{
				width: 50px;
				height: 50px;
				margin: 0 auto;
				border-radius: 10px;
				background: ${colors.darkGray};
				&.add{
					font-size: 26px;
					background: ${colors.coinCardColor};
					color: ${colors.white};
					margin-left: 10px;
				}
			}
		}
	}
	.row{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}
`

const Title = styled.p`
	font-size: 30px;
	font-weight: 700;
`

const Tile = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	margin-right: 15px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	background: ${props => props.backgroundColor};
	svg{
		path{
			fill: ${props => props.svgColor}
		}
	}
`

const Column = styled.div`
	margin-right: 45px;
	&:first-child{
		margin-right: 0;
	}
	.col-title{
		font-weight: 400;
		margin-bottom: 2px;
		font-size: ${fs.md};
	}
	.col-sub-title{
		font-size: 14px;
		color: #6F767E;
	}
`

const LastActivity = () => {
	return (
		<LastActivityWrapper>
			<Flex className="title-wrapper">
				<div className="left">
					<Title>Latest Activity</Title>
					<p className="update-status">Updated 12 minutes ago</p>
				</div>

				<button className="edit-btn">edit</button>

				<Flex verticalCenter className="right">
					<Flex verticalCenter className="tile">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M19.992 8.5C19.4943 8.45114 19.0191 8.26799 18.6174 7.97013C18.2156 7.67227 17.9023 7.27088 17.7109 6.80882C17.5195 6.34676 17.4572 5.84139 17.5307 5.34668C17.6042 4.85197 17.8106 4.38651 18.128 4L18.14 3.985L17.07 2.93L16.01 1.87H16.005C15.5178 2.27581 14.9041 2.49865 14.27 2.5C13.5825 2.5028 12.9188 2.24903 12.4085 1.78834C11.8983 1.32764 11.5782 0.693165 11.511 0.00900006V0H8.5V0.0079999C8.43322 0.692605 8.1132 1.3276 7.60266 1.78857C7.09212 2.24953 6.42785 2.50325 5.74 2.5C5.10446 2.5003 4.48886 2.27811 4 1.872L3.99 1.86L2.93 2.93L1.87 3.99L1.881 4C2.19842 4.38658 2.40487 4.85212 2.47828 5.34691C2.55169 5.84169 2.48931 6.34712 2.2978 6.80921C2.10629 7.2713 1.79285 7.67268 1.39096 7.97048C0.989065 8.26827 0.513823 8.4513 0.016 8.5H0V11.51H0.00900006C0.505037 11.5599 0.978306 11.7432 1.37857 12.0404C1.77884 12.3376 2.09117 12.7376 2.2824 13.198C2.47364 13.6584 2.53665 14.162 2.46475 14.6554C2.39284 15.1487 2.1887 15.6133 1.874 16V16.005L2.934 17.065L3.994 18.135L4 18.128C4.48882 17.7218 5.10444 17.4996 5.74 17.5C6.42785 17.4967 7.09212 17.7505 7.60266 18.2114C8.1132 18.6724 8.43322 19.3074 8.5 19.992V20H11.51V19.991C11.577 19.3066 11.8971 18.6718 12.4077 18.2111C12.9182 17.7503 13.5823 17.4967 14.27 17.5C14.9037 17.5006 15.5173 17.7223 16.005 18.127H16.01L17.07 17.067L18.14 16.007C17.8235 15.6207 17.6177 15.1559 17.5445 14.6619C17.4713 14.1679 17.5335 13.6634 17.7243 13.2019C17.9152 12.7405 18.2276 12.3394 18.6284 12.0415C19.0291 11.7436 19.5031 11.5599 20 11.51V8.5H19.992ZM18.5 10.382C17.5218 10.8303 16.7492 11.6319 16.3373 12.626C15.9254 13.6201 15.9046 14.7332 16.279 15.742L16.01 16.009L15.752 16.267C15.2782 16.0891 14.7761 15.9986 14.27 16C13.4493 15.9971 12.6452 16.2315 11.9547 16.6751C11.2642 17.1186 10.7166 17.7524 10.378 18.5H9.633C9.29401 17.7525 8.74622 17.1188 8.05557 16.6753C7.36491 16.2318 6.5608 15.9973 5.74 16C5.23122 15.999 4.72656 16.0912 4.251 16.272L3.99 16.009L3.728 15.747C4.10449 14.7365 4.08394 13.6209 3.67049 12.6249C3.25705 11.629 2.48144 10.8268 1.5 10.38V9.634C2.48608 9.18799 3.26544 8.38339 3.6798 7.3836C4.09417 6.38382 4.11247 5.26379 3.731 4.251L4 3.986L4.255 3.728C4.72941 3.90798 5.2326 4.00015 5.74 4C6.56069 4.00279 7.36468 3.7683 8.05519 3.32476C8.7457 2.88122 9.29328 2.24753 9.632 1.5H10.377C10.7159 2.24761 11.2637 2.88133 11.9543 3.32487C12.645 3.76841 13.4492 4.00286 14.27 4C14.7758 4.00097 15.2776 3.91016 15.751 3.732L16.014 4L16.275 4.259C15.8974 5.26964 15.917 6.38587 16.3299 7.38261C16.7428 8.37935 17.5183 9.18246 18.5 9.63V10.382Z" fill="#6F767E"/>
						</svg>
					</Flex>
					<Flex verticalCenter className="tile add">+</Flex>
				</Flex>
			</Flex>

			{/* last edit table */}
			<div className="row">
				<Tile backgroundColor="rgba(26, 85, 175, 0.1)" svgColor="#1A55AF">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
						<path d="M15.8976 9.77411C15.7562 9.52768 15.4894 9.37499 15.1999 9.37499H9.6695L10.3973 0.8463C10.4277 0.48927 10.2055 0.157825 9.8582 0.0422493C9.5125 -0.0741079 9.12775 0.0560188 8.9285 0.356995L0.128582 13.6381C-0.0308186 13.8784 -0.0429186 14.1846 0.0973317 14.436C0.237582 14.6874 0.507082 14.8437 0.800033 14.8437H6.33594L5.60234 24.1588C5.57384 24.5189 5.80194 24.8512 6.15389 24.9622C6.23514 24.9877 6.31794 25 6.39999 25C6.67265 25 6.93435 24.8631 7.0828 24.6262L15.8827 10.5638C16.0335 10.3227 16.0394 10.0205 15.8976 9.77411ZM7.45275 21.038L7.99765 14.1225C8.01485 13.9054 7.9383 13.6914 7.7871 13.5315C7.63555 13.3721 7.42265 13.2812 7.2 13.2812H2.27074L8.5375 3.8229L8.00275 10.0915C7.9844 10.3094 8.0598 10.5244 8.21135 10.6854C8.3629 10.846 8.57615 10.9375 8.8 10.9375H13.7734L7.45275 21.038Z" fill="#FA5F1C"/>
					</svg>
				</Tile>

				<Column className="col">
					<p className="col-title">Insurance</p>
					<p className="col-sub-title">Property Coverage</p>
				</Column>
				<Column className="col">
					<p className="col-title">LTC Wallet</p>
					<p className="col-sub-title">Personal account</p>
				</Column>
				<Column className="col">
					<p className="col-title">7 Jun, 21</p>
					<p className="col-sub-title">Last payment</p>
				</Column>
				<Column className="col">
					<p className="col-title">-10.24 LTC</p>
					<p className="col-sub-title">Balance</p>
				</Column>
			</div>

			<div className="row">
				<Tile backgroundColor="rgba(250, 95,	28, 0.1)" svgColor="#FA5F1C">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
						<path d="M15.8976 9.77411C15.7562 9.52768 15.4894 9.37499 15.1999 9.37499H9.6695L10.3973 0.8463C10.4277 0.48927 10.2055 0.157825 9.8582 0.0422493C9.5125 -0.0741079 9.12775 0.0560188 8.9285 0.356995L0.128582 13.6381C-0.0308186 13.8784 -0.0429186 14.1846 0.0973317 14.436C0.237582 14.6874 0.507082 14.8437 0.800033 14.8437H6.33594L5.60234 24.1588C5.57384 24.5189 5.80194 24.8512 6.15389 24.9622C6.23514 24.9877 6.31794 25 6.39999 25C6.67265 25 6.93435 24.8631 7.0828 24.6262L15.8827 10.5638C16.0335 10.3227 16.0394 10.0205 15.8976 9.77411ZM7.45275 21.038L7.99765 14.1225C8.01485 13.9054 7.9383 13.6914 7.7871 13.5315C7.63555 13.3721 7.42265 13.2812 7.2 13.2812H2.27074L8.5375 3.8229L8.00275 10.0915C7.9844 10.3094 8.0598 10.5244 8.21135 10.6854C8.3629 10.846 8.57615 10.9375 8.8 10.9375H13.7734L7.45275 21.038Z" fill="#FA5F1C"/>
					</svg>
				</Tile>

				<Column className="col">
					<p className="col-title">Insurance</p>
					<p className="col-sub-title">Property Coverage</p>
				</Column>
				<Column className="col">
					<p className="col-title">LTC Wallet</p>
					<p className="col-sub-title">Personal account</p>
				</Column>
				<Column className="col">
					<p className="col-title">7 Jun, 21</p>
					<p className="col-sub-title">Last payment</p>
				</Column>
				<Column className="col">
					<p className="col-title">-10.24 LTC</p>
					<p className="col-sub-title">Balance</p>
				</Column>
			</div>


		</LastActivityWrapper>
	);
}
 
export default LastActivity;