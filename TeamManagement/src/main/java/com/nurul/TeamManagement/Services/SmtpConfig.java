package com.nurul.TeamManagement.Services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SmtpConfig {

	@Value("${smtp.enable}")
	private Boolean smtpEnable;
	
	private String smtpHost;
	private Long smtpPort;
	private Boolean smtpAuth;
	private String smtpUserNm;
	private String smtpFromEmail;
	private String smtpPswd;
	private String smtpProtocol;
	private Long smtpConnTimeOut;
	private Long smtpTimeout;
	private Boolean smtpTlsEnable;
	private Long smtpSocketFacPort;
	private String smtpSocketFacClass;
	private Boolean smtpSocketFactoryFallbk;
	
	
	public Boolean getSmtpEnable() {
		return smtpEnable;
	}
	public void setSmtpEnable(Boolean smtpEnable) {
		this.smtpEnable = smtpEnable;
	}
	public String getSmtpHost() {
		return smtpHost;
	}
	public void setSmtpHost(String smtpHost) {
		this.smtpHost = smtpHost;
	}
	public Long getSmtpPort() {
		return smtpPort;
	}
	public void setSmtpPort(Long smtpPort) {
		this.smtpPort = smtpPort;
	}
	public Boolean getSmtpAuth() {
		return smtpAuth;
	}
	public void setSmtpAuth(Boolean smtpAuth) {
		this.smtpAuth = smtpAuth;
	}
	public String getSmtpUserNm() {
		return smtpUserNm;
	}
	public void setSmtpUserNm(String smtpUserNm) {
		this.smtpUserNm = smtpUserNm;
	}
	public String getSmtpProtocol() {
		return smtpProtocol;
	}
	public void setSmtpProtocol(String smtpProtocol) {
		this.smtpProtocol = smtpProtocol;
	}
	public Long getSmtpConnTimeOut() {
		return smtpConnTimeOut;
	}
	public void setSmtpConnTimeOut(Long smtpConnTimeOut) {
		this.smtpConnTimeOut = smtpConnTimeOut;
	}
	public Long getSmtpTimeout() {
		return smtpTimeout;
	}
	public void setSmtpTimeout(Long smtpTimeout) {
		this.smtpTimeout = smtpTimeout;
	}
	public Boolean getSmtpTlsEnable() {
		return smtpTlsEnable;
	}
	public void setSmtpTlsEnable(Boolean smtpTlsEnable) {
		this.smtpTlsEnable = smtpTlsEnable;
	}
	public Long getSmtpSocketFacPort() {
		return smtpSocketFacPort;
	}
	public void setSmtpSocketFacPort(Long smtpSocketFacPort) {
		this.smtpSocketFacPort = smtpSocketFacPort;
	}
	public String getSmtpSocketFacClass() {
		return smtpSocketFacClass;
	}
	public void setSmtpSocketFacClass(String smtpSocketFacClass) {
		this.smtpSocketFacClass = smtpSocketFacClass;
	}
	public Boolean getSmtpSocketFactoryFallbk() {
		return smtpSocketFactoryFallbk;
	}
	public void setSmtpSocketFactoryFallbk(Boolean smtpSocketFactoryFallbk) {
		this.smtpSocketFactoryFallbk = smtpSocketFactoryFallbk;
	}
	public String getSmtpPswd() {
		return smtpPswd;
	}
	public void setSmtpPswd(String smtpPswd) {
		this.smtpPswd = smtpPswd;
	}
	
	public String getSmtpFromEmail() {
		return smtpFromEmail;
	}
	public void setSmtpFromEmail(String smtpFromEmail) {
		this.smtpFromEmail = smtpFromEmail;
	}
	@Override
	public String toString() {
		return "SmtpConfig [smtpEnable=" + smtpEnable + ", smtpHost=" + smtpHost + ", smtpPort=" + smtpPort
				+ ", smtpAuth=" + smtpAuth + ", smtpUserNm=" + smtpUserNm + ", smtpPswd=" + smtpPswd + ", smtpProtocol="
				+ smtpProtocol + ", smtpConnTimeOut=" + smtpConnTimeOut + ", smtpTimeout=" + smtpTimeout
				+ ", smtpTlsEnable=" + smtpTlsEnable + ", smtpSocketFacPort=" + smtpSocketFacPort
				+ ", smtpSocketFacClass=" + smtpSocketFacClass + ", smtpSocketFactoryFallbk=" + smtpSocketFactoryFallbk
				+ ", smtpFromEmail=" + smtpFromEmail+"]";
	}
	
	
	
}
