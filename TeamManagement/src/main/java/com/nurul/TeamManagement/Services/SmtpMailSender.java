package com.nurul.TeamManagement.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.*;
import jakarta.mail.internet.MimeMessage;


@Component
public class SmtpMailSender {

	@Qualifier("javaMailSender")
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private MailConfig mailConfig;

	@Autowired
	private SmtpConfig smtpConfig;
	
	public void sendOtpEmail(String email, String otp) throws MessagingException {

		boolean mailEnableFlag = smtpConfig.getSmtpEnable().booleanValue();
		System.out.println("SMTP Config "+mailEnableFlag);
		String fromEmail = "nurulemsindia@gmail.com";
		
		if (mailEnableFlag) {
			
			MimeMessage message = javaMailSender.createMimeMessage();
			MimeMessageHelper helper;

			helper = new MimeMessageHelper(message, true);
			helper.setSubject("Email Validation: One Time Password");
			helper.setFrom(fromEmail);
			helper.setTo(email);
			helper.setText("Hello,\n"
					+ "\n"
					+ "Welcom to EMS Please Validate your Email.\n"
					+ "\n"
					+ "Please us the following One Time Password for validate Account.\n"
					+ "\n"
					+ "One Time Password: "+ otp + "\n"
					+ "\n"
					+ "Thanks & regards,\n"
					+ "EMSindia", false);

			javaMailSender.send(message);
		}

	}

}
