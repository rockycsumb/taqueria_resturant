import React, {useEffect, useState} from 'react';
import {Button} from '../ButtonElement';
import MenuDisplay from './MenuDisplay';
import axios from 'axios';

import './menudisplay.css';

import { 
	MenuContainer,
	MenuWrapper,
	MenuRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
	IconContainer,
	Icon,
	MenuItemButton,
	MenuLoading
} from './MenuElements';

const Menu = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2
}) =>{
	
	const[displayInfo, setDisplayInfo] = useState([])
	const[fullMenu, setFullMenu] = useState([]);
	
	const[menuItemSelect, setMenuItemSelect] = useState("Lunch");
	const[switching, setSwitching] = useState(false);
	
	
	
	useEffect(()=>{
		const getMenuData = async () => {
			await axios.get('https://taqueria-resturant-strapi.herokuapp.com/menus')
			.then(response => response)
			.then(data => {
				setFullMenu(data.data);
				setDisplayInfo(data.data);
			})
		}
		
		getMenuData();
		
	},[]);
	
	let menuItem = [
		"Lunch",
		"Tacos",
		"Catering"
	]
	
	let menuItemInfo = {
		Lunch: fullMenu,
		Tacos: fullMenu,
		Catering: fullMenu
	}
	
	const handleClick = e =>{
		e.preventDefault();
		
		setSwitching(true);
		setTimeout(()=>{
			setSwitching(false)
		}, 1000);
		
		setMenuItemSelect(e.target.value);
		setDisplayInfo(menuItemInfo[e.target.value]);
	}
	
	return (
		<>
			<MenuContainer lightBg={lightBg} id={id}>
				<MenuWrapper>
					<MenuRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>  
								<BtnWrap>
									<Button 
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1: 0}
									>
										{buttonLabel}</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<TextWrapper>
								<TopLine>Menu</TopLine>
								<Heading lightText={lightText}>{menuItemSelect}</Heading>
								
								{
									menuItem.map(item =>(
										<MenuItemButton 
											onClick={e => handleClick(e)} 
											value={item}
											disabled={switching}
											>
											{item}
										</MenuItemButton>
									))
								}
								
								{switching || displayInfo.length < 1 ? (
									<>
										
										<IconContainer>
											<Icon className="shaking"/>
										</IconContainer>
									<MenuLoading>
											<Subtitle darkText={darkText}>Loading...</Subtitle>
										</MenuLoading>
									
									</>
										
									):(
									<MenuDisplay info={displayInfo} />
								)}
								
							</TextWrapper>
						</Column2>
					</MenuRow>
				</MenuWrapper>
			</MenuContainer>
		</>
	)
}

export default Menu;