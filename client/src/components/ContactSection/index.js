import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { 
	ContactContainer,
	ContactWrapper,
	ContactRow,
	ContactFormContainer,
	ContactFormRow,
	ContactFormRowItem,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
	ContactMessageContainer,
	SpinnerBorder,
	LoadingMessage,
	Form,
	FormLabel,
	FormInput,
	FormTextArea,
	FormButton
} from './ContactElements';

const Contact = ({
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
	const [sendingMessage, setSendingMessage] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	
	const {
		name,
		email,
		message
	} = formData;
	
	const onChange = e =>
		setFormData({...formData, [e.target.name]: e.target.value});
	
	const onSubmit = e => {
		e.preventDefault();
		
		setSendingMessage(true);
		
		let templateParams = {
			name: name,
			email: email,
			message: message	
		}
			console.log("formData from contact ", formData);
		// var service_id = 'gmail';
		// var template_id = 'resume_form';
		// var user_id = 'user_ziUA20aQdVmniRSrsE8jQ';
		
		// emailjs.send(service_id, template_id, templateParams, user_id);
	
		setFormData({
			name: "",
			email: "",
			message: ""
		});
		
		setTimeout(()=>{
			setTimeout(()=>{
				// console.log("send a message****")
				setSendingMessage(false);
				setMessageSent(false);
			}, 2000);
			setMessageSent(true);
			// console.log("message sent*****")
		}, 2000);
	}
	
	return (
		<>
			<ContactContainer lightBg={lightBg} id={id}>
				<ContactWrapper>
					<ContactRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>  
								
							</TextWrapper>
						</Column1>
						<Column2>
							{sendingMessage && !messageSent ? (
								<ContactMessageContainer>
									<SpinnerBorder>
										<LoadingMessage>
											
										</LoadingMessage>
									</SpinnerBorder>
								</ContactMessageContainer>
									

							) : (

								messageSent ? (
									<ContactMessageContainer>
										<div>
											<h3>Message Sent!</h3>
										</div>
									</ContactMessageContainer>

								) : (
								<ContactFormContainer>
									
									<Form onSubmit={e => onSubmit(e)}>
										<FormLabel htmlFor="fullname">
											Name
										</FormLabel>
										<FormInput 
											type="text"
											id="fullname"
											name="name"
											placeholder="Your Name"
											value={name}
											onChange={e => onChange(e)}
											/>
										
										<FormLabel htmlFor="email">
											Email
										</FormLabel>
										<FormInput
											type="email"
											id="email"
											name="email"
											value={email}
											onChange={e => onChange(e)}
											placeholder="Email"
										/>
										
										<FormLabel htmlFor="message">
											Message
										</FormLabel>
										
										<FormTextArea 
											id="message"
											name="message"
											value={message}
											onChange={e => onChange(e)}
											placeholder="Say something"
											
											/>
										
										<FormButton 
											type="submit"
											>
											Submit
										</FormButton>
									</Form>
										
								</ContactFormContainer>
							))}
						</Column2>
					</ContactRow>
				</ContactWrapper>
			</ContactContainer>
		</>
	)
}

export default Contact;