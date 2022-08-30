package com.lti.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Categories")
public class Category {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE , generator="CATSEQ")
	@SequenceGenerator(name="CATSEQ", sequenceName="catseq",allocationSize=1)
	@Column(name="CATEGORY_ID")
	private int category_id;
	
	@Column(name="NAME")
	private String name ;
	
	@Column(name="description")
	private String description;

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", name=" + name + ", description=" + description + "]";
	}

	public Category(int category_id, String name, String description) {
		super();
		this.category_id = category_id;
		this.name = name;
		this.description = description;
	}

	public Category() {
		super();
	}
	

	
	
	

}