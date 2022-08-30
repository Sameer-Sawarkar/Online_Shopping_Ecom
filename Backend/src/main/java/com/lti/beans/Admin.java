package com.lti.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="admins")
public class Admin {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE , generator="ADMINSEQ")
	@SequenceGenerator(name="ADMINSEQ", sequenceName="adminseq",allocationSize=1)
	@Column(name="ADMIN_ID")
	private int admin_id;
	
	@Column(name="NAME", length = 20)
	private String name;
	
	@Column(name="EMAIL",length= 20)
	private String email;

	
	@Column(name="PASSWORD",length= 40)
	private String password;


	public int getAdmin_id() {
		return admin_id;
	}


	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Admin(int admin_id, String name, String email, String password) {
		super();
		this.admin_id = admin_id;
		this.name = name;
		this.email = email;
		this.password = password;
	}


	public Admin() {
		super();
	}


	@Override
	public String toString() {
		return "Admin [admin_id=" + admin_id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}

	
	
	
	
}
