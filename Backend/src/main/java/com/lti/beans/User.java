package com.lti.beans;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE , generator="USERSEQ")
	@SequenceGenerator(name="USERSEQ", sequenceName="userseq",allocationSize=1)
	@Column(name="ID")
	private int id;
	
	@Column(name="NAME", length = 20)
	private String name;
	
	@Column(name="EMAIL",length= 20)
	private String email;

	@Column(name="PHONE",length= 15)
	private String phone;
	
	@Column(name="PASSWORD",length= 40)
	private String password;
	
	@Column(name="TOKEN",length= 255)
	private String token;
	
	@Column(name="ADDRESS",length= 255)
	private String address;
	
	@Column(name="GENDER",length= 10)
	private String gender;
	
	@Column(name="DOB",length= 15)
	private String dob;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public User(int id, String name, String email, String phone, String password, String token, String address,
			String gender, String dob) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.token = token;
		this.address = address;
		this.gender = gender;
		this.dob = dob;
	}

	public User() {
		super();
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", password=" + password
				+ ", token=" + token + ", address=" + address + ", gender=" + gender + ", dob=" + dob + "]";
	}

//	@Column(name="CREATEDAT")
//	private LocalDate createdAt;
//	
//	@Column(name="UPDATEDAT")
//	private LocalDate updatedAt;
	
	
	
	
	
}
