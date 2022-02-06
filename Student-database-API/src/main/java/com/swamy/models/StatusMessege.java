package com.swamy.models;

import org.springframework.stereotype.Component;

@Component
public class StatusMessege {
	private String messege;
	private String tokenId;
	public StatusMessege(String messege, String tokenId) {
		super();
		this.messege = messege;
		this.tokenId = tokenId;
	}
	public StatusMessege() {
		super();
	}
	public String getMessege() {
		return messege;
	}
	public void setMessege(String messege) {
		this.messege = messege;
	}
	public String getTokenId() {
		return tokenId;
	}
	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}

	

}
