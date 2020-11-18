import React, {useEffect} from 'react';
import './menudisplay.css';

import {
	MenuDisplayContainer,
	MenuList,
	MenuItem,
	MenuPrice,
	MenuDescription
} from './MenuElements';

const MenuDisplay = ({info}) =>{
	return ( 
		
		<MenuDisplayContainer>
				{info.map(item =>(
				<MenuList>
					<MenuItem>
						{item.menu_item_title}
						<MenuDescription>
							{item.menu_item_description}
						</MenuDescription>
					</MenuItem>
					
					<MenuPrice>
						${item.menu_item_price}
					</MenuPrice>
				</MenuList>	
				))}
		</MenuDisplayContainer>
	)
}
	
	


export default MenuDisplay;